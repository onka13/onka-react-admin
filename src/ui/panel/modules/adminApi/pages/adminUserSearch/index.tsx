import { RouteItem, LibService } from 'onka-react-admin-core';
import React from 'react';
import { pageConfig } from './config';

var business = () => import('./business');

export const route: RouteItem = new RouteItem({
  config: pageConfig,
  list: LibService.instance().loadableComp(business, 'Search'),
  detail: LibService.instance().loadableComp(business, 'Detail'),
  edit: LibService.instance().loadableComp(business, 'Upsert'),
  create: LibService.instance().loadableComp(business, 'Upsert'),
});
