import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html'
})
export class SvgComponent implements OnInit {

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer ) { 
    iconRegistry.addSvgIcon(
      'thumbs-up', 
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg')
    );
  }

  ngOnInit() {
  }

}
