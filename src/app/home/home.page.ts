import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {

  user: firebase.User;
  constructor(
    private service: LoginService,
    private router: Router

  ){}

  ngOnInit(){
    this.service.getLoggedInUser()
    .subscribe( user => {
      console.log( user );
      this.user = user;

      if (this.user != null ){
        this.router.navigateByUrl('/login');
      }
    });
  }

  logoutGoogle(){
    console.log('Logout....')
    this.service.logout();
  }

}
