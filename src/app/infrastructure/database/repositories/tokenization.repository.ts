import {TokenizationModel} from "../mongodb/models/user.schema";
import {Tokenization} from "../../../domain/entities/tokenization.entity";

export class TokenizationRepository {
    constructor(
        private model = TokenizationModel
    ) { }
    async getAll() {
        return this.model.find().sort({ createdAt: -1 });
    };
    async create(data: Tokenization) {
        const newUser = new this.model(data);
        await newUser.save();
        return newUser;
    };
    async findById(id: string) {
        return this.model.findById(id);
    };
}