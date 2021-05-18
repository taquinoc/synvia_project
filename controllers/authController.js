const jwt = require("jsonwebtoken");
const fs = require("fs");
require("dotenv").config();

class AuthController {
  async generateToken(req, res) {
    const obrigatoryFields = ["client_id", "client_secret"];
    const missingFields = [];
    obrigatoryFields.forEach((field) => {
      if (!req.body[field]) {
        missingFields.push(field);
      }
    });

    if (missingFields.length > 0) {
      return res.status(400).send({
        message: `Os seguintes campos estão faltando para a geração do token: ${missingFields}`,
      });
    }

    if (req.body.client_id == "synvia" && req.body.client_secret == "project") {
      const privateKey = process.env.PRIVATE_KEY;
      const token = jwt.sign({ sub: req.body.client_id, algorithm: "RS256", issuer:"synvia_backend", subject:"Token authenticator endpoints"}, privateKey, { algorithm: 'RS256', expiresIn: 60 * 60});
      return res.status(200).send({
        tokenType: "bearer",
        expiresIn: 3600,
        token,
        message: "Token gerado!",
      });
    } else {
      return res.send({ message: "As credenciais estão incorretas" });
    }
  }
}

module.exports = AuthController;
