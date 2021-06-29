import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from '@/app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from '@/main/main.component';
import {HeaderComponent} from '@/main/header/header.component';

import {MenuSidebarComponent} from '@/main/menu-sidebar/menu-sidebar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

import {UserDropdownMenuComponent} from '@/main/header/user-dropdown-menu/user-dropdown-menu.component';

import { TableModule } from 'primeng/table';
import { LubaLibModule } from './luba-lib/luba-lib.module';



@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        HeaderComponent,
        MenuSidebarComponent,   
        UserDropdownMenuComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        TableModule,
        LubaLibModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
