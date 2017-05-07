"use strict";
var core_1 = require("@angular/core");
var FeedbackService = (function () {
    function FeedbackService() {
        this.questions = new Array({ id: 1, question: "food quality", score: 0 }, { id: 2, question: "food value for money", score: 0 }, { id: 3, question: "Atmostpear", score: 0 });
    }
    FeedbackService.prototype.getQuestions = function () {
        return this.questions;
    };
    FeedbackService.prototype.getQuestion = function (id) {
        return this.questions.filter(function (feedback) { return feedback.id === id; })[0];
    };
    return FeedbackService;
}());
FeedbackService = __decorate([
    core_1.Injectable()
], FeedbackService);
exports.FeedbackService = FeedbackService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZlZWRiYWNrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyQztBQUszQyxJQUFhLGVBQWU7SUFENUI7UUFHWSxjQUFTLEdBQUcsSUFBSSxLQUFLLENBQ3pCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUUsRUFDNUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFFLEVBQ3BELEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUUsQ0FDN0MsQ0FBQztJQVNOLENBQUM7SUFQRyxzQ0FBWSxHQUFaO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxFQUFVO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFsQixDQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSxlQUFlO0lBRDNCLGlCQUFVLEVBQUU7R0FDQSxlQUFlLENBZTNCO0FBZlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgRmVlZGJhY2sgfSBmcm9tIFwiLi9mZWVkYmFja1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmVlZGJhY2tTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgcXVlc3Rpb25zID0gbmV3IEFycmF5PEZlZWRiYWNrPihcbiAgICAgICAgeyBpZDogMSwgcXVlc3Rpb246IFwiZm9vZCBxdWFsaXR5XCIsIHNjb3JlOjAgfSxcbiAgICAgICAgeyBpZDogMiwgcXVlc3Rpb246IFwiZm9vZCB2YWx1ZSBmb3IgbW9uZXlcIiwgc2NvcmU6MCB9LFxuICAgICAgICB7IGlkOiAzLCBxdWVzdGlvbjogXCJBdG1vc3RwZWFyXCIsIHNjb3JlOjAgfSxcbiAgICApO1xuXG4gICAgZ2V0UXVlc3Rpb25zKCk6IEZlZWRiYWNrW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5xdWVzdGlvbnM7XG4gICAgfVxuXG4gICAgZ2V0UXVlc3Rpb24oaWQ6IG51bWJlcik6IEZlZWRiYWNrIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlc3Rpb25zLmZpbHRlcihmZWVkYmFjayA9PiBmZWVkYmFjay5pZCA9PT0gaWQpWzBdO1xuICAgIH1cbn0iXX0=