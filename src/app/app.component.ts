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
}
