import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
 
  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: string;
  imageName: any;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }
  public onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }



  onUpload() {
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.httpClient.post('http://localhost:8080/api/estado/upload/', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
      }
      );


  }
  getImage() {
    this.httpClient.get('http://localhost:8080/api/estado/Request/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }

  async doJob() {
    await this.httpClient.post('http://localhost:8080/api/estado/import/',this.httpOptions).toPromise()
  }

}
