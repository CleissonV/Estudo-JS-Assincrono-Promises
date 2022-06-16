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

async function start(){
   try{
        const result = await promessa;
        console.log(result);
   } catch(e){
        console.log(e);
   } finally{
        console.log('Rodar sempre')
   }
}
start();