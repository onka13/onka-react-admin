import React from 'react';
import { Route } from 'react-router-dom';
import { ConfigService, Admin, Menu, StaticService } from 'onka-react-admin-core';
import AdminIcon from "@material-ui/icons/Person";
import About from './ui/public/About';
import config from './data/config';
import panelRoutes from './ui/panel/modules';
import Dashboard from './ui/panel/pages/Dashboard';
import { Footer } from './ui/panel/pages/Footer';
import { PublicFooter } from './ui/panel/pages/PublicFooter';
import './ext/scripts';

export const menus: Menu[] = [
  new Menu({
    menuKey: 'AdminApi',
    routes: [],
    hasAccess: false,
    icon: <AdminIcon />
  }),
];

function App() {
  function onload(): Promise<any> {
    StaticService.TOKEN_NAME = "AdminToken";
    ConfigService.instance().setApiUrl(config.API_URL || '');
    ConfigService.instance().setIsProd(config.IS_PROD);
    ConfigService.instance().setLangList({
      en: () => require('./ui/panel/modules/l10n/en.json'),
      tr: () => require('./ui/panel/modules/l10n/tr.json'),
    });
    return Promise.resolve();
  }
  const logo = '/images/logo.png';
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
      toolbar={{  }}
      menu={{
        menus,
        routes: panelRoutes,
        logo
      }}
      login={{
        footer: <PublicFooter />,
        logo
      }}
    ></Admin>
  );
}

export default App;
