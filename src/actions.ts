import {createAction} from 'typesafe-actions' 

export const IncrementByAction = createAction('counter/increment')<number>();