import { Routes } from '@angular/router';
import { Home } from './home/home';
import {Login} from './login/login';
import {Habits} from './habits/habits';

export const routes: Routes = [
  { path: '', component: Home }, // ruta raíz
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'habits', component: Habits },
  { path: '**', redirectTo: '' } // cualquier ruta no válida redirige a Home
];
