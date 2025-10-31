const jwt = require("jsonwebtoken");

function verificarToken(req,res,next) {
    const { authorization } =  req.headers;
    try {
        const token = authorization.split(" ")[1];
        const playload = jwt.verify(
            token,
            process.env.JWT_SEGREDO
        );
        req.playload = {
            iss: playload.iss,
            aud: playload.aud,
            email: playload.email,
            nome: playload.nome,
        };
        return next ();
    } catch (err) {
        res.status(401).json({msg: "Token inválido"});
    }
}


function gerarToken(playload) {
    const expiresIn = 30;
    try{
        const token = jwt.sign(
            playload,
            process.env.JWT_SEGREDO,
            { expiresIn }
        );
            return token;
    } catch(err) {
        throw Error("Erro ao gerar token");
    }

}

function renovarToken(req, res) {
    try{
        const playload = req.playload;
        res.json({ token: gerarToken(playload) });
    } catch (err) {
        res.status(500).json({msg: "Erro ao renovar o token"});
    }
}

module.exports = { verificarToken, gerarToken, renovarToken }