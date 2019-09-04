import Koa from "koa";

export default class App extends Koa {
  constructor() {
    super();

    this.use(ctx => {
      ctx.body = "Hello Koa";
    });
  }
}
