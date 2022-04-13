import { Component, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ViewChild } from '@angular/core';
import { Article } from 'src/app/Admin/Models/admin-article-model';
import { ArticleService } from "src/app/Admin/Services/article.services";
import { BackEndService } from 'src/app/Admin/Services/back-end.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
listOfArticles: Article[]=[];
  constructor(private breakpointObserver: BreakpointObserver, private articleService: ArticleService, private backEndService: BackEndService) { }
  onFetch(){
    console.log('onFetch() Called!!!!!!!');
    this.backEndService.fetchArticle();
  }
  ngOnInit(): void {
    this.onFetch();

this.listOfArticles = this.articleService.getArticle();
this.articleService.listChangedEvent.subscribe((listOfArticles: Article[])=>{
this.listOfArticles = this.articleService.getArticle();
}

);
  }
  @ViewChild('drawer') drawer: any;
  public selectedItem : string = '';
   public isHandset$: Observable<boolean> = this.breakpointObserver
     .observe(Breakpoints.Handset)
     .pipe(map((result: BreakpointState) => result.matches));

}
