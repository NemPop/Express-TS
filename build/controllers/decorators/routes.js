"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.post = exports.del = exports.put = exports.get = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
var Methods_1 = require("./Methods");
function routerBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys_1.MetadaKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadaKeys.method, method, target, key);
        };
    };
}
exports.get = routerBinder(Methods_1.Methods.get);
exports.put = routerBinder(Methods_1.Methods.put);
exports.del = routerBinder(Methods_1.Methods.del);
exports.post = routerBinder(Methods_1.Methods.post);
exports.patch = routerBinder(Methods_1.Methods.patch);
