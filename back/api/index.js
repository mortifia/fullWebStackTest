"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const mercurius_1 = __importDefault(require("mercurius"));
const client_1 = require("@prisma/client");
const schema_1 = require("./schema");
const app = (0, fastify_1.default)();
const prisma = new client_1.PrismaClient();
app.register(mercurius_1.default, {
    schema: schema_1.schema,
    graphiql: true,
});
app.get('/', function (req, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = '{ add(x: 2, y: 2) }';
        return reply.graphql(query);
    });
});
app
    .listen(3000)
    .then(() => console.log(`🚀 Server ready at http://localhost:3000/graphiql`));
