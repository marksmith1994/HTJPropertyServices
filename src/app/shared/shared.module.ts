import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingMaskComponent } from './loading-mask/loading-mask.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HeroComponent } from './hero/hero.component';
import { ContactBoxComponent } from './contact-box/contact-box.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { ReactiveFormsModule } from '@angular/forms';  
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports:[
        HttpClientModule,
        HttpClientXsrfModule.withOptions({
            cookieName: 'XSRF-TOKEN',
            headerName: 'X-XSRF-TOKEN',
        }),
        MatCardModule,
        MatProgressSpinnerModule,
        CommonModule,
        MatIconModule,
        NgImageSliderModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
    ],
    declarations:[
        HeaderComponent, 
        FooterComponent, 
        LoadingMaskComponent, 
        HeroComponent, 
        ContactBoxComponent
    ],
    exports:[
        HeaderComponent,
        FooterComponent,
        LoadingMaskComponent,
        MatCardModule,
        MatProgressSpinnerModule,
        MatIconModule,
        ContactBoxComponent,
        NgImageSliderModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
    ],
    providers:[]
})

export class SharedModule { }