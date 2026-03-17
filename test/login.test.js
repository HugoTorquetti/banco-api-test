const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();

describe('Login', () => {
    describe('POST /login', () => {
        it('Deve retornar 200 com token em sting usando credenciais válidas', async () => {
            /*Requisição para a API*/
            const resposta = await request(process.env.BASE_URL)
                .post('/login') /*método e url*/
                .set('Content-Type', 'application/json') /*Definição do cabeçalho como json*/
                /*envio de credenciais válidas*/
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                    })
            
            expect(resposta.status).to.equal(200); /*Teste do código de erro*/
            expect(resposta.body.token).to.be.a('string'); /*Teste do tipo de dado recebido */
        });
    });
});