export interface Store {
    board: Board
}

export interface Board {
    mines: Mine[]
}

export interface Mine {
    position: Position
}

export interface Position {
    x: number
    y: number
}

export const initialState: Store = {
    board: {
        mines: []
    }
}