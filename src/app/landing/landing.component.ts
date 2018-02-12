import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})

export class LandingComponent implements OnInit {
  closeResult: string;
  currentJustify = 'center';

  constructor(private modalService: NgbModal, config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 6000;
    config.wrap = true;
    config.keyboard = true;
   }

  open(content) {
   this.modalService.open(content).result.then((result) => {
     this.closeResult = `Closed with: ${result}`;
   }, (reason) => {
     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
   });
 }

 private getDismissReason(reason: any): string {
   if (reason === ModalDismissReasons.ESC) {
     return 'by pressing ESC';
   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
     return 'by clicking on a backdrop';
   } else {
     return  `with: ${reason}`;
   }
 }

  ngOnInit() {}

}
