import { Router } from 'express';
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';

import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';

const router = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

router.post('/client', createClientController.handle);
router.post('/authenticate', authenticateClientController.handle);

export { router };