import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';
import { OrderListModule } from 'primeng/orderlist';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PanelMenuModule,
    OrderListModule,
    MessagesModule,
    MessageModule,
    ChartModule,
    ToastModule,
    TableModule,
    MultiSelectModule,
    ProgressBarModule,
    CalendarModule,
    DropdownModule,
    CheckboxModule,
    FileUploadModule
  ],
  exports: [
    PanelMenuModule,
    OrderListModule,
    MessagesModule,
    MessageModule,
    ChartModule,
    ToastModule,
    TableModule,
    MultiSelectModule,
    ProgressBarModule,
    CalendarModule,
    DropdownModule,
    CheckboxModule,
    FileUploadModule
  ]
})
export class PrimengModule { }
