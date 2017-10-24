import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'nice';
  images;
  constructor(public renderer: Renderer2, public element_ref: ElementRef) {}
  // get object by id from html page
  @ViewChild('myTopnav') navTrigger: ElementRef;
ngOnInit() {
this.images = [
    {'url': 'https://2.bp.blogspot.com/-oiVDElJ-YCI/V3pEbVdnkEI/AAAAAAAAA4k/-okV1TiFzIgUSiidI18pIPB8lxKr7drbQCLcB/s1600/04.jpg'},
    {'url': 'https://1.bp.blogspot.com/-2urJjUBRINM/V3pFEnaFgPI/AAAAAAAAA4s/Tks27gHrkPwONCNkRPOlBMgSayzD0MjiACLcB/s1600/05.jpg'},
    {'url': 'https://1.bp.blogspot.com/-xcMU_6XNOuY/V3pFMRl2kZI/AAAAAAAAA4w/5M1fufGa19AW5lft3DRJFi6hkz_2uBEuACLcB/s1600/02.jpg'},
    {'url': 'https://3.bp.blogspot.com/--PwyAKlwhTw/V3pF2SX56nI/AAAAAAAAA48/1cB-86LC4PcW1eAgj_U9OemT92sNvmJXQCLcB/s1600/08.jpg'}];
}

  myFunction() {
    const x = this.navTrigger.nativeElement;
    if (x.className === 'topnav') {
      this.renderer.addClass(x, 'responsive');
    } else {
      this.renderer.removeClass(x, 'responsive');
    }
  }
}
