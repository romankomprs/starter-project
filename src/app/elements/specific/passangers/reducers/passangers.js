import {get} from 'lodash/fp'
const initialState = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => (
    get(["type"])(action) === "SET_PASSENGERS" ? get(["users"])(action): state
)