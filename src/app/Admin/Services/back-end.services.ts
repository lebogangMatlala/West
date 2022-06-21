import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { AdminTender } from "../../Admin/Models/admin-tender-model";
import { TenderService } from "../Services/admin-tender.service";
import { ArticleService } from "./article.services";
import { VacancyService } from "../Services/admin-vacancy.service";

import { SubmissionService } from "../Services/submission.service"
import { Article } from "../Models/admin-article-model";
import { AdminVacancy } from "../Models/admin-vacancy-model";
import { Bidder } from "../Models/admin-bidder-model";
// import {ref, Storage} from '@angular/fire/storage'
// import { getDownloadURL, uploadBytes } from "firebase/storage";
// import { from, Observable } from "rxjs";
// import { switchMap } from "rxjs";

//firebase Path:     https://beaufort-west-default-rtdb.firebaseio.com/

@Injectable({providedIn: 'root'})
export class BackEndService{
    constructor(private tenderService: TenderService, 
        private articleService:ArticleService , 
        private http: HttpClient,
         private vacancyService: VacancyService, 
         public submissionService: SubmissionService
         ){

    }



    //uploading Image to firebase
// uploadImage(image: File, path: string): Observable<string>{
//     const storageRef = ref(this.storage, path);
//     const uploadTask =from(uploadBytes(storageRef, image));
//     return uploadTask.pipe(
//         switchMap((result)=>getDownloadURL(result.ref))
//     );
// }
    //Save the data in firebase
    saveData(){
        const listOfTenders: AdminTender[] = this.tenderService.getTenders();
       //step 1 -get list of tenders from tender.service 
       this.http.
       put(
           'https://beaufort-west-default-rtdb.firebaseio.com/tenders.json', 
           listOfTenders)
       .subscribe((res)=>{
           console.log(res);
       })
    }


    //Saving a Bidder
    saveBidder(){
        const listOfBidders: Bidder[] = this.submissionService.getBidders();
       //step 1 -get list of tenders from tender.service 
       this.http.
       put(
           'https://beaufort-west-default-rtdb.firebaseio.com/bidders.json', 
           listOfBidders)
       .subscribe((res)=>{
           console.log(res);
       })
    }



  SaveArticle(){
      //get list of articles from article service
        const listOfArticles: Article[]= this.articleService.getArticle();
        this.http.put(
            'https://beaufort-west-default-rtdb.firebaseio.com/articles.json',
            listOfArticles).subscribe((res)=>{console.log(res)});
      //Send list of Articles to the backend
  }

    fetchdata(){
        this.http.get<AdminTender[]>('https://beaufort-west-default-rtdb.firebaseio.com/tenders.json')
        .pipe(
            tap((listOfTenders: AdminTender[])=>{
                console.log(listOfTenders);

                //Send to tender service
                this.tenderService.SetTenders(listOfTenders);
            })
        )
        .subscribe();
    }



    //fetch Bidders
    fetchBidder(){
        this.http.get<Bidder[]>('https://beaufort-west-default-rtdb.firebaseio.com/bidders.json')
        .pipe(
            tap((listOfBidders: Bidder[])=>{
                console.log(listOfBidders);

                
                this.submissionService.SetBidders(listOfBidders);
            })
        )
        .subscribe();
    }

//fetch Article
fetchArticle(){
    this.http.get<Article[]>('https://beaufort-west-default-rtdb.firebaseio.com/articles.json').pipe(
        tap((listOfArticles: Article[])=>{
            console.log(listOfArticles);

            //Send to article Service
            this.articleService.setArticle(listOfArticles)
        })
    )
    .subscribe();
}

SaveVacancy(){

      const listOfVacancys: AdminVacancy[]= this.vacancyService.getVacancy();
      this.http.put(
          'https://beaufort-west-default-rtdb.firebaseio.com/vacancys.json',
          listOfVacancys).subscribe((res)=>{console.log(res)});
    //Send list of Articles to the backend
}
//Fetch Vacancies
fetchVacancy(){
    this.http.get<AdminVacancy[]>('https://beaufort-west-default-rtdb.firebaseio.com/vacancys.json')
    .pipe(
        tap((listOfVacancys: AdminVacancy[])=>{
            console.log(listOfVacancys);

            //Send to tender service
            this.vacancyService.SetVacancy(listOfVacancys);
        })
    )
    .subscribe();
}


}