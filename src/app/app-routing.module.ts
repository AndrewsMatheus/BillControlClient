import { BillFormComponent } from './bill-form/bill-form.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'bills', component: BillListComponent },
  { path: 'addbills', component: BillFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
