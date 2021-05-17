const jwt = require("jsonwebtoken");
const fs = require("fs");
require("dotenv").config();

class AuthController {
  generateToken(req, res) {
    const obrigatoryFields = ["client_id", "client_secret"];
    const missingFields = [];
    obrigatoryFields.forEach((field) => {
      if (!req.body[field]) {
        missingFields.push(field);
      }
    });

    if (missingFields.length > 0) {
      return res.send({
        message: `Os seguintes campos estão faltando para a geração do token: ${missingFields}`,
      });
    }

    // Alterar para buscar as credenciais dentro de um banco de dados ou em uma variável de ambiente
    if (req.body.client_id == "synvia" && req.body.client_secret == "project") {
      // const privateKey = process.env.PRIVATE_KEY;
      // const token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256'});

      const token = jwt.sign({ client_id: req.body.client_id }, "shhhhh");

      return res.send({
        generatedToken: token,
        message: "Token gerado!",
      });
    } else {
      return res.send({ message: "As credenciais estão incorretas" });
    }
  }
}

module.exports = AuthController;
