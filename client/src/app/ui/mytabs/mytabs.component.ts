import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-mytabs',
  templateUrl: './mytabs.component.html',
  styleUrls: ['./mytabs.component.scss'],
})
export class MytabsComponent {
 constructor ( private auth: AuthenticationService,)
  {}
}
