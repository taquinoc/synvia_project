const jwt = require("jsonwebtoken");
require("dotenv").config();

class SampleController {
  checkSample(req, res) {

    if (!req.headers.authorization) {
      return res.status(400).send({
        message: "Para o acesso da rota é esperado um token jwt",
      });
    }

    const tokenFromHeader = req.headers.authorization.split(' ')[1]
    
    const publicKey = process.env.PUBLIC_KEY;
    try{
        jwt.verify(tokenFromHeader, publicKey)
    }catch(err){
        return res.status(400).send({message: "O token inserido é inválido!"})
    }

    const payloadKeys = Object.keys(req.body)
    delete payloadKeys[0]

    let isPositive = false;
    let positiveSubstances = [];
    payloadKeys.forEach(key => {

    // Fazer a busca na base de dados sobre os indíces de tolerancia, por enquanto o dado será mockado
      const notaDeCorte = {
        "Cocaína": 0.5,
        "Anfetamina": 0.2,
        "Metanfetamina": 0.2,
        "MDA": 0.2,
        "MDMA": 0.2,
        "THC": 0.05,
        "Morfina": 0.2,
        "Codeína": 0.2,
        "Heroína": 0.2
      }
      
      if(req.body[key] >= notaDeCorte[key]){

        if(key == "Cocaína"){
          if((req.body['Benzoilecgonina'] || req.body['Norcocaína'] || req.body['Cocaetileno']) > 0.05){
            isPositive = true
            positiveSubstances.push(key)
          } 
        } else {
          isPositive = true;
          positiveSubstances.push(key)
        }
      }

    })

    if(isPositive){
      return res.status(200).send({message:`Seu teste deu positivo para as seguintes substâncias: ${positiveSubstances}`});
    } 
    return res.status(200).send({message:`Seu teste deu negativo!`});

  }
}

module.exports = SampleController;
