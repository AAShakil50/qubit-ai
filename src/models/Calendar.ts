export type Calendar = {
    id: number;
    title: string;
    description: string;
    events: Event[];
}

export type Event = {
    id: number;
    title: string;
    description: string;
    start: Date;
    end: Date;
    location: string;
}