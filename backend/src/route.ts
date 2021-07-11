interface Position {
    latitude: number;
    longitude: number;
}

export class Route {

    title: string;
    startPosition: Position;
    endPosition: Position;

    constructor(title: string, startPosition: Position, endPosition: Position) {
        this.title = title;
        this.startPosition = startPosition;
        this.endPosition = endPosition;
    }
}