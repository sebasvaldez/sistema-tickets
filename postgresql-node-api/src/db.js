import pg from 'pg';

export const pool=new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'sebas123',
    database: 'sistema-tickets',
    port: '5432'
});

