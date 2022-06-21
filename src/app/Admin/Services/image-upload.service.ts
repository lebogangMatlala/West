import { Injectable } from '@angular/core';
import { ref, Storage } from '@angular/fire/storage'
import { uploadBytes } from 'firebase/storage';
import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private storage: Storage) { }

    uploadImage( image: File, path: string): Observable<string>{
      const storageRef =ref(this.storage, path);
      const uploadTask =from (uploadBytes(storageRef, image));
      // return uploadTask

    }

}
