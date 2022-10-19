import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HttpClientModule } from '@angular/common/http';


import { AuthGuard } from 'src/app/_shared/guards/auth.guard';
import { AuthComponent } from './auth/auth.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';


import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import { NgxSpinnerService } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { PropertyComponent } from './property/property.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ButtonnComponent } from './buttonn/buttonn.component';



@NgModule({
  declarations: [AppComponent, AuthComponent, PropertyComponent, ButtonnComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      preventDuplicates: true,
    }),
    NgxSpinnerModule,

  ],
  providers: [
    NgxSpinnerService,
    AuthGuard,


  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
