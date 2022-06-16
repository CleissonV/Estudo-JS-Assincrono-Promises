const axios = require('axios').default;

axios.get('https://api.github.com/users/CleissonV')
  .then(function (response) {
    // manipula o sucesso da requisição
    const user = response.data

   return  axios.get(user.repos_url)
  })

  .then(function (repos) {
    console.log(repos.data);
  })
  .catch(function (error) {
    // manipula erros da requisição
    console.error(error);
  });