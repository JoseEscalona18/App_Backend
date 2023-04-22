const axios = require("axios")

function axioslogeo(data) {
    axios.post("user/login", data
    .then(res => {
        localStorage.setItem('accessToken', res.data.TokenSession);

    }))
}

module.exports = {axioslogeo}