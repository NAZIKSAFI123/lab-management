import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarAdminComponent } from './shared/sidebar-admin/sidebar-admin.component';
import { DemandesComponent } from './forms/demandes/demandes.component';
import { UsersComponent } from './forms/users/users.component';
import { EtablissementComponent } from './forms/etablissement/etablissement.component';
import { CreeruserComponent } from './forms/creeruser/creeruser.component';
import { CreerlaboComponent } from './forms/creerlabo/creerlabo.component';
import { BudgetComponent } from './forms/budget/budget.component';
import { ExpressionBComponent } from './forms/expression-b/expression-b.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'basic-ui', loadChildren: () => import('./basic-ui/basic-ui.module').then(m => m.BasicUiModule) },
  { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsDemoModule) },
  { path: 'forms', loadChildren: () => import('./forms/form.module').then(m => m.FormModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  { path: 'general-pages', loadChildren: () => import('./general-pages/general-pages.module').then(m => m.GeneralPagesModule) },
  { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
  { path: 'user-pages', loadChildren: () => import('./user-pages/user-pages.module').then(m => m.UserPagesModule) },
  { path: 'After', loadChildren: () => import('./error-pages/error-pages.module').then(m => m.ErrorPagesModule) },
  { path: 'demandes', component: DemandesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'etablessement', component: EtablissementComponent },
  { path: 'creerlabo', component: CreerlaboComponent },
  { path: 'creeruser', component: CreeruserComponent },
  { path: 'budget', component: BudgetComponent },
  { path: 'expressionB', component: ExpressionBComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
