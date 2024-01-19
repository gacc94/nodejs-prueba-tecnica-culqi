import {connectMongoDb} from "./app/infrastructure/database/mongodb/database";
import express from 'express';

(async () => {
    await connectMongoDb();
    const app = express();
})()