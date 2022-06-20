import { VaccanciesComponent } from './vaccancies/vaccancies.component';
import { HistoryDetailsComponent } from './history-details/history-details.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { CouncilorsPageComponent } from './councilors-page/councilors-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

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

// route guard
// import { AuthGuard } from './shared/guard/auth.guard';
import { TendersVaccanciesComponent } from './tenders-vaccancies/tenders-vaccancies.component';
 import { LoginComponent } from './Admin/Components/login/login.component';
import { ImagesComponent } from './Admin/Components/images/images.component';
import { ImageComponent } from './Admin/Components/images/image/image.component';
import { ImageListComponent } from './Admin/Components/images/image-list/image-list.component';
import { AdminFeedbackComponent } from './Admin/Components/admin-feedback/admin-feedback.component';
import { AdminSubmissionComponent } from './Admin/Components/admin-submission/admin-submission.component';
import { AdminVacancyEditComponent } from './Admin/Components/admin-vacancy-edit/admin-vacancy-edit.component';

import { AddVancancyComponent } from './Admin/Components/add-vancancy/add-vancancy.component';
import { ListVancancyComponent } from './Admin/Components/list-vancancy/list-vancancy.component';
import { ListingsComponent } from './Admin/Components/listings/listings.component';
import { ListingComponent } from './Admin/Components/listing/listing.component';
import { AddListingComponent } from './Admin/Components/add-listing/add-listing.component';
import { UploadFormComponent } from './Admin/Components/upload-form/upload-form.component';
import { BiddersComponent } from './Admin/Components/bidders/bidders.component';






const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'signin', component: SignInComponent},
{ path: 'menu', component: MenuPageComponent},
{ path: 'welcome', component: WelcomePageComponent },
{ path: 'history', component: HistoryPageComponent},
{ path: 'councilors', component: CouncilorsPageComponent },
{ path: 'forgot-password', component: ForgotPasswordComponent },
{ path: 'history-details', component: HistoryDetailsComponent },
{ path: 'verify-email-address', component: VerifyEmailComponent },
{ path: 'contact', component: ContactComponent},
{ path: 'tender-vaccancies', component: TendersVaccanciesComponent },
{ path: 'vaccancy-description', component: VaccanciesComponent },

 {path:'admin-login',component: LoginComponent},
{path: 'home',component: HomeComponent},
{path: 'tender-edit', component: AdminTenderEditComponent},

//Image Testing

{path:  'image', component: ImagesComponent, children: [
  {path: 'upload', component: ImageComponent},
  {path: 'list', component: ImageListComponent}
]},


{
  path: 'tender-add/:index',
  component: AdminTenderEditComponent

},
{
  path: 'tender/:index',
  component: AdminTenderDescriptionComponent
},

{
  path: 'bidder/:index',
  component: BiddersComponent
},


{
  path: 'tender-list',
  component: AdminTenderListComponent
},
 {
  path: 'article-add',
   component: ArticleAddComponent
 },

{
  path: 'vacancy',
  component: AdminVacancyComponent
},


{
path: 'tender',
component: AdminTenderComponent
},



    {
      path: 'tender-description',
      component: AdminTenderDescriptionComponent
    },


    {
      path: 'dashboard',
      component: AdminDashboardComponent
    },


{
  path: 'article-list',
  component: ArticleListComponent
},
{
  path: 'vacancy-list',
  component: ListVancancyComponent
},
{
  path: 'add-vacancy',
  component: AdminVacancyEditComponent
},
{
  path: 'article-add',
  component: ArticleAddComponent
},
{
  path: 'article-edit/:index',
  component: ArticleAddComponent
},
{
  path: 'article',
  component: ArticleComponent
},

{
  path: 'article-description/:index',
  component: ArticleDescriptionComponent
},

{
  path: 'vacancy-description/:index',
  component: AdminVacancyDescriptionComponent
},
{
  path: 'Admin-Feedback',
  component: AdminFeedbackComponent
},

{
  path: 'Admin-submission',
  component: AdminSubmissionComponent
},
{
  path: 'Admin-Vacancy-list',
  component: AdminVacancyListComponent
},


{
  path: 'listings',
  component: ListingsComponent
},

{
  path: 'listing',
  component: ListingComponent
},
{
  path: 'Add-Listing',
  component: AddListingComponent
},


{
  path: 'Upload-Form',
  component: UploadFormComponent
},


{
  path: 'admin-vacancy-add',
  component: AdminVacancyAddComponent
},
{
  path: 'tender/:index',
  component: BiddersComponent
},


];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
