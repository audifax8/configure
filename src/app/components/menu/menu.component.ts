import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ConfigureApiService } from 'src/app/services/configure-api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;

  casAliases: String[];

  caLinningColor: any;
  caSticker2: any;

  constructor(
    private configureApi: ConfigureApiService
  ) {
    this.casAliases = this.configureApi.casAliases;
  }

  ngOnInit(): void {
    this.caLinningColor = this.configureApi.getAttribute({
      alias: this.casAliases[0]
    });
    this.caSticker2 = this.configureApi.getAttribute({
      alias: this.casAliases[1]
    });
  }

}
