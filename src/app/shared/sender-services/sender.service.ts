 
import { Tenders } from './../Model/tenders.model';
import { NgZone } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Vacancy } from '../Model/vacancy.model';
import { Article } from '../Model/article.model';

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
  tenderName?: any;
  indexNum?: String;
  tenderObj?: Tenders;
  vacancyObj?: Vacancy;
  articleObj?: Article;
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
    localStorage.setItem("nameROJ",this.tenderName);
  }

  setIndex(index?: String) {
    this.indexNum = index;
    console.log(this.indexNum);
  }

  setTenderInfo(tender?: Tenders) {
    this.tenderObj = tender;
    console.log("this is the senderservice "+this.tenderObj);
    localStorage.setItem("tenderOBJ",JSON.stringify(this.tenderObj));
  }

  setVacancyInfo(vacancy?: Vacancy) {
    this.vacancyObj = vacancy;
    console.log(this.vacancyObj);
  }

  setArticleInfo(article?: Article) {
    this.articleObj = article;
    console.log(this.articleObj);
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
