const defaultState = {
    filmDate: []
}


export default (state=defaultState,action) => {
    console.log(action.type);
    switch(action.type){
        case "FILM_ACTION_FULFILLED":
            let filmState = JSON.parse(JSON.stringify(state));
            filmState.filmDate = action.payload;
            return filmState;
    }
    return state;
}