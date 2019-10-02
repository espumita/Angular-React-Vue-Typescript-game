import { Action } from 'redux'
export const ACTION1 = 'ACTION1'


export interface ActionAction1 extends Action {
    type: typeof ACTION1,
    payload: string
}

export function CreateAction1(param: string) : ActionAction1{
    return {
        type: ACTION1,
        payload: param
    }
}