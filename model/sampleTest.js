const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_INSTANCE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const sampleTestSchema = new mongoose.Schema(
  {
    codigo_amostra: { type: String, minLength: 1, maxLength: 18 },
    Cocaína: Number,
    Anfetamina: Number,
    Metanfetamina: Number,
    MDA: Number,
    MDMA: Number,
    THC: Number,
    Morfina: Number,
    Codeína: Number,
    Heroína: Number,
    Benzoilecgonina: Number,
    Cocaetileno: Number,
    Norcocaína: Number,
    isPositive: Boolean,
    positiveSubstances: Array
  },
  { collection: "SampleTest" },
  { versionKey: false }
);

module.exports = mongoose.model("SampleTest", sampleTestSchema);
