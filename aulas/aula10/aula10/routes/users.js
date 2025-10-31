const express = require('express');

const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/login", (req,res) => {
  const { username, password } = req.body;

//simula autenticação
  if (username === "jose@iesb.br" &&
    password === "abcd1234") {
      const playload = {
        iss: "Minha API",
        aud: "Você",
        email: username,
        nome:"Jose"
    };
    try {
      return res.json({token: auth.gerarToken(playload) });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }

  return res.status(401).json({msg: "Credenciais invalidas"});
});

router.post("/renovar", auth.verificarToken, auth.renovarToken);

module.exports = router;
