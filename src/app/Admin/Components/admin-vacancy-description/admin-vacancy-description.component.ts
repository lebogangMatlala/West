import { Component, Input, OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BackEndService } from '../../Services/back-end.services';
import { AdminVacancy } from '../../Models/admin-vacancy-model';
import { VacancyService } from '../../Services/admin-vacancy.service';
import { FileUpload } from '../../Models/vacancy-upload-model';
import { FileUploadService } from '../../Services/file-upload.service';

@Component({
  selector: 'app-admin-vacancy-description',
  templateUrl: './admin-vacancy-description.component.html',
  styleUrls: ['./admin-vacancy-description.component.css']
})
export class AdminVacancyDescriptionComponent implements OnInit {
  vacancy!: AdminVacancy;
  @Input() index: number= 0 ;

  @Input() fileUpload!: FileUpload;

  document!: FileUpload;
  
  fileUploads?: any[];
  constructor(private activatedRoute: ActivatedRoute,private vacancyService:VacancyService,  private breakpointObserver: 
    BreakpointObserver,  private backEndService: BackEndService, private router: Router, private uploadService: FileUploadService,) 
    {
      activatedRoute.params.subscribe((params)=>{
        if(params.index)
        this.vacancy = vacancyService.getVac(params.index);
        








        
      })
      
     }
     ngOnInit(): void {

      this.uploadService.getFiles(6).snapshotChanges().pipe(
        map(changes =>
          
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      ).subscribe(fileUploads => {
        this.fileUploads = fileUploads;
      });
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
  onDisplay(){
    console.log("onDisplay() called!!!!");
    this.router.navigate(['/add-vacancy', this.index ])
  }

     VacancyDelete(){
      console.log("onDelete() called!!!")
      this.vacancyService.deleteVacancy(this.index);
      this.backEndService.SaveVacancy();
             
    //Navigate to /vacancy-list
     this.router.navigate(['/vacancy-list']);
    }
    
    
  }
