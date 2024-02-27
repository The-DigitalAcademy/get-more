import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // get user data from local storage
    this.user = JSON.parse(localStorage.getItem('user') || '');
    
    // console.log(this.user);
  }

  edit(id: any) {
    this.router.navigate([`dash/edit/${id}`]);
  }

  // remove user data from local storage
  logout() {
    localStorage.clear();
    this.user = null;
    this.router.navigate(['']);
  }
}
