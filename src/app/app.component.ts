import { Component, inject } from '@angular/core';
import { LenisService } from './services/lenis.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ScrollerComponent } from './components/scroller/scroller.component';

@Component({
  selector: 'app-root',
  imports: [
    /* Site parts */
    SidebarComponent,
    ScrollerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
