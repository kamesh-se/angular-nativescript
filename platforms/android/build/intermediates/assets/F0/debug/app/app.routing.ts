import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { FeedbackComponent } from "./feedback/feedback.component";

const routes: Routes = [
    { path: "", redirectTo: "/feedback", pathMatch: "full" },
    { path: "feedback", component: FeedbackComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }