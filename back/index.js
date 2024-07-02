const app = require("./src/server");

const conDB = require("./src/config/conDB");


conDB()
    .then(() => {
        app.listen(3000, () => {
            console.log("El servidor se está ejecutando en el puerto 3000")
        })
    })

    .catch(err => console.log(err))



