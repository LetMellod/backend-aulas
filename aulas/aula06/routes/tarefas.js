const express = require('express');
const controller = require("../controllers/tarefaController");

const router = express.Router();

router.get("/", controller.listarTarefas);

router.post("/", controller.criarTarefa);

router.get("/:id", controller.obterTarefa);

router.put("/:id", controller.atualizarTarefa);

router.delete("/:id", controller.deletarTarefa);


module.exports = router;