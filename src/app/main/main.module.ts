import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from './home/greeting/greeting.component';
import { InfoBlockComponent } from './home/info-block/info-block.component';
import { AdvertBlockComponent } from './home/advert-block/advert-block.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { PictureBlockComponent } from './about/picture-block/picture-block.component';
import { ContactInfoComponent } from './contact/contact-info/contact-info.component';

@NgModule({
    imports: [
        SharedModule,
        CommonModule
    ],
    declarations: [
        AboutComponent,
        ContactComponent,
        GalleryComponent,
        HomeComponent,
        GreetingComponent,
        InfoBlockComponent,
        AdvertBlockComponent,
        CarouselComponent,
        PictureBlockComponent,
        ContactInfoComponent
    ],
    exports: [
        AboutComponent,
        ContactComponent,
        GalleryComponent,
        HomeComponent
    ]
})

export class MainModule { }
