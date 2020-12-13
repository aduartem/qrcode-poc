import { Component } from '@angular/core';

import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public elementType = NgxQrcodeElementTypes.URL;
  public errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  public value = 'http://www.youtube.com';

  public downloadQRCode() {
    const b64Img = document.getElementsByClassName('qrCode')[0].children[0]['src'];
    fetch(b64Img)
       .then(data => data.blob())
       .then((blob) => {
          const filename = 'image_qrcode';
          // IE
          if (window.navigator && window.navigator.msSaveOrOpenBlob){
             window.navigator.msSaveOrOpenBlob(blob, filename);
          } else { // Chrome
             const url = window.URL.createObjectURL(blob);
             const link = document.createElement('a');
             link.href = url;
             link.download = filename;
             link.click();
          }
       })
 }
}
