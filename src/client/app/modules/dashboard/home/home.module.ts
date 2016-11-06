import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { TimelineComponent, ChatComponent, NotificationComponent } from './home.component';

@NgModule({
    imports: [CommonModule],
    declarations: [HomeComponent, TimelineComponent, ChatComponent, NotificationComponent],
    exports: [HomeComponent, TimelineComponent, ChatComponent, NotificationComponent]
})

export class HomeModule { }
