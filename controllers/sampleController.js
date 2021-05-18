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

    let decodedToken = null;
    try{

        decodedToken = jwt.verify(tokenFromHeader, publicKey)

    }catch(err){
        return res.status(400).send({message: "O token inserido é inválido!"})
    }

    return res.status(200).send({ message: "Amostra deu negativo" });
  }
}

module.exports = SampleController;
