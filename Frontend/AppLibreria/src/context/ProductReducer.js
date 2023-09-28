export const productReducer = (globalState, action) => {

    switch(action.type) {
        case "GETS_PRODUCTS":
            return {
                ...globalState,
                newProducts: action.payload
            }
        case "GETS_PRODUCTS_CATEGORY":
            return{
                ...globalState,
                newProducts: action.payload
            }
        default: 
            return globalState
    }
}