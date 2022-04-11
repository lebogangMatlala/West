import { Tenders } from './../Model/tenders.model';
import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

import { Tutorial } from '../Model/tutorial.model';
import { Vacancy } from '../Model/vacancy.model';


@Injectable({
  providedIn: 'root'
})
export class TenderService {

  listChangedEvent: EventEmitter<Tenders[]> = new EventEmitter();

  listOfTenders: Tenders[] = []
  listOfVacancys: Vacancy[]=[]

  private dbPath = '/tutorials';
  private dbPathTenders = '/tenders';
  private dbPathVacancys = '/vacancys';

  tutorialsRef!: AngularFireList<Tutorial>;
  tendersRef!: AngularFireList<Tenders>;
  vacancysRef!: AngularFireList<Vacancy>;

  constructor(private db: AngularFireDatabase) {

    this.tutorialsRef = db.list(this.dbPath);
    this.tendersRef= db.list(this.dbPathTenders);
    this.vacancysRef=db.list(this.dbPathVacancys);

  }

  //Displaying Tenders 
  getTenders() { return this.listOfTenders; }

  //Getting the Tender
  getTender(index: number) {
    return this.listOfTenders[index];
  }

  //Dispay the vacancies
  getVacancys(){return this.listOfVacancys;}

  //Getting the Vacancy
  getVacancy(index:number)
  {
    return this.listOfVacancys[index];
  }



  //getting the the data from backend and displaying it
  SetTenders(listOfTenders: Tenders[]) {
    this.listOfTenders = listOfTenders;
    this.listChangedEvent.emit(listOfTenders);
  }

  getAllTenders():AngularFireList<Tenders>
  {
    return this.tendersRef;
  }

  getAllVacancies():AngularFireList<Vacancy>{
    return this.vacancysRef;
  }
  getVacancies(key: string): Promise<void> {
    return this.tutorialsRef.remove(key);
  }



  create(tutorial: Tutorial): any {
    return this.tutorialsRef.push(tutorial);
  }
  update(key: string, value: any): Promise<void> {
    return this.tutorialsRef.update(key, value);
  }
  delete(key: string): Promise<void> {
    return this.tutorialsRef.remove(key);
  }
  deleteAll(): Promise<void> {
    return this.tutorialsRef.remove();
  }

}
