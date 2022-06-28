import { EventEmitter, Injectable } from '@angular/core';
import { AdminVacancy } from '../Models/admin-vacancy-model';

@Injectable({ providedIn: 'root' })
export class VacancyService {
  listChangedEvent: EventEmitter<AdminVacancy[]> = new EventEmitter();
  listOfVacancys: AdminVacancy[] = [];
 
  

  //Displaying Tenders
  getVacancy() {
    return this.listOfVacancys;
  }

  //Deleting a Tender from a tender list
  deleteVacancy(index: number) {
    this.listOfVacancys.splice(index, 1);
  }

  //Adding a new Vacancy

  addVacancy(vacancy: AdminVacancy) {
    this.listOfVacancys.push(vacancy);
  }

  //editing Vacancy
  updateVacancy(index: number, vacancy: AdminVacancy) {
    this.listOfVacancys[index] = vacancy;
  }

  //Getting the Tender
  getVac(index: number) {
    return this.listOfVacancys[index];
  }

  

  //getting the the data from backend and displaying it
SetVacancy(listOfVacancys: AdminVacancy[]){
  this.listOfVacancys = listOfVacancys;
  this.listChangedEvent.emit(listOfVacancys);
}

}
