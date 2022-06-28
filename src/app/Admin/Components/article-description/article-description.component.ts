import { Component, Input, OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticleService } from '../../Services/article.services';
import { BackEndService } from '../../Services/back-end.services';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../Models/admin-article-model';

@Component({
  selector: 'app-article-description',
  templateUrl: './article-description.component.html',
  styleUrls: ['./article-description.component.css']
})
export class ArticleDescriptionComponent implements OnInit {
  article!: Article;
  @Input() index: number= 0 ;
  
  constructor (private activatedRoute: ActivatedRoute, private articleService: ArticleService, 
    private breakpointObserver: 
   BreakpointObserver, private backEndService: BackEndService,
    private router: Router) {
      activatedRoute.params.subscribe((params)=>{
        if(params.index)
        this.article = articleService.getEdit(params.index);
      })
      
     }
  
     ngOnInit(): void {
      this.article = this.articleService.getEdit(this.index);

  
    this.getStorage();
    
    }
  
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
  
    getStorage():void
    {
      let data:any = localStorage.getItem('AdminarticleOBJ');
      //  let dataindex:any = localStorage.getItem('index');
      this.article=JSON.parse(data);
      //  this.index=JSON.parse(dataindex);
      console.log("Hello data "+this.article);
    }
  
 

}
