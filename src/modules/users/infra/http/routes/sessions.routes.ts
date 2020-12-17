import { Router } from 'express';

import SessionsController from '@modules/users/infra/http/controllers/SessionsController';

const sessionscontroller =  new SessionsController();
const sessionsRouter = Router();

sessionsRouter.post('/', sessionscontroller.create);

export default sessionsRouter;
