import { Elysia } from 'elysia';
import index from './routes/index';
const router = new Elysia();

router.group('/api', app => app
  .get('/', context => index(context))
  )

export default router;