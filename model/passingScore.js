const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(process.env.MONGO_INSTANCE, {useNewUrlParser: true, useUnifiedTopology: true});

const passingScoreSchema = new mongoose.Schema({
    Cocaína: String,
    Anfetamina: String,
    Metanfetamina: String,
    MDA: String,
    MDMA: String,
    THC: String,
    Morfina: String,
    Codeína: String,
    Heroína: String
}, {collection: 'PassingScore'})

module.exports = mongoose.model('PassingScore', passingScoreSchema)