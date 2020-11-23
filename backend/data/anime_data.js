const fs = require('fs');
const path = require("path");
const Fuse = require("fuse.js")

let rawdata = fs.readFileSync(path.resolve(__dirname, "animes.json"));
let animes = JSON.parse(rawdata);
let rawdata_sim = fs.readFileSync(path.resolve(__dirname, "final_cs.json"));
let animes_sim = JSON.parse(rawdata_sim);


const nameSearch = new Fuse(Object.keys(animes).map((id) => {
    return (({title,title_english,genre})=>({id,title,title_english,genre}))(animes[id]);
}), {
    includeScore: false,
    keys: ['title', 'title_english']
})


// const genreSearch = new Fuse(Object.keys(animes).map((id) => {
//     return { id, ...animes[id] };
// }), {
//     includeScore: false,
//     keys: ['genre']
// })

// console.log(rawdata_sim.slic);
function getAnime(id) {
    if (animes[id] == null) {
        throw `Anime ${id} does not exist`;
    }
    return { id, ...animes[id] };
}
function getAnimeMin(list) {
    return list.map((id) => (({ title, image_path }) => ({id,title, image_path }))(animes[id]));
}
function getSimAnime(id, num) {
    return getAnimeMin(animes_sim[id].slice(1, num + 1));
}
function searchAnime(query, incGenre, excGenre, num) {
    let queryMatch = nameSearch.search(query).map((item) => item.item);
    // console.log(excGenre);

    if (incGenre != null || excGenre != null) {
        // let genreString = '';
        if (incGenre != null) {
            for (let i = 0; i < incGenre.length; i++) {
                const gee = incGenre[i];
                queryMatch = queryMatch.filter(x => x.genre != null && x.genre.includes(gee));
            }
            // genreString = '\''+incGenre.join(' \'');
            // console.log(queryMatch[0].genre.includes('dven'));
        }
        if (excGenre != null) {
            for (let i = 0; i < excGenre.length; i++) {
                const gee = excGenre[i];
                queryMatch = queryMatch.filter(x => x.genre != null && !x.genre.includes(gee));
            }
            // genreString = genreString + ' !' + excGenre.join(' !');
        }
        // console.log(genreString);
        // let genreMatch = genreSearch.search(genreString).map((item) => item.item.id);
        // queryMatch = queryMatch.filter(x=>genreMatch.includes(x.id));
    }
    return getAnimeMin(queryMatch.slice(0, num).map((x)=>x.id));
}

exports.getAnime = getAnime;
exports.getAnimeMin = getAnimeMin;
exports.getSimAnime = getSimAnime;
exports.searchAnime = searchAnime;