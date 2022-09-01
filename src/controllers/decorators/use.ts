import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MetadaKeys } from './MetadataKeys';

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(MetadaKeys.middleware, target, key) || [];

    Reflect.defineMetadata(
      MetadaKeys.middleware,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
