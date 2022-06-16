import { Tenders } from './../Model/tenders.model';
import { NgZone } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Vacancy } from '../Model/vacancy.model';

@Injectable({
  providedIn: 'root'
})
export class SenderService {
  userData: any;

  public tenders = [
    { "name": "Road" },
    { "name": "Fire & Rescue" },
    { "name": "Protection Services" },
    { "name": "Waste Management" },
    { "name": "Electricity" },
    { "name": "Water & Sanitation" },
    { "name": "Community Services" }

  ];

  message?: String;
  tenderName?: String;
  indexNum?: String;
  tenderObj?: Tenders;
  vacancyObj?: Vacancy;
  constructor(private _router: Router) { }

  setMessage(data?: string) {
    this.message = data;
  }

  getMessage() {
    return this.message
  }

  setTenderName(data?: String) {
    this.tenderName = data;
    console.log(this.tenderName);
  }

  setIndex(index?: String) {
    this.indexNum = index;
    console.log(this.indexNum);
  }

  setTenderInfo(tender?: Tenders) {
    this.tenderObj = tender;
    console.log(this.tenderObj);
  }

  setVacancyInfo(vacancy?: Vacancy) {
    this.vacancyObj = vacancy;
    console.log(this.vacancyObj);
  }

  getTenderInfo() {
    return this.tenderObj
  }

  getVacancyInfo() {
    return this.vacancyObj
  }

  getIndex() {
    return this.indexNum
  }

  getTenderName() {
    return this.tenderName
  }

  //Navication to other pages

  navigateToSignIn() {
    this._router.navigate(['signin']);

    window.location.reload();
  }
}
