
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicElementsComponent } from './basic-elements/basic-elements.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemandesComponent } from './demandes/demandes.component';
import { UsersComponent } from './users/users.component';
import { CreeruserComponent } from './creeruser/creeruser.component';
import { EtablissementComponent } from './etablissement/etablissement.component';
import { CreerlaboComponent } from './creerlabo/creerlabo.component';
import { BudgetComponent } from './budget/budget.component';
import { ExpressionBComponent } from './expression-b/expression-b.component';

const routes: Routes = [
  { path: 'basic-elements', component: BasicElementsComponent }
]

@NgModule({
  declarations: [BasicElementsComponent, DemandesComponent, UsersComponent, CreeruserComponent, EtablissementComponent, CreerlaboComponent, BudgetComponent, ExpressionBComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule
  ]
})
export class FormModule { }