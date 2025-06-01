import { AfterViewInit, Component, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { NavigatorService } from '../../services/navigator.service';

@Component({
  selector: 'app-account',
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements AfterViewInit {
  navigator = inject(NavigatorService);
  userInfo: any;
  async ngAfterViewInit() {
      if (typeof document !== 'undefined') {
        const req = await fetch('/api/profile');
        const res = await req.json();
        this.userInfo = res;
      }
  }
  async handleClick() {
    if (!this.userInfo) {
      const req = await fetch('/auth/google/url?callbackHost=' + window.location.origin + '&callbackUrl=' + window.location.href);
      const res = await req.json();
      window.location.href = res.url;
      return;
    }
    this.navigator.goToQuiz();
  }
}
