import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    ConsoleComponent,
    DashboardComponent,


  ],
  imports: [
    CommonModule,
    ConsoleRoutingModule,


    FormsModule,

    ReactiveFormsModule,

    ToastrModule,

  ],
  entryComponents: [MatSelectModule],
})
export class ConsoleModule {}
