import { Elysia } from 'elysia';
import router from './router/router';

class App {

  public readonly _app: Elysia;

  constructor() {
    this._app = new Elysia();
    this.console().router();
  };
  
  private router() {
    this._app.use(router);
    return this;
  }
  
  private console() {
    console.log('Server online!');
    return this;
  }

}

export default new App()._app;