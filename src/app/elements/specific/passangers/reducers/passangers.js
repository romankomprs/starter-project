import {get} from 'lodash/fp'
import { createSelector } from 'reselect'

const initialState = [
    {name: undefined}
];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    return(
    get(["type"])(action) === "SET_PASSENGERS" ? get(["users"])(action): state
)}

const getPassangers = state => state.passangers;

export const  selectUser = createSelector(
     getPassangers, (passangers => passangers[0])
  )