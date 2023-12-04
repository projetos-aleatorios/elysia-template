import { Context } from "elysia";

export default function index(context: Context) {
  
  context.set.status = 200;

  return JSON.stringify({
    code: context.set.status,
    message: 'Hello, World!'
  });
  
}