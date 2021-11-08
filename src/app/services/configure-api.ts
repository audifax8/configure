import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigureApiService {

  private configure: any = null;

  private configureLoaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public $isConfigureLoaded = this.configureLoaded.asObservable();

  private recipe: BehaviorSubject<Object> = new BehaviorSubject({});
  public $recipe = this.recipe.asObservable();

  public casAliases: String[] = [
    'lining_color_jde',
    'sticker2_jde'
  ];

  constructor() { }

  public setConfigure(configure: any): void {
    this.configure = configure;
  }

  public seTConfigureLaoded(loaded: boolean): void {
    this.configureLoaded.next(loaded);
  }

  public async createComponent(componenOptions: any) {
    if(!this.configure){
      return;
    }
    this.configure.run(
      'createComponents',
      componenOptions,
      (err: any, bus: any) => {
        if(err){
          console.log(err);
        }
      }
    );
  }

  public getAttribute(options: any) {
    return this.configure.run('getAttribute', options);
  }

  public selectValue(options: any, callback: any){
    this.configure.run('selectValue', options, callback);
  }

  public setCurrentRecipe() {
    const recipe = this.configure.run('getRecipe', 'human');
    this.recipe.next({
      lining_color_jde: recipe['lining_color_jde'],
      sticker2_jde: recipe['sticker2_jde']
    });
  }
}
