import expres from 'express';

export class AppRouter {
  private static instance: expres.Router;

  static getInstance(): expres.Router {
    if (!AppRouter.instance) {
      AppRouter.instance = expres.Router();
    }

    return AppRouter.instance;
  }
}
