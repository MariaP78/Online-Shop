import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'online-shop';

  constructor(private router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === '/login'; //!== diferit
  }
}
