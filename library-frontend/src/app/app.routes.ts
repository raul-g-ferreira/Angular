import { Routes } from '@angular/router';
import { Home } from './screens/home/home';
import { Counter } from './screens/counter/counter';
import { Todos } from './screens/todos/todos';
import { Catalog } from './screens/catalog/catalog';
import { Clients } from './screens/clients/clients';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'counter',
    component: Counter,
  },
  {
    path: 'todos',
    component: Todos,
  },
  {
    path: 'catalog',
    component: Catalog,
  },
  {
    path: 'clients',
    component: Clients,
  },
];
