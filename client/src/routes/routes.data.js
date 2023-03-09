import Home from '../screens/Home/Home';
import Auth from '../screens/Auth/Auth';
import GiaPage from '../screens/GIAPage/GiaPage';
import FG from '../screens/FG/FG';

const routes = [
  {
    path: '/',
    component: Home,
    isAuth: true
  },
  {
    path: '/auth',
    component: Auth,
    isAuth: false
  },
  {
    path: '/gia',
    component: GiaPage,
    isAuth: true
  },
  {
    path: '/fg',
    component: FG,
    isAuth: true
  }
];

export { routes };
