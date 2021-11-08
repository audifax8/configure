import { Component, OnInit } from '@angular/core';
import { ConfigureApiService } from 'src/app/services/configure-api';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  constructor(
    public configureApi: ConfigureApiService
  ) { }

  ngOnInit(): void {
  }

}
