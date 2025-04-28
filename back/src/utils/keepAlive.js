
const axios = require('axios');
require('dotenv')

const keepServerAwake = () => {
    const url = process.env.SERVER_URL
    if (!url) {
        console.error("SERVER_URL no definido en el .env");
        return;
    }

    setInterval(async () => {
        try {

            await axios.get(url);
            console.log("Server funcionando");

        } catch (error) {
            console.error("Error al mantener funcionando el server", error.message)
        }
    }, 14 * 60 * 1000)

}

module.exports = keepServerAwake