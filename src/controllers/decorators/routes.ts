import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MetadaKeys } from './MetadataKeys';
import { Methods } from './Methods';

interface RouteHandlerDesc extends PropertyDescriptor {
  value?: RequestHandler;
}

function routerBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: RouteHandlerDesc) {
      Reflect.defineMetadata(MetadaKeys.path, path, target, key);
      Reflect.defineMetadata(MetadaKeys.method, method, target, key);
    };
  };
}

export const get = routerBinder(Methods.get);
export const put = routerBinder(Methods.put);
export const del = routerBinder(Methods.del);
export const post = routerBinder(Methods.post);
export const patch = routerBinder(Methods.patch);
