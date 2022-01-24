import { Router } from 'express';

import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';

import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';

import { FindAllAvailableController } from './modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import { UpdateDeliverymanController } from './modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController';
import { FindAllClientDeliveriesController } from './modules/clients/useCases/deliveries/FindAllClientDeliveriesController';

import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman';
import { FindAllDeliverymanDeliveriesController } from './modules/deliveryman/useCases/deliveries/FindAllDeliverymanDeliveriesController';

const router = Router();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();

const findAllAvailableController = new FindAllAvailableController();
const findAllClientDeliveriesController = new FindAllClientDeliveriesController();
const findAllDeliverymanDeliveriesController = new FindAllDeliverymanDeliveriesController();
const updateDeliverymanController = new UpdateDeliverymanController();

router.post('/client/authenticate', authenticateClientController.handle);
router.post('/client', createClientController.handle);
router.get('/client/deliveries', ensureAuthenticateClient, findAllClientDeliveriesController.handle);

router.post('/deliveryman/authenticate', authenticateDeliverymanController.handle);
router.post('/deliveryman', createDeliverymanController.handle);
router.get('/deliveryman/deliveries', ensureAuthenticateDeliveryman, findAllDeliverymanDeliveriesController.handle);

router.get('/delivery/available', ensureAuthenticateDeliveryman, findAllAvailableController.handle);
router.post('/delivery', ensureAuthenticateClient, createDeliveryController.handle);
router.put('/delivery/updateDeliveryman/:id', ensureAuthenticateDeliveryman, updateDeliverymanController.handle);

export { router };