import React from 'react';
import 'bootstrap';
import './scss/dashlite.scss';
import './scss/theme.scss';
import 'simplebar';
import 'simplebar/dist/simplebar.min.css';
import { Route } from 'react-router-dom';
import { ConfigService, Admin, Menu, StaticService, AccountBusinessLogic } from 'onka-react-admin-core';
import About from './ui/public/About';
import './ext/scripts';
import config from './data/config';
import panelRoutes from './ui/panel/modules';
import Dashboard from './ui/panel/pages/Dashboard';
import { Footer } from './ui/panel/pages/Footer';
import { PublicFooter } from './ui/panel/pages/PublicFooter';

export const menus: Menu[] = [
  new Menu({
    menuKey: 'AdminApi',
    routes: [],
    hasAccess: false,
  }),
];

function App() {
  function onload(): Promise<any> {
    StaticService.TOKEN_NAME = 'AdminToken';
    AccountBusinessLogic.instance().loginUrl = 'AdminApi/public/login';
    ConfigService.instance().setApiUrl(config.API_URL || '');
    ConfigService.instance().setIsProd(config.IS_PROD);
    ConfigService.instance().setLangList({
      en: () => require('./ui/panel/modules/l10n/en.json'),
      tr: () => require('./ui/panel/modules/l10n/tr.json'),
    });
    return Promise.resolve();
  }
  const logoLight = '/images/logo.png';
  const logoDark = '/images/logo-dark.png';
  return (
    <Admin
      onLoad={onload}
      rootRoutes={[
        <Route key="0" path="/about">
          <About />
        </Route>,
      ]}
      dashboard={<Dashboard />}
      footer={<Footer />}
      toolbar={{ logoDark, logoLight }}
      menu={{
        menus,
        routes: panelRoutes,
        logoLight,
        logoDark,
      }}
      login={{
        footer: <PublicFooter />,
        logoLight,
        logoDark,
      }}
    ></Admin>
  );
}

export default App;
