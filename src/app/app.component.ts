import { Component, OnInit } from '@angular/core';

declare var window:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'BeaufortWestProject';
  formModal?:any;

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    )
  }

  openModal(){
    this.formModal.show();
  }

  doSomething(){
    this.formModal.hide();
  }
}
