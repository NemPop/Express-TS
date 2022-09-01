import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadaKeys } from './MetadataKeys';
import { NextFunction, RequestHandler, Request, Response } from 'express';

function bodyValidators(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send('Invalid request');
      return;
    }
    console.log(req.body);
    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Missing property ${key}`);
        return;
      }
    }
    next();
  };
}

export function Controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(MetadaKeys.path, target.prototype, key);
      const method: Methods = Reflect.getMetadata(
        MetadaKeys.method,
        target.prototype,
        key
      );
      const middlewares =
        Reflect.getMetadata(MetadaKeys.middleware, target.prototype, key) || [];

      const requriedProps =
        Reflect.getMetadata(MetadaKeys.validator, target.prototype, key) || [];

      const validator = bodyValidators(requriedProps);
      if (path) {
        router[method](
          `${routePrefix}${path}`,
          ...middlewares,
          validator,
          routeHandler
        );
      }
    }
  };
}
