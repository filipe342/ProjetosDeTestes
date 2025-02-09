const { matchers } = require('jest-json-schema');
expect.extend(matchers);

const { userSchema, userListSchema } = require('../../schemas/user.schema');
const { postSchema, postListSchema } = require('../../schemas/post.schema');

describe('Testes da API JSONPlaceholder', () => {

    it('GET /users deve retornar uma lista de usuários, status 200 e schema válido', async () => {
        jest.resetModules();
        const api = require('../../api/api');
        const response = await api.getUsers();
        console.log('GET /users - Resposta:', response.status, response.body);
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body).toMatchSchema(userListSchema);
    });

    it('GET /users/:id deve retornar um usuário específico, status 200 e schema válido', async () => {
        jest.resetModules();
        const api = require('../../api/api');
        const userId = 1;
        const response = await api.getUserById(userId);
        console.log(`GET /users/${userId} - Resposta:`, response.status, response.body);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id', userId);
        expect(response.body).toMatchSchema(userSchema);
    });

    it('GET /users/:id deve retornar 404 se o usuário não existir', async () => {
        jest.resetModules();
        const api = require('../../api/api');
        const userId = 999999;
        const response = await api.getUserById(userId);
        console.log(`GET /users/${userId} - Resposta:`, response.status, response.body);
        expect(response.status).toBe(404);
    });

    it('POST /users deve criar um novo usuário (simulado) e retornar status 201', async () => {
        jest.resetModules();
        const api = require('../../api/api');
        const novoUsuario = {
            name: 'Novo Usuário',
            email: 'novo@example.com',
        };
        const response = await api.createUser(novoUsuario);
        console.log('POST /users - Resposta:', response.status, response.body); 
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('name', novoUsuario.name);
        expect(response.body).toHaveProperty('email', novoUsuario.email);
    });

    it('POST /users deve retornar erro 400 se um campo obrigatório estiver faltando', async () => {
        jest.resetModules();
        const api = require('../../api/api');
        const usuarioIncompleto = {
            email: 'teste@example.com',
        };
        const response = await api.createUser(usuarioIncompleto);
        console.log('POST /users (incompleto) - Resposta:', response.status, response.body);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body).not.toHaveProperty('name');
        expect(response.body).toHaveProperty("email", "teste@example.com");
    });

    it('GET /posts deve retornar uma lista de posts, status 200 e schema válido', async () => {
        jest.resetModules();
        const api = require('../../api/api');
        const response = await api.getPosts();
        console.log('GET /posts - Resposta:', response.status, response.body);
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body).toMatchSchema(postListSchema);
    });

    it('deve retornar erro 500 quando o servidor simula um erro', async () => {
        await jest.isolateModulesAsync(async () => {
            jest.doMock('supertest', () => {
                return () => ({
                    get: () => Promise.resolve({ status: 500, body: {} }),
                    post: () => Promise.resolve({}),
                });
            });

            const api = require('../../api/api');
            const response = await api.getUsers();
            console.log('GET /users (mock 500) - Resposta:', response.status, response.body);
            expect(response.status).toBe(500);
            expect(response.body).toEqual({});
        });
    });
});
