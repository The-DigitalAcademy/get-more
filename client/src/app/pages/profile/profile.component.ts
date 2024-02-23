import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any;

constructor(private router:Router){}  

  ngOnInit(): void {
    // get user data from local storage
    this.user = JSON.parse(localStorage.getItem('user') || '');
    console.log(this.user);
  }

  // remove user data from local storage
  logout() {
    localStorage.clear();
    this.user = null;
    this.router.navigate(['']);
  }

}
