// Layouts
import { HeaderOnly } from '~/components/Layouts';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Feedback from '~/pages/Feedback';

import routesConfig from '~/config/routes';

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.nickname, component: Profile },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.search, component: Search, layout: null },
  { path: routesConfig.feedback, component: Feedback, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
