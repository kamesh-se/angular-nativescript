import { Component, OnInit } from "@angular/core";

import {Feedback} from "./feedback"
import {FeedbackService} from "./feedback.service" 


@Component({
    selector: "ns-questions",
    moduleId: module.id,
    templateUrl: "./feedback.comp.html"
})
export class FeedbackComponent implements OnInit{
    questions: Feedback[];

    constructor(private feedbackService: FeedbackService) { }

     ngOnInit(): void {
        this.questions= this.feedbackService.getQuestions();
    }
}