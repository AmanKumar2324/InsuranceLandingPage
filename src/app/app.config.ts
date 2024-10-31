import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { HomeViewComponent } from './components/home-view/home-view.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent },
  // other routes if needed
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};
