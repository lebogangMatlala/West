import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BackEndService } from 'src/app/Admin/Services/back-end.services';
import { TenderService } from 'src/app/Admin/Services/admin-tender.service';
import { AdminTender } from 'src/app/Admin/Models/admin-tender-model';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {Storage, ref, uploadBytesResumable, getDownloadURL} from '@angular/fire/storage';

import { ViewChild} from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-admin-tender-edit',
  templateUrl: './admin-tender-edit.component.html',
  styleUrls: ['./admin-tender-edit.component.css']
})
export class AdminTenderEditComponent implements OnInit {
  form!: FormGroup;
  index: number = 0;
  editMode = false;
  public file: any={}


  constructor(
    private tenderService: TenderService,
    private router: Router,
    private route: ActivatedRoute,
    private backEndService: BackEndService,
    private breakpointObserver: BreakpointObserver,
    private storage: Storage,
  ) {}

  chooseFile(event: any){
    this.file=event.target.files[0];
  }

  addFile(){
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

  ngOnInit(): void {
    let tenderType='';
    let title ='';
    let reference= '';
    let description= '';
    let status= '';
     let documentPath= '';
    let DateOpenend= '';
    let DateClosed;

  
    this.route.params.subscribe((params: Params) => {
      if (params['index']){
        console.log(params['index']);

        this.index = params['index'];

        const tender =this.tenderService.getTender(this.index);
        tenderType = tender.tenderType,
        title= tender.title;
        reference= tender.reference;
        description= tender.description;
        status = tender.status;
         documentPath=tender.documentPath;
         DateClosed=tender.DateOpenend;
         DateClosed=tender.DateClosed;
        
        this.editMode = true;
        
        
      }
    
    });
    
      this.form = new FormGroup({
        tenderType: new FormControl(tenderType, [Validators.required]),
      title: new FormControl(title, [Validators.required]),
      reference: new FormControl(reference, [Validators.required]),
      description: new FormControl(description, [Validators.required]),
      status: new FormControl(status, [Validators.required]),
       documentPath: new FormControl(documentPath, [Validators.required]),
      DateOpenend: new FormControl([]),
      DateClosed: new FormControl(null, []),
    });
  }
  onSubmit() {
    const tenderType = this.form.value.tenderType;
    const title = this.form.value.title;
    const reference = this.form.value.reference;
    const description = this.form.value.description;
    const status = this.form.value.status;
     const documentPath = this.form.value.documentPath;
    const DateOpenend = this.form.value.DateOpenend;
    const DateClosed = this.form.value.DateClosed;

    const tender: AdminTender = new AdminTender(
      tenderType,
      title,
      reference,
      description,
      status,
      documentPath,
      DateOpenend,
      DateClosed,
    );
    //A condition to either add or edit a post
        if(this.editMode){
          this.tenderService.updateTender(this.index, tender);
          this.backEndService.saveData();
          
   
        }else{
   //Calling tender services
    
   this.tenderService.addTender(tender);
   console.log("onSave() called!!!! ");
   this.backEndService.saveData();
        }

        
         //Navigate to /tender-list
   this.router.navigate(['/tender-list']);
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
