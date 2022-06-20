import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() {}

    // getListings(){
    //   this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listings[]>
    //   return this.listings;
    // }
}

interface Listings{
  $key?:string;
  title?:string;
  type?:string;
  image?:string;
  city?:string;
  owner?:string;
  bedrooms?:string;

}