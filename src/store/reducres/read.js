const defaultState = {
    readDate: []
}

export default (state=defaultState,action) => {
    console.log(action.type);
    switch(action.type){
        case "READ_DATE_FULFILLED":
            let readState = JSON.parse(JSON.stringify(state));
            readState.readDate = action.payload;
            return readState;
    }
    return state;
}