import mongoose from "mongoose";
import {IBootstrap} from "./bootstrap.interface";
export default class DatabaseBootstrap implements IBootstrap {
    private readonly username: string = 'root';
    private readonly password: string = 'root';
    private readonly database: string = 'test';
    private readonly host: string = 'localhost';
    private readonly port: number = 27017;
    private readonly authSource: string = 'admin';

    private getConnectionUrl(): string {
        return `mongodb://${this.username}:${this.password}@${this.host}:${this.port}/${this.database}?authSource=${this.authSource}`;
    }

    private getMongoOptions(): mongoose.ConnectOptions {
        return {
            maxPoolSize: 10,
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        };
    }

    initialize(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const url = this.getConnectionUrl();
            const options: mongoose.ConnectOptions = this.getMongoOptions();

            mongoose.connect(url, options);
        });
    }
}