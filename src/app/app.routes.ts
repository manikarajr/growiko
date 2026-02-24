import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/home/home').then(m => m.Home),
        title: 'Growiko Media | Grow Your Brand Digitally',
    },
    {
        path: 'about',
        loadComponent: () => import('./features/about/about').then(m => m.About),
        title: 'About Us | Growiko Media',
    },
    {
        path: 'services',
        loadComponent: () => import('./features/services/services').then(m => m.Services),
        title: 'Our Services | Growiko Media',
    },
    {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact').then(m => m.Contact),
        title: 'Contact Us | Growiko Media',
    },
    {
        path: '**',
        redirectTo: '',
    }
];