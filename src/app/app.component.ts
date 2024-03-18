import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowcaserowComponent } from './showcaserow/showcaserow.component';
import { ReviewrowComponent } from './reviewrow/reviewrow.component';
import { StatsrowComponent } from './statsrow/statsrow.component';
import { FooterrowComponent } from './footerrow/footerrow.component';
import { CompletedjobsrowComponent } from './completedjobsrow/completedjobsrow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ShowcaserowComponent, ReviewrowComponent, StatsrowComponent, FooterrowComponent, CompletedjobsrowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Website of a Professional"
}