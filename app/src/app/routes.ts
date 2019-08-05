import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';

export const appRoutes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'value', component: ValueComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];