const axios = require('axios')

const data = {
    nome: 'Alysson',
    email: 'alysson@gmail.com'
}

axios.post('http://localhost:3000/', data)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
