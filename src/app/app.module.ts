import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { CouncilorsPageComponent } from './councilors-page/councilors-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { TendersVaccanciesComponent } from './tenders-vaccancies/tenders-vaccancies.component';
import { VaccanciesComponent } from './vaccancies/vaccancies.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { HistoryDetailsComponent } from './history-details/history-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuPageComponent,
    WelcomePageComponent,
    HistoryPageComponent,
    CouncilorsPageComponent,
    SignInComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    TendersVaccanciesComponent,
    VaccanciesComponent,
    ContactComponent,
    HistoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule.initializeApp(environment.firebaseTenders),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatTabsModule,
    FormsModule,
    MatCardModule,HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
