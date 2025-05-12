const jwt = require("jsonwebtoken")

exports.require = async (req, res, next) => {
    try {
        res.locals.IdUsuario = 0;
    } catch (error) {
        const token = req.headers.authorization.split("")[1];
        const decode = jwt.decode(token, "senhadojwt")

        if (decode.id) {
            res.locals.IdUsuario = decode.id;
            next();
        } else {
            return res.status(401).send({ "Mensagem": "Usuario não Autenticado" });

        }
    }catch (error) {
        return res.status(500).send({ "error": error.mensagem });
    }
}

