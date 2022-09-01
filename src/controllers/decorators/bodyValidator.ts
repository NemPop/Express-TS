import 'reflect-metadata';
import { MetadaKeys } from './MetadataKeys';

export function bodyValidator(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetadaKeys.validator, keys, target, key);
  };
}
