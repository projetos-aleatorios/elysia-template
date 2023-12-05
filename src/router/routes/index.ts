import { Elysia } from "elysia";

export default (app: Elysia) => app.get('/', (context) => {
  
  context.set.status = 200;

  return JSON.stringify({
    code: context.set.status,
    message: 'Hello, World!'
  });
  
})
