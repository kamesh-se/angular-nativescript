import { Injectable } from "@angular/core";

import { Feedback } from "./feedback";

@Injectable()
export class FeedbackService {

    private questions = new Array<Feedback>(
        { id: 1, question: "food quality", score:0 },
        { id: 2, question: "food value for money", score:0 },
        { id: 3, question: "Atmostpear", score:0 },
    );

    getQuestions(): Feedback[] {
        return this.questions;
    }

    getQuestion(id: number): Feedback {
        return this.questions.filter(feedback => feedback.id === id)[0];
    }
}