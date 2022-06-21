import { Injectable } from '@angular/core';
import { ref, Storage } from '@angular/fire/storage'
import { uploadBytes } from 'firebase/storage';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private storage: Storage) { }
}
