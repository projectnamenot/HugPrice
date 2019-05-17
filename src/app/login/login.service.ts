import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  login(){
    console.log('Redirecting to Google login provider');
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  loginF(){
    console.log('Redirecting to Google login provider');
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }
  logout(){
    this.afAuth.auth.signOut();
  }

  getLoggedInUser(){
    return this.afAuth.authState;
  }
}
