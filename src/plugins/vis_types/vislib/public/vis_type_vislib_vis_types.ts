/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { VisTypeDefinition } from 'src/plugins/visualizations/public';
import { gaugeVisTypeDefinition } from './gauge';
import { goalVisTypeDefinition } from './goal';

export { pieVisTypeDefinition } from './pie';

export const visLibVisTypeDefinitions: Array<VisTypeDefinition<any>> = [
  gaugeVisTypeDefinition,
  goalVisTypeDefinition,
];
