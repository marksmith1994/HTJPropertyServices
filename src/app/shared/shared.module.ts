import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingMaskComponent } from './loading-mask/loading-mask.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[
        HttpClientModule,
        HttpClientXsrfModule.withOptions({
            cookieName: 'XSRF-TOKEN',
            headerName: 'X-XSRF-TOKEN',
        }),
        MatCardModule,
        MatProgressSpinnerModule,
        CommonModule
    ],
    declarations:[
        HeaderComponent, 
        FooterComponent, 
        LoadingMaskComponent
    ],
    exports:[
        HeaderComponent,
        FooterComponent,
        LoadingMaskComponent,
        MatCardModule,
        MatProgressSpinnerModule
    ],
    providers:[]
})

export class SharedModule { }