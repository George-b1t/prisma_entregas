import { Router } from 'express';

import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';

import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';

const router = Router();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();

router.post('/client/authenticate', authenticateClientController.handle);
router.post('/deliveryman/authenticate', authenticateDeliverymanController.handle);

router.post('/client', createClientController.handle);
router.post('/deliveryman', createDeliverymanController.handle);

export { router };