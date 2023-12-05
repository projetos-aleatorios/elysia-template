import { Elysia } from 'elysia';
import index from './routes/index';
const router = new Elysia();

router.group('/api', app => app
  .use(index)
  )

export default router;
