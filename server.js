import { fastify } from 'fastify';
import { VideoRepository } from './repository/video-repository.js';
import dotenv from 'dotenv';

dotenv.config();
const { PORT } = process.env;

const app = fastify();
const repository = new VideoRepository();

app.post('/videos', async (request, response) => {
    await repository.create(request.body);

    return response.status(201).send();
});

app.get('/videos', async (request) => {
    const search = request.query.search;

    return await repository.list(search);
});

app.get('/videos/:id', async (request) => {
    const id = request.params.id;

    return await repository.findById(id);
});

app.put('/videos/:id', async (request, response) => {
    const id = request.params.id;
    await repository.update(id, request.body);

    return response.status(204).send();
});

app.delete('/videos/:id', async (request, response) => {
    const id = request.params.id;
    await repository.delete(id);

    return response.status(204).send();
});

app.listen({
    port: PORT ?? 3000,
});