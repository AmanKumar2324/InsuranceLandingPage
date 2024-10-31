import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'footer', component: FooterComponent },
  { path: '', redirectTo: '/hero', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
