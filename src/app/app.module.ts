import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RtcComponent } from './rtc/rtc.component';
import { AnmolService}from './anmol.service';

const route: Routes = [{
  path: 'rtc',
  component: RtcComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: ' ',
  component: LoginComponent
}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RtcComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [AnmolService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

