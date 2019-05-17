import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  user: firebase.User;
  constructor(
    private router: Router,
    private service: LoginService
  ) { }

  ngOnInit() {
    this.service.getLoggedInUser()
    .subscribe( user => {
      console.log( user );
      this.user = user;

      if (this.user != null ){
        this.router.navigateByUrl('/home');
      }
    });
}

  logniGoogle(){
    console.log('Login....');
    this.service.login();

  }

  loginFacebook(){
    console.log('Login....');
    this.service.loginF();

  }

}
