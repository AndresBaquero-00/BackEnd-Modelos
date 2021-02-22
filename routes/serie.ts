import { Request, Response, Router } from "express";
import Conexion from '../classes/conexion';

const serieRoute = Router();

serieRoute.get('/consulta', async ( request: Request, response: Response ) => {
    const conexion = new Conexion();
    const id = request.query;
    let data = null;

    if( id.id )
        data = await conexion.query(`select * from serie where id=${ id.id }`)
    else
        data = await conexion.query('select * from serie;');

    response.json(
        data
    );
});

serieRoute.post('/registro', async ( request: Request, response: Response ) =>{
    const body = request.body;

    const conexion = new Conexion();
    const resp = await conexion.query(`insert into serie values(nextval('serie_sequence'), 
    '${ body.nombre }','${ body.anio }', ${ body.num_temp },'${ body.descripcion }');`);

    response.json({
        ok: true,
        rowCount: resp.rowCount
    });
});

serieRoute.delete('/delete', async ( request: Request, response: Response ) =>{
    const id = request.query;

    const conexion = new Conexion();
    const resp = await conexion.query(`delete from serie where id=${ id.id };`);

    response.json({
        ok: true,
        rowCount: resp.rowCount
    });
});

serieRoute.post('/update', async ( request: Request, response: Response ) => {
    const body = request.body;

    const conexion = new Conexion();
    const resp = await conexion.query(`update serie set nombre = '${ body.nombre }', 
    anio = '${ body.anio }', num_temp = ${ body.num_temp }, descripcion = '${ body.descripcion }'
    where id = ${ body.id };`);

    response.json({
        ok: true,
        rowCount: resp.rowCount
    });
});

export default serieRoute;