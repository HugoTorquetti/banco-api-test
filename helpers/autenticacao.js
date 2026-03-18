const request = require('supertest');

const obterToken = async (usuario, senha) => {
    const respostaLogin = await request(process.env.BASE_URL)
        .post('/login') /*método e url*/
        .set('Content-Type', 'application/json') /*Definição do cabeçalho como json*/
        /*envio de credenciais válidas*/
        .send({
            'username': usuario,
            'senha': senha
        })
                
    return respostaLogin.body.token;
}

module.exports = {
    obterToken
}