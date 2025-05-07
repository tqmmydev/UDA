import { Component, inject } from '@angular/core';
import { AccountComponent } from '../account/account.component';
import { NgFor } from '@angular/common';
import { NavigatorService } from '../../services/navigator.service';

@Component({
  selector: 'app-sidebar',
  imports: [
    AccountComponent,
    NgFor
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  navigator = inject(NavigatorService);
  sections = this.navigator.sections;
}
