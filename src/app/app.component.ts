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
    {'url': 'http://your_image1_url'},
    {'url': 'http://your_image2_url'},
    {'url': 'http://your_image3_url'},
    {'url': 'http://your_image4_url'},
    {'url': 'http://your_image5_url'},
    {'url': 'http://your_image6_url'},
    {'url': 'http://your_image7_url'},
    {'url': 'http://your_image8_url'},
    {'url': 'http://your_image9_url'},
    {'url': 'http://your_image10_url'},
    {'url': 'http://your_image11_url'},
    {'url': 'http://your_image12_url'}];
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
