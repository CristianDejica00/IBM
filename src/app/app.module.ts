import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { AvatarComponent } from './avatar/avatar.component';
import { QuarterFilterComponent } from './quarter-filter/quarter-filter.component';
import { StatusFilterComponent } from './status-filter/status-filter.component';
import { ExportComponent } from './export/export.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ApplyCardComponent } from './apply-card/apply-card.component';
import { EditCardComponent } from './edit-card/edit-card.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { ViewCardComponent } from './view-card/view-card.component';
import { ApplyModalComponent } from './apply-modal/apply-modal.component';
import { AvatarModalComponent } from './avatar-modal/avatar-modal.component';
import { ExportModalComponent } from './export-modal/export-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { EditCertModalComponent } from './edit-cert-modal/edit-cert-modal.component';
import { EditReqModalComponent } from './edit-req-modal/edit-req-modal.component';
import { ViewModalComponent } from './view-modal/view-modal.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material.module';
import { CertCardComponent } from './cert-card/cert-card.component';
import { CreateModalComponent } from './create-modal/create-modal.component';

const appRoutes:Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    ContentComponent,
    SearchbarComponent,
    AvatarComponent,
    QuarterFilterComponent,
    StatusFilterComponent,
    ExportComponent,
    NavbarComponent,
    ApplyCardComponent,
    EditCardComponent,
    CreateCardComponent,
    ViewCardComponent,
    ApplyModalComponent,
    AvatarModalComponent,
    ExportModalComponent,
    DeleteModalComponent,
    EditCertModalComponent,
    EditReqModalComponent,
    ViewModalComponent,
    CertCardComponent,
    CreateModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
