import { Routes } from '@angular/router';
import { UserCard } from './user-card/user-card';
import { Home } from './home/home';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'user-card', component: UserCard}
];
