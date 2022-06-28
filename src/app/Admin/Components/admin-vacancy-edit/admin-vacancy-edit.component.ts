import { Component, OnInit } from '@angular/core';
import { FileUpload } from 'src/app/Admin/Models/vacancy-upload-model';
import { FileUploadService } from 'src/app/Admin/Services/file-upload.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BackEndService } from 'src/app/Admin/Services/back-end.services';

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
import { VacancyService } from '../../Services/admin-vacancy.service';
import { AuthenticationService } from '../../Services/authentication.service';
@Component({
  selector: 'app-admin-vacancy-edit',
  templateUrl: './admin-vacancy-edit.component.html',
  styleUrls: ['./admin-vacancy-edit.component.css']
})
export class AdminVacancyEditComponent implements OnInit {
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;


  //Data
  form!: FormGroup;
  index: number = 0;
  editMode = false;
  public file: any={}

  user$ = this.authService.currentUser$;
  constructor(private uploadService: FileUploadService,
    private vacancyService: VacancyService,
    private router: Router,
    private route: ActivatedRoute,
    private backEndService: BackEndService,
    private breakpointObserver: BreakpointObserver,
    private authService: AuthenticationService
    ) { }

  ngOnInit(): void {
    let title ='';
    let industry= '';
    let reference= '';
    let description= '';
    let documentPath= '';
    let DateOpenend= '';
    let DateClosed;

    this.route.params.subscribe((params: Params) => {
      if (params['index']){
        console.log(params['index']);

        this.index = params['index'];

        const vacancy =this.vacancyService.getVac(this.index);
        title= vacancy.title;
        industry= vacancy.industry;
        reference= vacancy.reference;
        description = vacancy.description;
        documentPath=vacancy.documentPath;
        DateClosed=vacancy.DateOpenend;
        DateClosed=vacancy.DateClosed;
       
    
        this.editMode = true;
        
        
      }
    
    });
    
      this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      industry: new FormControl(industry, [Validators.required]),
      reference: new FormControl(reference, [Validators.required]),
      description: new FormControl(description, [Validators.required]),
       documentPath: new FormControl(documentPath, [Validators.required]),
       DateOpenend: new FormControl([]),
       DateClosed: new FormControl(null, []),
    });
  }
  onSubmit() {
    const title = this.form.value.title;
    const industry = this.form.value.industry;
    const reference = this.form.value.reference;
    const description = this.form.value.description;
    const documentPath = this.form.value.documentPath;
    const DateOpenend = this.form.value.DateOpenend;
    const DateClosed = this.form.value.DateClosed;

    const vacancy: AdminVacancy = new AdminVacancy(
      title,
      industry,
      reference,
      description,
      documentPath,
      DateOpenend,
      DateClosed,
    );
    //A condition to either add or edit
        if(this.editMode){
          this.vacancyService.updateVacancy(this.index, vacancy);
          this.backEndService.SaveVacancy;
        }else{
   //Calling tender services
   this.vacancyService.addVacancy(vacancy);
   console.log("onSave() called!!!! ");
   this.backEndService.SaveVacancy();
        }
        //  Navigate to tender-list
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