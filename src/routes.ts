import { Router } from 'express';

import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';

import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';
import { FindAllAvailableController } from './modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';

const router = Router();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();

const findAllAvailableController = new FindAllAvailableController();

router.post('/client/authenticate', authenticateClientController.handle);
router.post('/client', createClientController.handle);

router.post('/deliveryman/authenticate', authenticateDeliverymanController.handle);
router.post('/deliveryman', createDeliverymanController.handle);

router.get('/delivery/available', findAllAvailableController.handle);
router.post('/delivery', ensureAuthenticateClient, createDeliveryController.handle);

export { router };