
export class DrivingNoteToAddDto{


    date: Date;
    day: string;
    time: string;
    trainingType: string;
    topic: string;
    carModel: string;
    instructor: string;
    weather: string;
    lessonHours: number;
    lessonNotes: string;
    cost: number;

    constructor(
        date: Date,
        day: string,
        time: string,
        trainingType: string,
        topic: string,
        carModel: string,
        instructor: string,
        weather: string,      
        lessonHours: number,
        cost: number,
        lessonNotes: string,
      
     ){
        
            this.date = date;
            this.day = day;
            this.time = time;
            this.trainingType = trainingType;
            this.instructor = instructor;
            this.weather = weather;
            this.carModel = carModel;
            this.lessonHours = lessonHours;
            this.lessonNotes = lessonNotes;
            this.topic = topic;
            this.cost = cost;

        }
}