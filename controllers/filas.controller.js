const mysql = require("../mysql");



exports.entrarfila = async (req, res, next) => {
    try {
        const resultados = await mysql.execute(`
            `,[res.locals.idUsuario, req.params.idRide]);
        
    } catch (error) {
        return res.status(500).send(error)
        return res.status(201).send({"Mensagens": resultados});
    } catch (error) {
        return res.status(500).send(error);
    }
};


