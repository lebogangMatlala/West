import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Article } from 'src/app/Admin/Models/admin-article-model';
import { ArticleService } from "src/app/Admin/Services/article.services";
import { BackEndService } from 'src/app/Admin/Services/back-end.services';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
 
  @Input() article?: Article;
  @Input() index: number = 0;
  constructor( private articleService: ArticleService, private router: Router, private backendService: BackEndService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
  //   console.log(this.article);
  //   console.log(this.index);

  //   this.route.params.subscribe((params: Params)=>{
  //     if(params['index']){
  //       console.log(params['index']);


  //       this.index = params['index'];
        
  //       const article =this.articleService.getEdit(this.index);
  //     }
  //   });
 }
  onDelete(){
    console.log("onDelete()!!!!!!!!")
    this.articleService.deleteArticle(this.index);
  }
  onEdit(){
    this.router.navigate(["/article-edit", this.index])
  }

  onDisplay(){
    console.log("onDisplay() called!!!!");
    this.router.navigate(['/tender-description', this.index ])
  }


}
