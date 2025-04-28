
const axios = require("axios")
require("dotenv").config()

async function updateMongoWhiteList() {
    try {
        const ipRes = await axios.get("https://api.ipify.org/?format=json")
        const myIP = ipRes.data.ip

        const baseUrl = `https://cloud.mongodb.com/api/atlas/v1.0/groups/${process.env.MONGO_PROJECT_ID}/acessList`
        const body = [{
            ipAddress: myIP,
            coment: "IP Automatica del deploy (render)"
        }]

        const response = await axios.post(baseUrl, body, {
            auth: {
                username: process.env.MONGO_PUBLIC_KEY,
                password: process.env.MONGO_PRIVATE_KEY
            },

            Headers: {
                'Content-Type': 'application/json'
            }
        })

        console.log('IP añadida exitosamente a la whiteList');

    } catch (error) {
        console.error('Error al añadir la IP a la whiteList: ', error.response ? error.response.data : error.message);
        throw error
    }
}

module.exports = updateMongoWhiteList;
