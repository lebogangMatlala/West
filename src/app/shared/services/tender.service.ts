import { Vacancy } from './../Model/vacancy.model';
import { Tenders } from './../Model/tenders.model';
import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { start } from 'repl';

@Injectable({
  providedIn: 'root'
})
export class TenderService {

  listChangedEvent: EventEmitter<Tenders[]> = new EventEmitter();

  listOfTenders: Tenders[] = []
  listOfVacancys: Vacancy[] = []

  private dbPath = '/tutorials';
  private dbPathTenders = '/tenders';
  private dbPathVacancys = '/vacancys';
  vacancyRefe?: AngularFireObject<any>;


  tendersRef!: AngularFireList<Tenders>;
  vacancysRef!: AngularFireList<Vacancy>;

  constructor(private db: AngularFireDatabase) {


    this.tendersRef = db.list(this.dbPathTenders);
    this.vacancysRef = db.list(this.dbPathVacancys);

  }

  getFilterdTenders()
  {
    this.db.list('/tenders', ref => ref.orderByChild('title').startAt('Data Mining').endAt('Data Mining'+'\uf8ffs')).snapshotChanges().subscribe((res: any[]) => {
      let tempArray:any = [];

      res.forEach((ele: { payload: { val: () => any; }; }) => {
        console.log(ele.payload.val());
        tempArray.push(ele.payload.val())
      });
      this.listOfTenders = tempArray;
      console.log(this.listOfTenders);
    })

  }
  // Fetch Single Student Object
  GetVacancy(id: string) {
    this.vacancyRefe = this.db.object('vacancys/' + id);
    return this.vacancyRefe;
  }


  //Displaying Tenders 
  getTenders() { return this.listOfTenders; }

  //Getting the Tender
  getTender(index: number) {
    return this.listOfTenders[index];
  }

  //Dispay the vacancies
  getVacancys() { return this.listOfVacancys; }

  //Getting the Vacancy
  getVacancy(index: number) {
    return this.listOfVacancys[index];
  }

  objectOfVacancy(vac: Vacancy)
  {
    return this.listOfVacancys;
  }


  //getting the the data from backend and displaying it
  SetTenders(listOfTenders: Tenders[]) {
    this.listOfTenders = listOfTenders;
    this.listChangedEvent.emit(listOfTenders);
  }

  getAllTenders(): AngularFireList<Tenders> {
    return this.tendersRef;
  }

  getAllVacancies(): AngularFireList<Vacancy> {
    return this.vacancysRef;
  }
  getVacancies(key: string): Promise<void> {
    return this.vacancysRef.remove(key);
  }


}
