"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const nexus_1 = require("nexus");
const path_1 = __importDefault(require("path"));
const args = {
    x: (0, nexus_1.nonNull)((0, nexus_1.intArg)({
        description: 'value of x',
    })),
    y: (0, nexus_1.nonNull)((0, nexus_1.intArg)({
        description: 'value of y',
    })),
};
const query = (0, nexus_1.objectType)({
    name: 'Query',
    definition(t) {
        t.int('add', {
            resolve(_, { x, y }) {
                return x + y;
            },
            args,
        });
    },
});
exports.schema = (0, nexus_1.makeSchema)({
    types: [query],
    outputs: {
        schema: path_1.default.join(__dirname, './my-schema.graphql'),
        typegen: path_1.default.join(__dirname, './my-generated-types.d.ts'),
    },
}); // FAUX BUG DE MES 2 !!! OUI ON PEUT NE PAS VOULOIR UN SCHEMA FULL OPTION
