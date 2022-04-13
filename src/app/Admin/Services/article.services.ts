import { ThisReceiver } from '@angular/compiler';
import { EventEmitter, Injectable } from '@angular/core';
import { Article } from '../Models/admin-article-model';


@Injectable({ providedIn: 'root' })
export class ArticleService {
  listChangedEvent: EventEmitter<Article[]> = new EventEmitter();
  listOfArticles: Article[]=[];

  //Get the list of ARTICLES
 getArticle(){
    return this.listOfArticles;
 }

 //Deleting the article
 deleteArticle (index: number){
  this.listOfArticles.splice( index, 1)
 }
//Adding a new Article
addArticle(article: Article){
  this.listOfArticles.push(article);
}
//updateArticle
updateArticle( index: number, article: Article){
  this.listOfArticles[index]= article;
}
//get 1 article
getEdit( index: number){
return this.listOfArticles[index];
}
//Setting Articles
setArticle(listOfArticles: Article[]){
this.listOfArticles = listOfArticles;
  this.listChangedEvent.emit (listOfArticles);
}

}