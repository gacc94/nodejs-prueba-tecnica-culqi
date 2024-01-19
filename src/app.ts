import express, {Application} from 'express';

export class App {
    expressApp: Application;

    constructor() {
        this.expressApp = express();
    }
}

export default new App().expressApp;