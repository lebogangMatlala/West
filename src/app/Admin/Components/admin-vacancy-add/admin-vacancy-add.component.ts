import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BackEndService } from 'src/app/Admin/Services/back-end.services';
// import { TenderService } from 'src/app/services/tender.services';
import { AdminVacancy } from 'src/app/Admin/Models/admin-vacancy-model';
import {MatDatepickerModule} from '@angular/material/datepicker';


import { ViewChild} from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { VacancyService } from 'src/app/Admin/Services/admin-vacancy.service';
import {Storage, ref, uploadBytesResumable, getDownloadURL} from '@angular/fire/storage';

@Component({
  selector: 'app-admin-vacancy-add',
  templateUrl: './admin-vacancy-add.component.html',
  styleUrls: ['./admin-vacancy-add.component.css']
})
export class AdminVacancyAddComponent implements OnInit {
  form!: FormGroup;
  index: number = 0;
  editMode = false;
  public file: any={}
  
  //Uploading Files Storage
  chooseFile(event: any){
    this.file=event.target.files[0];
  }

  addVancancyDoc(){
    const StorageRef = ref(this.storage,  this.file.name, );
    const uploadTask = uploadBytesResumable(StorageRef, this.file);
    uploadTask.on('state_changed',
    (snapshot)=>{
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
    },
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
    }
    )
  }

  
  constructor(
    private vacancyService: VacancyService,
    private router: Router,
    private route: ActivatedRoute,
    private backEndService: BackEndService,
    private breakpointObserver: BreakpointObserver,
    private storage: Storage,

  ) { }

  ngOnInit(): void {
    let title ='';
    let reference= '';
    let description= '';
    let industry= '';
    let documentPath= '';
    let DateOpenend;
    let DateClosed;
  
    this.route.params.subscribe((params: Params) => {
      if (params['index']){
        console.log(params['index']);

        this.index = params['index'];

        const vacancy =this.vacancyService.getVac(this.index);
        title= vacancy.title;
        reference= vacancy.reference;
        description= vacancy.description;
        industry = vacancy.industry;
        documentPath=vacancy.documentPath;
        DateOpenend=vacancy.DateOpenend;
        DateClosed=vacancy.DateClosed;
       
    
        this.editMode = true;
        
        
      }
    
    });
    
      this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      reference: new FormControl(reference, [Validators.required]),
      description: new FormControl(description, [Validators.required]),
      industry: new FormControl(industry, [Validators.required]),
       documentPath: new FormControl(documentPath, [Validators.required]),
       DateOpenend: new FormControl([]),
       DateClosed: new FormControl(null, []),
    });
  }
  onSubmit() {
    const title = this.form.value.title;
    const reference = this.form.value.reference;
    const description = this.form.value.description;
    const industry = this.form.value.industry;
    const documentPath = this.form.value.documentPath;
    const DateOpenend = this.form.value.DateOpenend;
    const DateClosed = this.form.value.DateClosed;

    const vacancy: AdminVacancy = new AdminVacancy(
      title,
      reference,
      description,
      industry,
      documentPath,
      DateOpenend,
      DateClosed,
    );
    //A condition to either add or edit a post
        if(this.editMode){
          this.vacancyService.updateVacancy(this.index, vacancy);
          this.backEndService.saveData();
          
   
        }else{
   //Calling tender services
    
   this.vacancyService.addVacancy(vacancy);
   console.log("onSave() called!!!! ");
   this.backEndService.SaveVacancy();
        }
         //Navigate to /tender-list
   this.router.navigate(['/vacancy-list']);
      }
  @ViewChild('drawer') drawer: any;
  public selectedItem : string = '';
   public isHandset$: Observable<boolean> = this.breakpointObserver
     .observe(Breakpoints.Handset)
     .pipe(map((result: BreakpointState) => result.matches));
     
 closeSideNav() {
   if (this.drawer._mode=='over') {
     this.drawer.close();
   
 }
 
}
 
    }
  
  
