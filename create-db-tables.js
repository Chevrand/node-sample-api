import { sql } from './db.js'

sql`
CREATE TABLE videos(
    id serial4 NOT NULL,
    title varchar(100) NOT NULL,
    duration int4,
    genre varchar(50)
)
`.then(() => {
    console.log('Tabelas criadas com sucesso!')
});