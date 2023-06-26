// Layouts
import { DefaultLayout, HeaderOnly } from '~/Layouts';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Feedback from '~/pages/Feedback';
import Add from '~/pages/addUser';
import Live from '~/pages/Live'

import config from '~/config';

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.nickname, component: Profile },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
  { path: config.routes.feedback, component: Feedback, layout: null },
  { path: config.routes.add, component: Add, layout: null },
  { path: config.routes.live, component: Live, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
