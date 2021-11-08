import { Component, OnInit } from '@angular/core';
import { ConfigureApiService } from 'src/app/services/configure-api';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss']
})
export class ProductDisplayComponent implements OnInit {

  constructor(
    public configureApi: ConfigureApiService
  ) { }

  ngOnInit(): void {
    this.configureApi.createComponent(
      {
        container: ".app-product-display",
        components: [
        {
          type: "displayCarousel",
          dots: true,
          clickToConfigure: false,
          format: "jpg",
          quality: 90,
          enableTooltips: false,
          selectedView: 'FrontAndBack'
        }/*,
        {
          type: "displayWebgl"
        },*/
      ]
      }
    );
  }

}
