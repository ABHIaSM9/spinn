import { Observable, of } from "rxjs";

const quizIndex = 2;
const isOptionSelected = false;
const isCheckAnswer = false;
const selectedOptionIndex = 5;
const correctIndex = 4;

export class QuizServiceMock{

  getIsCheckAnswerLister():Observable<boolean>{
    return of(isCheckAnswer);
  }

  getCorrectAnswerIndexListener():Observable<number>{
    return of(correctIndex);
  }

  getSelectedOptionIndexListener():Observable<number>{
    return of(selectedOptionIndex);
  }

  getQuizIndexLitener():Observable<number>{
    return of(quizIndex);
  }

  getIsOptionSelectedListener():Observable<boolean>{
    return of(isOptionSelected);
  }
}
