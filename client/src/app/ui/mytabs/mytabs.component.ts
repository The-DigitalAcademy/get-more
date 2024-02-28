import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponseInterface } from 'src/app/interfaces/interfaces';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-mytabs',
  templateUrl: './mytabs.component.html',
  styleUrls: ['./mytabs.component.scss'],
})
export class MytabsComponent {
 constructor ( public auth: AuthenticationService,private router: Router)
  {}
  user: LoginResponseInterface | null = null

  isAdmin: boolean = false;

  ngOnInit() {
    this.auth.getUserData();
    this.user = this.auth.user;

    if (this.user?.role === 'admin') {
      this.isAdmin = true;
    }
}
}
