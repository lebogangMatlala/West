import { Component, OnInit } from '@angular/core';
import { BackEndService } from 'src/app/Admin/Services/back-end.services';
import { ArticleService } from "src/app/Admin/Services/article.services";
import { Article } from 'src/app/Admin/Models/admin-article-model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import {Storage, ref, uploadBytesResumable, getDownloadURL} from '@angular/fire/storage';
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent implements OnInit {
  form!: FormGroup;
  index: number = 0;
  editMode = false;
  details!: FormGroup;
  path!: String;


  //uploading Image
imgSrc: string = '/assets/img/logo.png';


selectedImage: any = null;
isSubmitted: Boolean= false;


  formTemplate = new FormGroup({
    imageUrl: new FormControl('')
  })


  
  // public file: any={}

  // chooseFile(event: any){
  //   this.file=event.target.files[0];
  // }

  // addPicture(){
  //   const StorageRef = ref(this.storage,  this.file.name, );
  //   const uploadTask = uploadBytesResumable(StorageRef, this.file);
  //   uploadTask.on('state_changed',
  //   (snapshot)=>{
  //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //     console.log('Upload is ' + progress + '% done');
  //   },
  //   ()=>{
  //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //       console.log('File available at', downloadURL);
  //     });
      
  //   }
  //   )
  // }



  constructor(private breakpointObserver: BreakpointObserver,
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: AngularFireStorage,
    private backEndService: BackEndService) { }



    

  ngOnInit(): void {
    
    let title = '';
    let description = ''
    let date = '';
    let venue = '';
    let contact = '';
    let documentPath ;

    this.route.params.subscribe((params: Params)=>{
          if(params['index']){
            console.log(params['index']);

            this.index = params['index'];

            const article =this.articleService.getEdit(this.index);
            title = article.title;
            description = article.description;
            // date = article.date;
            venue = article.venue
            contact = article.contact;
            documentPath = article.documentPath
            this.editMode = true;

          }
    });

  
      
      this.form = new FormGroup({
        title: new FormControl(title,[Validators.required]),
      description: new FormControl(description, [Validators.required]),
      date: new FormControl(date, Validators.required),
     venue: new FormControl(venue, Validators.required),
     contact: new FormControl(contact, Validators.required),
      documentPath: new FormControl(documentPath, Validators.required)
      }) 

  } 

  showPreview(event: any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
        reader.readAsDataURL(event.target.files[0]);
        this.selectedImage = event.target.files[0];
      }
    else{
      this.imgSrc = '';
      this.selectedImage= null;
    }
  }

  onSubmit(formValue: any) {
    
    const title = this.form.value.title;
    const description = this.form.value.description;
    const date = this.form.value.date;
    const venue= this.form.value.venue;
    const contact = this.form.value.contact;
    const documentPath = this.form.value.documentPath;


    //Object
    const article: Article = new Article(
      title,
      description,
      date,
      venue,
      contact,
      documentPath,
  
    );
//Calling a service


//condition to either add or edit
if(this.editMode){
  this.articleService.updateArticle(this.index, article)
}else{
  this.articleService.addArticle(article);
  console.log("SaveArticle() called!!!! ");
  this.backEndService.SaveArticle();
}
//Uploading a picture Article
if(this.formTemplate.valid){
  var filePath = `images/${this.selectedImage.name}_${new Date().getTime()}`;
  const fileRef = this.storage.ref(filePath);
  this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
    finalize(()=>{
      fileRef.getDownloadURL().subscribe((url)=>{
        formValue['imageUrl']=url;
      })
    })
  ).subscribe();
}
this.router.navigate(['/article-list']); 
               
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
  
}
