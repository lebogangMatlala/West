import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../Services/firebase.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
