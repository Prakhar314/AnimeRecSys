const fs = require('fs');
const path = require("path");
const tf = require('@tensorflow/tfjs');
const { argSort } = require('../data/anime_data.js');
require('@tensorflow/tfjs-node');

let rawdata_i_id = fs.readFileSync(path.resolve(__dirname, "../data/anime_index_to_id.json"));
let animes_i_id = JSON.parse(rawdata_i_id);
let rawdata_id_i = fs.readFileSync(path.resolve(__dirname, "../data/anime_id_to_index.json"));
let animes_id_i = JSON.parse(rawdata_id_i);

var model;

(async () => {
    try {
      await reset_weights(true);
    }
    catch (error) {
        console.error(error);
    }
})();

async function reset_weights(show) {
    model = await tf.loadLayersModel('file://model/tfjs_model/model.json');
    model.compile({ optimizer: "sgd", loss: "meanSquaredError" });
  if(show){
    console.log(model.summary());
  }
    // console.log(model.layers[11]);
    // console.log(model.layers[3]);
    console.log('Model Loaded');
}

async function predict(job) {
    ids = job.data.ids;
    scores = job.data.scores;
    num = job.data.num;
    await reset_weights(false);

    var anime_inputs_array = ids.map((i) => { return animes_id_i[i]; });
    var anime_inputs = tf.tensor(anime_inputs_array);
    var user_inputs = tf.tensor(Array.from({ length: ids.length }, (v, i) => 0));
    var user_scores = tf.tensor(scores);
    await model.fit([anime_inputs, user_inputs], user_scores, {
        epochs: 1500, verbose: 0, callbacks: {
            onEpochEnd: async (epoch, logs) => {
                if (epoch % 100 == 0) {
                    console.log(epoch + ':' + logs.loss);
                    job.progress(epoch / 15 | 0);
                    if(logs.loss<1){
                        model.stopTraining = true;
                    }
                }
            }
        }
    });
    console.log(await model.evaluate([anime_inputs, user_inputs], user_scores, { verbose: 0 }).dataSync());
    console.log("trained");

    var all_anime_inputs_array = Array.from({ length: 4036 }, (v, i) => i);
    all_anime_inputs_array = all_anime_inputs_array.filter(x => !anime_inputs_array.includes(x));
    // console.log(all_anime_inputs_array.length);
    var all_anime_inputs = tf.tensor(all_anime_inputs_array);
    user_inputs = tf.tensor(Array.from({ length: all_anime_inputs_array.length }, (v, i) => 0));
    var ans = await Array.from(model.predict([all_anime_inputs, user_inputs]).dataSync());
    console.log("predicted");

    var ans_sort = argSort(all_anime_inputs_array, ans);
    console.log("sorted");
    return {
        "data": ans_sort.slice(0, num).map((i) => {
            return animes_i_id[i];
        })
    };
}


exports.model = model;
exports.reset_weights = reset_weights;
exports.predict = predict;