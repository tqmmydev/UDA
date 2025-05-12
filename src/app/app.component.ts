import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ScrollerComponent } from './components/scroller/scroller.component';
import { NavigatorService } from './services/navigator.service';
import { QuizComponent } from './components/quiz/quiz.component';

@Component({
  selector: 'app-root',
  imports: [
    /* Site parts */
    SidebarComponent,
    ScrollerComponent,
    QuizComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  navigator = inject(NavigatorService);
  sidebar = SidebarComponent;

  ngAfterViewInit(): void {

  }
}
