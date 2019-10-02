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
    mines: [ ]
}

export default initialState