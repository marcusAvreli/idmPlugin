import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CsrfInterceptor } from './csrf.interceptor';

import { ScaffoldingService } from './scaffolding.service';
import {CoreModule} from './core/core.module';
import { CONFIG } from "../app-config";
import { AppComponent } from './app.component';
import {ReportReaderModule} from './report-reader/report-reader.module';
import { reducer } from "app/ngrx/reducers";
//https://github.com/opfab/operatorfabric-core/tree/929dd8d0485e4e3f2cf68f7f07477cbe76f8acfc/ui/main/src/app
import { StoreModule } from '@ngrx/store';
@NgModule({

    imports: [

BrowserModule
,CoreModule.forRoot(CONFIG)
,ReportReaderModule
,HttpClientModule
,StoreModule.provideStore(reducer)
,FormsModule

    ],

    providers: [

        {

            provide: HTTP_INTERCEPTORS,

            useClass: CsrfInterceptor,

            multi: true,

        },

ScaffoldingService

    ],

    declarations: [

        AppComponent

    ],

    bootstrap: [

        AppComponent

    ]

})

export class AppModule { }