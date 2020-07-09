import { Component } from '@angular/core';
//import { MatIconRegistry } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { icons } from './app.icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myProject';

  constructor(
    //private matIconRegistry: MatIconRegistry,
    private router: Router,
    public _translate: TranslateService,
  ) {
    //this.registerIcons();
  }

  // registerIcons(): void {
  //   icons.forEach(element => {
  //     this.matIconRegistry.addSvgIcon(
  //       element.iconName,
  //       this.domSanitizer.bypassSecurityTrustResourceUrl(element.url)
  //     );
  //   });
  // }
}
