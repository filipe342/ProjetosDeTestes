const request = require('supertest');
const apiBaseUrl = process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com';

if (!process.env.API_BASE_URL) {
  console.warn("AVISO: Variável de ambiente API_BASE_URL não definida. Usando URL padrão.");
}

async function getUsers() {
    const response = await request(apiBaseUrl).get('/users');
    return response;
}

async function getUserById(id) {
    const response = await request(apiBaseUrl).get(`/users/${id}`);
    return response;
}

async function createUser(userData) {
    const response = await request(apiBaseUrl)
        .post('/users')
        .send(userData)
        .set('Accept', 'application/json');
    return response;
}

async function getPosts() {
    const response = await request(apiBaseUrl).get('/posts');
    return response;
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    getPosts,
};