const express = require("express");

const tarefas = [
    { id: 1, nome: "Estudar midlleware", concluida: false },
    { id:2, nome: "praticar Express", concluida: true }
];

//Criando uma instância de aplicação Express
const app = express();
app.use(express.json());

// Middleware de log de aplicação
app.use((req, res, next) => {
    console.log("Time:", Date.now(), req.method, req.url );
    next();
});

const router = express.Router();

// Criação do router
router.use((req, res, next) => {
    console.log("Usando Express.Router")
    next ();
});

// Rotas dentro de '/tarefas' 
// GET /tarefas
router.get("/", (req, res) => {
    res.send(tarefas);
});

// POST /tarefas
router.post("/",(req, res) => {
    const novaTarefa = {...req.body, id:tarefas.length +1}
    tarefas.push (novaTarefa)
    res.status(201).send(novaTarefa);
});

// GET /tarefas/:id
router.get("/:id",(req, res) => {
    const { id }= req.params;
    const tarefaEncontrada = tarefas.find(item => item.id == id)
    if (tarefaEncontrada) return res.send(tarefaEncontrada);
    throw Error("Tarefa não localizada");
});

// PUT /tarefas/:id
router.put("/:id", (req, res) => {
    const { id }= req.params;
    const tarefaEncontrada = tarefas.find(item => item.id == id)
    if (tarefaEncontrada) { 
        tarefaEncontrada.nome = req.body.nome
        tarefaEncontrada.concluida = req.body.concluida
        return res.send(tarefaEncontrada)}
    throw Error("Tarefa não localizada");
});

// DELETE /tarefas/:id
router.delete("/:id", (req, res) => {
    req.status(404).send("Não encontrada");
});

// Monta o router na rota principal '/tarefas'
app.use('/tarefas', router);

// Midlleware de Erro
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).send("Deu erro!");
});

app.listen(3000, ()=>{
    console.log("App está ON!");
});

module.exports = router;