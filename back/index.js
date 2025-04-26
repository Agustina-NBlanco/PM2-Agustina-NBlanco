const app = require("./src/server");

const conDB = require("./src/config/conDB");

const PORT = process.env.PORT || 3000;

conDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log("El servidor se está ejecutando en el puerto 3000")
        })
    })

    .catch(err => console.log(err))



