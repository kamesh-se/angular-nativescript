import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { FeedbackComponent } from "./feedback/feedback.component";
import { CardComponent } from "./feedback-card/card.component";

const routes: Routes = [
    { path: "", redirectTo: "/card", pathMatch: "full" },
    { path: "feedback", component: FeedbackComponent },
    { path: "card", component: CardComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }