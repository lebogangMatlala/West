
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox'
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

import { AdminDashboardComponent } from './Admin/Components/admin-dashboard/admin-dashboard.component';
import { ArticleComponent } from './Admin/Components/article/article.component';
import { ArticleAddComponent } from './Admin/Components/article-add/article-add.component';
import { ArticleDescriptionComponent } from './Admin/Components/article-description/article-description.component';
import { ArticleListComponent } from './Admin/Components/article-list/article-list.component';
import { AdminTenderComponent } from './Admin/Components/admin-tender/admin-tender.component';
import { AdminTenderDescriptionComponent } from './Admin/Components/admin-tender-description/admin-tender-description.component';
import { AdminTenderEditComponent } from './Admin/Components/admin-tender-edit/admin-tender-edit.component';
import { AdminTenderListComponent } from './Admin/Components/admin-tender-list/admin-tender-list.component';
import { AdminVacancyComponent } from './Admin/Components/admin-vacancy/admin-vacancy.component';
import { AdminVacancyAddComponent } from './Admin/Components/admin-vacancy-add/admin-vacancy-add.component';
import { AdminVacancyDescriptionComponent } from './Admin/Components/admin-vacancy-description/admin-vacancy-description.component';
import { AdminVacancyListComponent } from './Admin/Components/admin-vacancy-list/admin-vacancy-list.component';
import { LoginComponent } from './Admin/Components/login/login.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore, FirestoreModule } from '@angular/fire/firestore';
import { HotToastModule } from '@ngneat/hot-toast';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ArticlePageComponent } from './article-page/article-page.component';
import { UserArticleDesComponent } from './user-article-des/user-article-des.component';
import { UserTenderDesComponent } from './user-tender-des/user-tender-des.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import { ImagesComponent } from './Admin/Components/images/images.component';
import { ImageComponent } from './Admin/Components/images/image/image.component';
import { ImageListComponent } from './Admin/Components/images/image-list/image-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { AdminFeedbackComponent } from './Admin/Components/admin-feedback/admin-feedback.component';
import { AdminSubmissionComponent } from './Admin/Components/admin-submission/admin-submission.component';
import { AdminVacancyEditComponent } from './Admin/Components/admin-vacancy-edit/admin-vacancy-edit.component';

import { AddVancancyComponent } from './Admin/Components/add-vancancy/add-vancancy.component';
import { ListVancancyComponent } from './Admin/Components/list-vancancy/list-vancancy.component';
import { ListingsComponent } from './Admin/Components/listings/listings.component';
import { ListingComponent } from './Admin/Components/listing/listing.component';
import { AddListingComponent } from './Admin/Components/add-listing/add-listing.component';
import { FirebaseService } from './Admin/Services/firebase.service';
import { UploadFormComponent } from './Admin/Components/upload-form/upload-form.component';
import { BiddersComponent } from './Admin/Components/bidders/bidders.component';











import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule
];
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
    HistoryDetailsComponent,

    AdminDashboardComponent,
    ArticleComponent,
    ArticleAddComponent,
    ArticleDescriptionComponent,
    ArticleListComponent,
    AdminTenderComponent,
    AdminTenderDescriptionComponent,
    AdminTenderEditComponent,
    AdminTenderListComponent,
    AdminVacancyComponent,
    AdminVacancyAddComponent,
    AdminVacancyDescriptionComponent,
    AdminVacancyListComponent,
    LoginComponent,
    ArticlePageComponent,
    UserArticleDesComponent,
    UserTenderDesComponent,
    ModelFormComponent,
    ImageComponent,
    ImageListComponent,
    AdminFeedbackComponent,
    AdminSubmissionComponent,
    AdminVacancyEditComponent,

    AddVancancyComponent,
    ListVancancyComponent,
    ListingsComponent,
    ListingComponent,
    AddListingComponent,
    UploadFormComponent,
    BiddersComponent,





  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule, MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FirestoreModule,
    MatDialogModule,
    AngularFireStorageModule,
    MatSidenavModule,
    MatGridListModule,
    MatSelectModule,


    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),

    AngularFireAuthModule,
    AngularFirestoreModule,
    MatTabsModule,
    MatDividerModule,
    MatProgressBarModule,
    FormsModule,
    MatIconModule,
    MatCardModule, HttpClientModule,


    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    AngularFireStorageModule,

    HotToastModule.forRoot(),
    materialModules,
    NgbModule


  ],
  exports: [
    materialModules
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
