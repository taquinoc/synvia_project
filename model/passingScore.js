const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_INSTANCE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const passingScoreSchema = new mongoose.Schema(
  {
    Cocaína: Number,
    Anfetamina: Number,
    Metanfetamina: Number,
    MDA: Number,
    MDMA: Number,
    THC: Number,
    Morfina: Number,
    Codeína: Number,
    Heroína: Number,
  },
  { collection: "PassingScore" },
  { versionKey: false }
);

module.exports = mongoose.model("PassingScore", passingScoreSchema);
