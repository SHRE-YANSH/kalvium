const express = require('express');

const root = express();

root.get('/', (req, res) => {
    res.sendFile('/home/shreyansh/Documents/kalvium/index.html')
});

module.exports = root;