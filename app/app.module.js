"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var feedback_service_1 = require("./feedback/feedback.service");
var card_service_1 = require("./feedback-card/card.service");
var feedback_component_1 = require("./feedback/feedback.component");
var card_component_1 = require("./feedback-card/card.component");
//fonts
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule,
            nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                'fa': 'fonts/font-awesome.css'
            }),
        ],
        declarations: [
            app_component_1.AppComponent,
            feedback_component_1.FeedbackComponent,
            card_component_1.CardComponent
        ],
        providers: [
            feedback_service_1.FeedbackService,
            card_service_1.CardService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsNkNBQWlEO0FBQ2pELGlEQUErQztBQUUvQyxnRUFBOEQ7QUFDOUQsNkRBQTJEO0FBQzNELG9FQUFrRTtBQUNsRSxpRUFBK0Q7QUFDL0QsT0FBTztBQUNQLHVFQUFzSDtBQXlCdEgsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBeEJyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsd0NBQWtCO1lBQ2xCLDhCQUFnQjtZQUNoQiw2Q0FBaUIsQ0FBQyxPQUFPLENBQUM7Z0JBQ3RCLElBQUksRUFBRSx3QkFBd0I7YUFDakMsQ0FBQztTQUNMO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsNEJBQVk7WUFDWixzQ0FBaUI7WUFDakIsOEJBQWE7U0FDaEI7UUFDRCxTQUFTLEVBQUU7WUFDUCxrQ0FBZTtZQUNmLDBCQUFXO1NBQ2Q7UUFDRCxPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7S0FDSixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IEZlZWRiYWNrU2VydmljZSB9IGZyb20gXCIuL2ZlZWRiYWNrL2ZlZWRiYWNrLnNlcnZpY2VcIjtcbmltcG9ydCB7IENhcmRTZXJ2aWNlIH0gZnJvbSBcIi4vZmVlZGJhY2stY2FyZC9jYXJkLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZlZWRiYWNrQ29tcG9uZW50IH0gZnJvbSBcIi4vZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSBcIi4vZmVlZGJhY2stY2FyZC9jYXJkLmNvbXBvbmVudFwiO1xuLy9mb250c1xuaW1wb3J0IHtUTlNGb250SWNvbk1vZHVsZSwgVE5TRm9udEljb25TZXJ2aWNlLCBUTlNGb250SWNvblBpcGUsIFROU0ZvbnRJY29uUHVyZVBpcGV9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgVE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgICAnZmEnOiAnZm9udHMvZm9udC1hd2Vzb21lLmNzcydcbiAgICAgICAgfSksXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBGZWVkYmFja0NvbXBvbmVudCxcbiAgICAgICAgQ2FyZENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEZlZWRiYWNrU2VydmljZSxcbiAgICAgICAgQ2FyZFNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19