import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'footer', component: FooterComponent },
  { path: '', redirectTo: '/hero', pathMatch: 'full' } // Specify pathMatch as "full"
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};
