import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { url } from 'inspector';
import { finalize } from 'rxjs/operators';
import { ImageService } from 'src/app/shared/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

imgSrc?: string;
selectedImage: any = null;
isSubmitted?: Boolean;

formTemplate = new FormGroup({
  title: new FormControl('', Validators.required),
  description: new FormControl('', Validators.required),
  date: new FormControl('', Validators.required),
  venue: new FormControl('', Validators.required),
  contact: new FormControl('', Validators.required),
  imageUrl: new FormControl('', Validators.required),
})

  constructor( private storage: AngularFireStorage, private service: ImageService ) { }

  ngOnInit(): void {
    this.resetForm();
  }
  showPreview(event: any){
    if(event.target.files && event.target.files[0]){
        const reader = new FileReader();
        reader.onload= (e:any)=> this.imgSrc = e.target.result;
        reader.readAsDataURL(event.target.files[0]);
        this.selectedImage = event.target.files[0];
    }
    else{
      this.imgSrc= 'assets/Placeholder.jpg';
      this.selectedImage = null;
    }
  }
onSubmit(formValue: any){
this.isSubmitted= true;
if(this.formTemplate.valid){
  var filePath= `images/${this.selectedImage.name}_${new Date().getTime()}`;
  const fileRef = this.storage.ref(filePath);
  this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
    finalize(()=>{
      fileRef.getDownloadURL().subscribe((url)=>{
        formValue['imageUrl']=url,
        this.service.insertImageDetails(formValue);
        this.resetForm();
      })
    })
  ).subscribe();
}
}

get formControls(){
  return this.formTemplate['controls'];
}
resetForm(){
 this.formTemplate.reset();
 this.formTemplate.setValue({
  title:'',
  description: '',
  date: '',
  venue: '',
  contact: '',
  imageUrl: '',
 });
 this.imgSrc = 'assets/Placeholder.jpg';
 this.selectedImage= null;
 this.isSubmitted=false;
}
}
