import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { profile } from 'console';
import { signInWithEmailAndPassword, updateProfile, UserInfo } from 'firebase/auth';
import { update } from 'firebase/database';
import { authState } from 'rxfire/auth';
import { from, Observable, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth);
  constructor(private auth:Auth) { }

  login(username: string, password: string){
    return from (signInWithEmailAndPassword(this.auth, username, password))
   }
updateProfileData(profileData: Partial<UserInfo>): Observable<any> {
      const user = this.auth.currentUser;
      return of(user).pipe(
        concatMap(user=> {
          if(!user) throw new Error('Not Authenticated');
          
          return updateProfile(user, profileData)
        })
      )
}


   logout(){
     return from(this.auth.signOut());
   }
 
   
 }

