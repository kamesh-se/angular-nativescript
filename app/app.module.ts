import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { FeedbackService } from "./feedback/feedback.service";
import { CardService } from "./feedback-card/card.service";
import { FeedbackComponent } from "./feedback/feedback.component";
import { CardComponent } from "./feedback-card/card.component";
//fonts
import {TNSFontIconModule, TNSFontIconService, TNSFontIconPipe, TNSFontIconPurePipe} from 'nativescript-ngx-fonticon';
@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        TNSFontIconModule.forRoot({
            'fa': 'fonts/font-awesome.css'
        }),
    ],
    declarations: [
        AppComponent,
        FeedbackComponent,
        CardComponent
    ],
    providers: [
        FeedbackService,
        CardService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
