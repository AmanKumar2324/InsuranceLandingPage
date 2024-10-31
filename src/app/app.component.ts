import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HomeViewComponent } from './components/home-view/home-view.component';
import { FeaturesComponent } from "./components/features/features.component";
import { AboutIncepComponent } from "./components/about-incep/about-incep.component";
import { ServicesComponent } from "./components/services/services.component";
import { HeroComponent } from "./components/hero/hero.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeViewComponent, FeaturesComponent, AboutIncepComponent, ServicesComponent, HeroComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'InsuranceLandingPage';
}
