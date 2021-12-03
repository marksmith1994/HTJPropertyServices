import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

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
        HomeComponent
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
