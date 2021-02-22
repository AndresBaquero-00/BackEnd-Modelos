import Server from "./classes/server";
import serieRoute from "./routes/serie";
import cors from 'cors';
import bodyParser from 'body-parser';

const server = new Server();

// Body Parser
server.app.use( bodyParser.urlencoded( { extended: true } ) );
server.app.use( bodyParser.json() );

server.app.use( cors({
    origin: true,
    credentials: true
}));

server.app.use('/serie', serieRoute);

server.start( () => {
    console.log('Server corriendo en ', server.port)
});



