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

// route guard
import { AuthGuard } from './shared/guard/auth.guard';
import { TendersVaccanciesComponent } from './tenders-vaccancies/tenders-vaccancies.component';

const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'signin', component: SignInComponent},
{ path: 'menu', component: MenuPageComponent,canActivate: [AuthGuard]},
{ path: 'welcome', component: WelcomePageComponent },
{ path: 'history', component: HistoryPageComponent,canActivate: [AuthGuard] },
{ path: 'councilors', component: CouncilorsPageComponent },
{ path: 'forgot-password', component: ForgotPasswordComponent },
{ path: 'history-details', component: HistoryDetailsComponent },
{ path: 'verify-email-address', component: VerifyEmailComponent },
{ path: 'contact', component: ContactComponent},
{ path: 'tender-vaccancies', component: TendersVaccanciesComponent,canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
