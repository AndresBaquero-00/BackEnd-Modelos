import { Client, QueryResult } from 'pg';

export default class Conexion{

    private config = {
        user: 'postgres',
        host: 'localhost',
        database: 'Netflixxx',
        password: 'root',
        port: 5432
    };

    private pg: Client;

    constructor(){
        this.pg = new Client( this.config );
    }

    async query( query: string ): Promise<QueryResult>{
        return new Promise( async resolve => {
            await this.pg.connect();
            const data = await this.pg.query( query );
            await this.pg.end();

            resolve( data );
        });
    }
}