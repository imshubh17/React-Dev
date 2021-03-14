export const initialState = {
    data:[],
    user:null,   
};


export function reducer(state, action){
    console.log(action);
    switch(action.type){
        case 'ADD_TO_STORE':
            let newdata = [...state.data, action.item]
            localStorage.setItem("data", JSON.stringify(newdata));
            let store = JSON.parse(localStorage.getItem("data"))
            return {
                ...state, data: store
            }
          
        case 'SET_USER':
            return {
                ...state,user:action.user
            }
                     
        default:
            return state;

    }
}