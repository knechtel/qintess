import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  URL = ''
//  public uploader: FileUploader = new FileUploader({url: this.URL, itemAlias: 'photo'})
// public uploader: FileUploader = new FileUploader({ url: this.URL, itemAlias: 'photo' });
  constructor() { }

  ngOnInit(): void {
    // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    //     this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
    //         console.log('ImageUpload:uploaded:', item, status, response);
    //         alert('File uploaded successfully');
    //     };
  }


}
