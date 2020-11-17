const fs = require('fs');
const path = require("path");
const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

let rawdata_i_id = fs.readFileSync(path.resolve(__dirname, "../data/anime_index_to_id.json"));
let animes_i_id = JSON.parse(rawdata_i_id);
let rawdata_id_i = fs.readFileSync(path.resolve(__dirname, "../data/anime_id_to_index.json"));
let animes_id_i = JSON.parse(rawdata_id_i);

var model,initial_weights_3,initial_weights_11;

(async () => {
    try
    {
        model = await tf.loadLayersModel('file://model/tfjs_model/model.json');
        model.compile({optimizer:"adam",loss:"meanSquaredError"});
        initial_weights_3 = model.layers[3].getWeights();
        initial_weights_11 = model.layers[11].getWeights();
        console.log(model.summary());
        // console.log(model.layers[11]);
        // console.log(model.layers[3]);
        console.log('Model Loaded');
    }
    catch(error)
    {
        console.error(error);
    }
})();

const dsu = (arr1, arr2) => arr1
  .map((item, index) => [arr2[index], item]) // add the args to sort by
  .sort(([arg1], [arg2]) => arg2 - arg1) // sort by the args
  .map(([, item]) => item); 

async function reset_weights() {
    await model.layers[3].setWeights(initial_weights_3);
    await model.layers[11].setWeights(initial_weights_11);
    console.log("reset");
}

async function predict(ids,scores) {
    reset_weights();
    
    var anime_inputs_array = ids.map((i)=>{ return animes_id_i[i]; });
    var anime_inputs = tf.tensor(anime_inputs_array);
    var user_inputs = tf.tensor(Array.from({length: ids.length}, (v, i) => 0));
    var user_scores = tf.tensor(scores);
    await model.fit([anime_inputs,user_inputs],user_scores, {epochs:2000,verbose:0});
    console.log("trained");

    var all_anime_inputs_array = Array.from({length: 4036}, (v, i) => i);
    all_anime_inputs_array = all_anime_inputs_array.filter(x => !anime_inputs_array.includes(x) );
    console.log(all_anime_inputs_array.length);
    var all_anime_inputs = tf.tensor(all_anime_inputs_array);
    user_inputs = tf.tensor(Array.from({length: all_anime_inputs_array.length}, (v, i) => 0));
    var ans = await Array.from(model.predict([all_anime_inputs,user_inputs]).dataSync());
    console.log("predicted");

    var ans_sort = dsu(all_anime_inputs_array,ans);
    console.log("sorted");
    return  ans_sort.slice(0,10).map((i)=>{
        return animes_i_id[i]; 
    });
}


exports.model = model;
exports.reset_weights = reset_weights;
exports.predict = predict;