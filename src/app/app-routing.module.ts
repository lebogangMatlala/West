import { HistoryPageComponent } from './history-page/history-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { CouncilorsPageComponent } from './councilors-page/councilors-page.component';

const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'menu', component: MenuPageComponent },
{ path: 'welcome', component: WelcomePageComponent },
{ path: 'history', component: HistoryPageComponent },
{ path: 'councilors', component: CouncilorsPageComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
