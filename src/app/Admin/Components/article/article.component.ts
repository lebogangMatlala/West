import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Article } from 'src/app/Admin/Models/admin-article-model';
import { ArticleService } from "src/app/Admin/Services/article.services";
import { BackEndService } from 'src/app/Admin/Services/back-end.services';
import { AdminSenderService } from '../../Services/admin-sender.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
 
  @Input() article?: Article;
  @Input() index: number = 0;
  constructor( private articleService: ArticleService,
     private router: Router, 
     private backendService: BackEndService, 
     private route: ActivatedRoute, 
     private adminsenderService: AdminSenderService,
     ) { }

  ngOnInit(): void {

 }
  onDelete(){
    console.log("onDelete()!!!!!!!!")
    this.articleService.deleteArticle(this.index);
  }
  ArticleEdit(){
    this.router.navigate(["/article-edit", this.index])
  }

  // onDisplay(){
  //   console.log("onDisplay() called!!!!");
  //   this.router.navigate(['/article-description', this.index ])
  // }
  onDisplay(descrp: any){
    console.log('onDisplay() called!!!!!!');
    this.router.navigate(['article-description']);
    console.log(descrp);
    this.adminsenderService.setArticleDesc(descrp);
  
  
  
  }

}
