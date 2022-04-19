import { NgZone } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SenderService {
  userData: any;

  public tenders = [
    {"name": "Road"},
    {"name": "Fire & Rescue"},
    {"name": "Protection Services"},
    {"name": "Waste Management"},
    {"name": "Electricity"},
    {"name": "Water & Sanitation"},
    {"name": "Community Services"}

  ];

  message?: String;
  tenderName?:String;
  indexNum?: String;

  constructor(private _router: Router){}

  setMessage(data?: string){
    this.message=data;
  }

  getMessage()
  {
    return this.message
  }

  setTenderName(data?:String)
  {
    this.tenderName=data;
    console.log(this.tenderName);
  }

  setIndex(index?:String)
  {
    this.indexNum=index;
    console.log(this.indexNum);
  }

  getIndex(){
    return this.indexNum
  }

  getTenderName()
  {
    return this.tenderName
  }

  //Navication to other pages

  navigateToSignIn()
  {
    this._router.navigate(['signin']);

    window.location.reload();
  }
}
