import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-account',
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  async handleClick() {
    const req = await fetch((environment.production === false ? 'http://localhost:4000' : '') + '/auth/google/url');
    const res = await req.json();
    window.location.href = res.url;
  }
}
