import axios from "axios";
import put from "redux-saga"
import {get} from 'lodash/fp'

// generator function
export function* fetchPassangersSaga(){
    // spinner, start of process // loader
    // passangersProcessing
    

    try {
        console.log("response: ")

        const response =  yield axios.get("https://jsonplaceholder.typicode.com/users")
        console.log("response: ", response)

        const users = get(["data"])(response)
        console.log(response)
        yield put({type: "SET_PASSENGERS", users})

    } catch (error) {
        // catch

    }
}