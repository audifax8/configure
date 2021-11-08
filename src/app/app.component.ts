import { Component, Renderer2, Inject, OnInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ConfigureApiService } from './services/configure-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    public configureApi: ConfigureApiService
  ){

  }

  ngOnInit(): void {
    this.loadJsScript();
  }

  ngOnDestroy(): void {
    this.document.removeEventListener('configureApp', () => {});
  }

  /**
  * Append the JS tag to the Document Body.
  * @param renderer The Angular Renderer
  * @param src The path to the script
  * @returns the script element
  */
   public loadJsScript(): HTMLScriptElement {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn-prod.fluidconfigure.com/static/code/configure-ui/stable/js/configure-app.js';
    this.renderer.appendChild(this.document.body, script);

    const cssConfigure = document.createElement('link');
    cssConfigure.setAttribute('rel', 'stylesheet');
    cssConfigure.setAttribute('type', 'text/css');
    cssConfigure.setAttribute('href', '//cdn-prod.fluidconfigure.com/static/code/configure-ui/stable/css/configure-app.css');
    this.renderer.appendChild(this.document.head, cssConfigure);

    this.document.addEventListener("configureApp", (e: any) => {
      const configureInitFunction = e.detail.configureApp;
      const queryParams = configureInitFunction._GET;
      configureInitFunction(
        /*{
          environment: queryParams.environment || "prod",
          workflow: queryParams.workflow || "dev",
          customer: queryParams.customer || 1562,
          product: queryParams.product || 24252
        },*/
        {
          environment: queryParams.environment || "prod",
          workflow: queryParams.workflow || "prod",
          customer: queryParams.customer || 1562,
          product: queryParams.product || 21576
        },
        (err: any, configure: any) => {
          if (err) {
            throw Error();
          }
          configure.on('recipe:change', () => this.configureApi.setCurrentRecipe());
          this.configureApi.setConfigure(configure);
          this.configureApi.seTConfigureLaoded(true);
          this.configureApi.setCurrentRecipe();
        }
      );
    });
    return script;
  }

}
