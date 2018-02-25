import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';


@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    providers: [NgbCarouselConfig, ContentfulService] // add NgbCarouselConfig to the component providers
})

export class LandingComponent implements OnInit {
  homePage: Entry<any>[];
  closeResult: string;
  currentJustify = 'center';

  constructor(private modalService: NgbModal, config: NgbCarouselConfig, private contentfulService: ContentfulService) {
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

  ngOnInit() {
    this.contentfulService.getHomePage()
 .then(homePage => this.homePage = homePage)
  }

}
