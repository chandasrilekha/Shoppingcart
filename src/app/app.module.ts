import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormComponent } from './component/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductComponent,
    FooterComponent,
    FormComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
