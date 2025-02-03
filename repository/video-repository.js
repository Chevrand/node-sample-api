import { sql } from '../db.js';

export class VideoRepository {

    async create(video) {
        const { title, duration, genre } = video;

        await sql`
        INSERT INTO videos (title, duration, genre)
            VALUES (${title}, ${duration}, ${genre});
       `;
    };

    async list(search) {
        let videos;

        return search
            ? videos = await sql`SELECT * FROM videos v WHERE v.title ILIKE ${'%' + search + '%'};`
            : videos = await sql`SELECT * FROM videos;`;
    };

    async findById(id) {
        return await sql`SELECT * FROM videos v WHERE v.id = ${id};`;
    };

    async update(id, video) {
        const { title, duration, genre } = video;

        await sql`UPDATE videos
                SET title = ${title}, duration = ${duration}, genre = ${genre}
            WHERE id = ${id};
        `;
    };

    async delete(id) {
        await sql`DELETE from videos WHERE id = ${id}`;
    };
}