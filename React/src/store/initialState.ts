export interface Store {
    mines: Mine[]
}

export interface Mine {
    position: Position
}

export interface Position {
    x: number
    y: number
}

const initialState: Store = {
    mines: [
        { position: { x: 1, y: 1} },
        { position: { x: 2, y: 2} },
    ]
}

export default initialState