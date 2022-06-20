import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FileUpload } from '../Models/vacancy-upload-model';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private basePath = '/vacancys-Documents';


  listOfVDocuments: FileUpload[] = [];
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }
  pushFileToStorage(FileUpload: FileUpload): Observable<number | undefined>{
    const filePath = `${this.basePath}/${FileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath,FileUpload.file);
    uploadTask.snapshotChanges().pipe(
      finalize(()=>{
        storageRef.getDownloadURL().subscribe(downloadURL =>{
          FileUpload.url = downloadURL;
          FileUpload.name = FileUpload.file.name;
          this.saveFileData(FileUpload);
          
        });
      })
    ).subscribe();
    return uploadTask.percentageChanges();
      }
      private saveFileData(fileUpload: FileUpload): void{
        this.db.list(this.basePath).push(fileUpload);
      }
    getFiles(numberItems: number): AngularFireList<FileUpload>{
      return this.db.list(this.basePath, ref=>
        ref.limitToLast(numberItems));
    }

getFile(index: number){
  return this.listOfVDocuments[index];
  
}

    deleteFile(fileUpload: FileUpload): void{
      this.deleteFileDatabase(fileUpload.key)
      .then(()=>{
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error =>console.log(error))
    }
    private deleteFileDatabase(key: string): Promise<void>{
      return this.db.list(this.basePath).remove(key);
    }
    private deleteFileStorage(name: string): void {
      const storageRef= this.storage.ref(this.basePath);
      storageRef.child(name).delete();
    }
    }
    
