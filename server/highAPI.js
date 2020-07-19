const fs = require('fs');


exports.getHighs = (game) => {
    var data = require('./highs.json');
    return data[game];
}


exports.add = (game, toSave) => {
    var data = require('./highs.json');
    data[game].push(toSave);
    fs.writeFile('./server/highs.json', JSON.stringify(data), err => {if (err) console.log(err);})
}