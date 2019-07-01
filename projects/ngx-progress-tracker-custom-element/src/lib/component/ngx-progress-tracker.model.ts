export class NgxProgressTracker {
    id:string;
    color:string;
    header?:string;
    content?: NgxProgressTrackerContent[];
}

export class NgxProgressTrackerContent {
    key:string;
    value:string;
}