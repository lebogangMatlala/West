import { EventEmitter, Injectable } from '@angular/core';
import { AdminTender } from '../Models/admin-tender-model';

@Injectable({ providedIn: 'root' })
export class TenderService {
  listChangedEvent: EventEmitter<AdminTender[]> = new EventEmitter();
  listOfTenders: AdminTender[] = []
 
  

  //Displaying Tenders
  getTenders() {
    return this.listOfTenders;
  }

  //Deleting a Tender from a tender list
  deleteTender(index: number) {
    this.listOfTenders.splice(index, 1);
  }

  //Adding a new Tender

  addTender(tender: AdminTender) {
    this.listOfTenders.push(tender);
  }

  //editing post
  updateTender(index: number, tender: AdminTender) {
    this.listOfTenders[index] = tender;
  }

  //Getting the Tender
  getTender(index: number): AdminTender {
    return this.listOfTenders[index]; 
  }


  

  //getting the the data from backend and displaying it
SetTenders(listOfTenders: AdminTender[]){
  this.listOfTenders = listOfTenders;
  this.listChangedEvent.emit(listOfTenders);
  
}



}
