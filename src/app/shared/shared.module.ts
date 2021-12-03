import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    imports:[
        HttpClientModule,
        HttpClientXsrfModule.withOptions({
            cookieName: 'XSRF-TOKEN',
            headerName: 'X-XSRF-TOKEN',
        }),
        MatCardModule,
        MatProgressSpinnerModule
    ],
    declarations:[
        HeaderComponent, 
        FooterComponent
    ],
    exports:[
        HeaderComponent,
        FooterComponent,
        MatCardModule,
        MatProgressSpinnerModule
    ],
    providers:[]
})

export class SharedModule { }