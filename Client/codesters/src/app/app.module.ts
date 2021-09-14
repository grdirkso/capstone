import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavComponent } from './shared/nav/nav.component';
import {MenuModule} from 'primeng/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarModule} from 'primeng/sidebar';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ClassesComponent } from './classes/classes.component';
import { ClassSubmissionComponent } from './class-submission/class-submission.component';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    RegistrationComponent,
    ClassesComponent,
    ClassSubmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    BrowserAnimationsModule,
    SidebarModule,
    PanelModule,
    ButtonModule,
    HttpClientModule,
    CardModule,
    DividerModule,
    DropdownModule,
    FormsModule,
    MessageModule,
    MessagesModule,
    InputTextModule,
    ReactiveFormsModule,
    ToastModule,
    DialogModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
