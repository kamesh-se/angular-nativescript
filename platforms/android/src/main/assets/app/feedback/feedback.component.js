"use strict";
var core_1 = require("@angular/core");
var feedback_service_1 = require("./feedback.service");
var FeedbackComponent = (function () {
    function FeedbackComponent(feedbackService) {
        this.feedbackService = feedbackService;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        this.questions = this.feedbackService.getQuestions();
    };
    return FeedbackComponent;
}());
FeedbackComponent = __decorate([
    core_1.Component({
        selector: "ns-questions",
        moduleId: module.id,
        templateUrl: "./feedback.component.html",
    }),
    __metadata("design:paramtypes", [feedback_service_1.FeedbackService])
], FeedbackComponent);
exports.FeedbackComponent = FeedbackComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmVlZGJhY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFHbEQsdURBQWtEO0FBUWxELElBQWEsaUJBQWlCO0lBRzFCLDJCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBSSxDQUFDO0lBRXhELG9DQUFRLEdBQVI7UUFDRyxJQUFJLENBQUMsU0FBUyxHQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEQsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSxpQkFBaUI7SUFMN0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsMkJBQTJCO0tBQzNDLENBQUM7cUNBSXVDLGtDQUFlO0dBSDNDLGlCQUFpQixDQVE3QjtBQVJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHtGZWVkYmFja30gZnJvbSBcIi4vZmVlZGJhY2tcIlxuaW1wb3J0IHtGZWVkYmFja1NlcnZpY2V9IGZyb20gXCIuL2ZlZWRiYWNrLnNlcnZpY2VcIiBcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1xdWVzdGlvbnNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZmVlZGJhY2suY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgRmVlZGJhY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgcXVlc3Rpb25zOiBGZWVkYmFja1tdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmZWVkYmFja1NlcnZpY2U6IEZlZWRiYWNrU2VydmljZSkgeyB9XG5cbiAgICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucXVlc3Rpb25zPSB0aGlzLmZlZWRiYWNrU2VydmljZS5nZXRRdWVzdGlvbnMoKTtcbiAgICB9XG59Il19