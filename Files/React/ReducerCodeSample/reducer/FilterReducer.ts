import {FilterValuesType} from "../App";

export const FilterReducer = (state: FilterValuesType, action: actionType) => {
    switch (action.type) {
        case 'CHANGE-FILTER': {
            return action.payload.filter
        }
    }
}

type actionType = changeFilterACType
type changeFilterACType = ReturnType<typeof changeFilterAC>

export const changeFilterAC = (filter: FilterValuesType) => {
    return ({
        type: 'CHANGE-FILTER',
        payload: {
            filter: filter
        }
    } as const)
}