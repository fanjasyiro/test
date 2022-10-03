import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  allSwipe:any;
  title = 'edufund';

  constructor(private http: HttpClient){
    this.allSwipe=[];
  }

  ngOnInit(): void {

    this.http.get('https://6319bfa08e51a64d2beb602d.mockapi.io/mock/v1/banners').subscribe((result:any)=>{
      // let datas = <any[]> result;
      //       datas.forEach(data => {
      //           this.allSwipe.push({label: data.title, value: data.src});
      //       });
      this.allSwipe = result;
      console.log(this.allSwipe);
    })
  }

  onSwiper([swiper]:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
