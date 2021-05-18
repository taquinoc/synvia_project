const PassingScore = require('../model/passingScore')
const jwt = require("jsonwebtoken");
require("dotenv").config();

class SampleController {
  async checkSample(req, res) {
    if (!req.headers.authorization) {
      return res.status(400).send({
        message: "Para o acesso da rota é esperado um token jwt",
      });
    }

    const tokenFromHeader = req.headers.authorization.split(" ")[1];

    const publicKey = process.env.PUBLIC_KEY;
    try {
      jwt.verify(tokenFromHeader, publicKey);
    } catch (err) {
      return res.status(400).send({ message: "O token inserido é inválido!" });
    }

    const payloadKeys = Object.keys(req.body);
    delete payloadKeys[0];

    let isPositive = false;
    let positiveSubstances = [];
    const passingScoreData = await PassingScore.findOne({_id:"60a44670bcbfc20e6779f61f"})
    payloadKeys.forEach((key) => {
      if (req.body[key] >= passingScoreData[key]) {
        if (key == "Cocaína") {
          if (
            (req.body["Benzoilecgonina"] ||
              req.body["Norcocaína"] ||
              req.body["Cocaetileno"]) > 0.05
          ) {
            isPositive = true;
            positiveSubstances.push(key);
          }
        } else {
          isPositive = true;
          positiveSubstances.push(key);
        }
      }
    });

    if (isPositive) {
      return res
        .status(200)
        .send({
          message: `Teste positivo para as seguintes substâncias: ${positiveSubstances}`,
          positive: isPositive,
          positiveSubstances
        });
    }
    return res.status(200).send({ message: `Teste negativo!`, positive: isPositive });
  }

  async saveResultOnDatabase(){

  }
}

module.exports = SampleController;
