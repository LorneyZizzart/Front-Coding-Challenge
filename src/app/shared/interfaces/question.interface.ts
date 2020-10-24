export interface Question {
    id:number;
    color:string;
    icon:string;
    category:string;
    type:string;
    difficulty:string;
    question:string;
    correct_answer:string;
    incorrect_answers:string[];
}