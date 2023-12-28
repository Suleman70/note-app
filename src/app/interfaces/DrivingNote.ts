
export class DrivingNote{

    id: number;
    date: Date;
    day: string;
    time: string;
    trainingType: string;
    topic: string;
    carModel: string;
    instructor: string;
    weather: string;
    lessonHours: number;
    noteDetails: string;
    cost: number;

    constructor(id: number,
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
        noteDetails: string,
      
     ){
            this.id = id;
            this.date = date;
            this.day = day;
            this.time = time;
            this.trainingType = trainingType;
            this.instructor = instructor;
            this.weather = weather;
            this.carModel = carModel;
            this.lessonHours = lessonHours;
            this.noteDetails = noteDetails;
            this.topic = topic;
            this.cost = cost;

        }
}