import Home from '../screens/Home/Home';

const routes = [
  {
    path: '/',
    component: Home,
    isAuth: true
  },
  {
    path: '/auth/:type',
    component: 'Auth',
    isAuth: false
  }
];

export { routes };
