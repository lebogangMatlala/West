import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/Admin/Services/file-upload.service';
import { AdminVacancy } from 'src/app/Admin/Models/admin-vacancy-model';
import { FileUpload } from '../../Models/vacancy-upload-model';

@Component({
  selector: 'app-add-vancancy',
  templateUrl: './add-vancancy.component.html',
  styleUrls: ['./add-vancancy.component.css']
})
export class AddVancancyComponent implements OnInit {
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;
  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {}

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;
      if (file) {
        this.currentFileUpload = new FileUpload(file);
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
          percentage => {
            this.percentage = Math.round(percentage ? percentage : 0);
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }
}
