import { Component, Input, OnInit } from '@angular/core';
import { ConfigureApiService } from 'src/app/services/configure-api';

@Component({
  selector: 'app-swatch',
  templateUrl: './swatch.component.html',
  styleUrls: ['./swatch.component.scss']
})
export class SwatchComponent implements OnInit {

  @Input() av: any;
  @Input() ca: any;
  @Input() swatchType: any;

  constructor(
    private configureApi: ConfigureApiService
  ) { }

  ngOnInit(): void {
    //console.log({av: this.av});
  }

  public click() {
    this.configureApi.selectValue(
      {
        ca: this.ca.id,
        av: this.av.id
      },
      (err: any, data: any) => {
        if (err) {
          console.log({err});
        }
      }
    );
  }

}
