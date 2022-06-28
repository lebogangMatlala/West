import { Injectable } from '@angular/core';
import { Article } from '../Models/admin-article-model';
import { AdminTender } from '../Models/admin-tender-model';

@Injectable({
  providedIn: 'root'
})
export class AdminSenderService {
Admintenderobj?: AdminTender
Adminarticleobj?: Article
  constructor() { }



setTenderDesc(Admintender?: AdminTender){
  this.Admintenderobj = Admintender;
  localStorage.setItem("AdmintenderOBJ",JSON.stringify(this.Admintenderobj))
    
  }

getTenderDesc(){
  return this.Admintenderobj
}


//Article

setArticleDesc(Adminarticle?: Article){
  this.Adminarticleobj = Adminarticle;
  localStorage.setItem("AdminarticleOBJ",JSON.stringify(this.Adminarticleobj))
    
  }

getArticleDesc(){
  return this.Adminarticleobj
}




}
