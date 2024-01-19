import {ServerBootstrap} from "./bootstrap/server.bootstrap";
import app from "./app";
import DatabaseBootstrap from "./bootstrap/database.bootstrap";

const server = new ServerBootstrap(app);
const database = new DatabaseBootstrap();

(async () => {
    try {
        await server.initialize();
        await database.initialize();
    } catch (err) {
        console.log(`Error occurred: ${err}`);
    }
})()