
import { TenderService } from './../shared/services/tender.service';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Article } from '../shared/Model/article.model';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  articles?: Article[];
  num:any;
  constructor(private breakpointObserver: BreakpointObserver,
    private tenderService: TenderService) { }

  ngOnInit(): void {
  this.retrieveArticles();
  }

  retrieveArticles():void{
    this.tenderService.getAllVacancies().snapshotChanges().pipe(
          map(changes =>
            changes.map(c =>
              ({ key: c.payload.key, ...c.payload.val() })
            )
          )
        ).subscribe(data => {
          this.articles = data;
          this.num = data.length;


          console.log("This is the vacancies data " + this.articles.length + ' \n ' + this.num)
        });
      }
  //retrieve vacancies
  // retrieveArticles(): void {
  //   this.tenderService.getAllVacancies().snapshotChanges().pipe(
  //     map(changes =>
  //       changes.map(c =>
  //         ({ key: c.payload.key, ...c.payload.val() })
  //       )
  //     )
  //   ).subscribe(data => {
  //     this.vacancies = data;
  //     this.num = data.length;


  //     console.log("This is the vacancies data " + this.vacancies.length + ' \n ' + this.num)
  //   });
  // }

  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));
  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }
}
