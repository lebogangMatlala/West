import {  EventEmitter,Injectable } from '@angular/core';
import { Bidder } from '../Models/admin-bidder-model';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
    showDialog = false;
    listChangedEvent: EventEmitter<Bidder[]> = new EventEmitter();
  listOfBidders: Bidder[] = [];

  
  //Displaying bids
  getBidders() {
    return this.listOfBidders;
  }

   //Deleting a Bid from a tender bids
   deleteBidder(index: number) {
    this.listOfBidders.splice(index, 1);
  }

 //Adding a new bid

 addBidder(bidder: Bidder) {
  this.listOfBidders.push(bidder);
}
  //editing Tender Bid
  updateBidder(index: number, bidder: Bidder) {
    this.listOfBidders[index] = bidder;
  }
 //Getting the Bidder
 getBidder(index: number):Bidder {
  return this.listOfBidders[index];
}




  //getting the the data from backend and displaying it
  SetBidders(listOfBidders: Bidder[]){
    this.listOfBidders = listOfBidders;
    this.listChangedEvent.emit(listOfBidders);
  }


}
