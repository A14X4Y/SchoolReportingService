import Home from '../screens/Home/Home';
import Auth from '../screens/Auth/Auth';

const routes = [
  {
    route: '/',
    component: Home,
    isAuth: true
  },
  {
    route: '/auth',
    component: Auth,
    isAuth: true
  }
];

export { routes };
