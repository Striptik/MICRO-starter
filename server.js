// @flow

import { send } from 'micro';
import { router, get } from 'microrouter';

const hateoas: Function = (req: Object, res: Object): void => {
  const routesDefinition: Object = {
    '/': 'HATEOAS',
  };
 
  return send(res, 200, {
    routesDefinition,
    error: {},
    message: 'HATEOAS, API Documentation',
  });
};

module.exports = router(get('/', hateoas));
