let aceitar = false

console.log('pedir uber');

const promessa = new Promise((resolve,reject) => {
    if(aceitar) {
        return resolve('carro chegou');
    } else{
        return reject('Pedido negado!');
    }
});

console.log('aguardando');

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log('finalizada'));