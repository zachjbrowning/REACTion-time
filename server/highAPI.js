const fs = require('fs');

function insertScore(list, score) {
    for (let i = 0; i < list.length; i++) {
        if (score.score < list[i].score) {
            list.splice(i, 0, score);
            return;
        }
    }
    list.push(score);
}


exports.getHighs = (game) => {
    var data = require('./highs.json');
    return data[game];
}


exports.add = (game, toSave) => {
    var data = require('./highs.json');
    
    
    if (data[game].length === 10) {
        if (data[game][9].score > toSave.score) {
            data[game].splice(9, 1);
            insertScore(data[game], toSave);
        }
    } else {
        insertScore(data[game], toSave);
    }
    //data[game].push(toSave);
    fs.writeFile('./server/highs.json', JSON.stringify(data), err => {if (err) console.log(err);})
}