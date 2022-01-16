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
import { ReactiveFormsModule } from '@angular/forms';  
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NavComponent } from './nav/nav.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';  
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { GalleryComponent } from "../main/gallery/gallery.component";
import { FormsModule }   from '@angular/forms';

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
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        SlickCarouselModule,
        MatGridListModule,
        RecaptchaV3Module,
        FormsModule
    ],
    declarations:[
        HeaderComponent, 
        FooterComponent, 
        LoadingMaskComponent, 
        HeroComponent, 
        ContactBoxComponent, 
        NavComponent, 
        SocialIconsComponent
    ],
    exports:[
        HeaderComponent,
        FooterComponent,
        LoadingMaskComponent,
        MatCardModule,
        MatProgressSpinnerModule,
        MatIconModule,
        ContactBoxComponent,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        SlickCarouselModule,
        NavComponent,
        HeroComponent,
        SocialIconsComponent,
        MatGridListModule,
        HttpClientModule,
        RecaptchaV3Module,
        FormsModule
    ],
    providers:[
        {
            provide: RECAPTCHA_V3_SITE_KEY,
            useValue: environment.recaptcha.siteKey,
        },
        {
            provide: GalleryComponent,
            useValue: environment.gallery.tokenKey
        }
    ]
})

export class SharedModule { }