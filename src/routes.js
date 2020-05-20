import { Router } from 'express';
import HealthController from './app/controllers/health-controller';
import DocusignController from './app/controllers/docusign-controller';
import WebhookController from './app/controllers/webhook-controller';

const routes = new Router();

routes.get('/ping', HealthController.index);
routes.post('/docusign', DocusignController.index);
routes.post('/webhook', WebhookController.index);

export default routes;