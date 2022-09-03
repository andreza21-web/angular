import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageInterceptor } from './interceptor/language.interceptor';
import { NavComponent } from './nav/nav.component';
import { PostComponent } from './post/post.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaskFormsComponent } from './mask-forms/mask-forms.component';
import { NgxMaskModule } from 'ngx-mask';
import { FooterComponent } from './footer/footer.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PostComponent,
    ContactFormComponent,
    MaskFormsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LanguageInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
