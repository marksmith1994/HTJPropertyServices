import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from './home/greeting/greeting.component';
import { InfoBlockComponent } from './home/info-block/info-block.component';
import { AdvertBlockComponent } from './home/advert-block/advert-block.component';

@NgModule({
    imports: [
        SharedModule,
        CommonModule
    ],
    declarations: [
        AboutComponent,
        ContactComponent,
        DashbaordComponent,
        GalleryComponent,
        HomeComponent,
        GreetingComponent,
        InfoBlockComponent,
        AdvertBlockComponent
    ],
    exports: [
        AboutComponent,
        ContactComponent,
        DashbaordComponent,
        GalleryComponent,
        HomeComponent
    ]
})

export class MainModule { }
