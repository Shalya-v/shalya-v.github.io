import applyAllFilters from "./utils"
const initialState = {
    products: [],
    filter: {
        search: '',
        publisher: {},
        language: [],
        binding:[]
    },
    filteredProducts: [],
    totalPrice: 0,
    basketProducts: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODUCTS_FETCHED':
            return {
                ...state,
                products: action.payload,
                filteredProducts: action.payload
            }

        case 'TOGGLE_PRODUCT_SELECTED':
            const updatedProducts = state.products.map(product => {
                                        if(product.id === action.productId) {
                                            return {...product,selected: !product.selected, amount: 1};
                                        }
                                        return product;
            })
            const updatedFilteredProducts = state.filteredProducts.map(product => {
                if(product.id === action.productId) {
                    return {...product,selected: !product.selected, amount: 1};
                }
                return product;
})
            return {
                ...state,
                products: updatedProducts,
                filteredProducts: updatedFilteredProducts,
                basketProducts: updatedProducts.filter(product => product.selected)
            }

        case 'INCREASE_AMOUNT':
            const increasedAmount = state.basketProducts.map(product => 
                {if(product.id === action.productId && product.amount < product.inStockQuantity){product.amount = (product.amount + 1)}return product})
            return {
                ...state,
                basketProducts: increasedAmount
            }

        case 'DECREASE_AMOUNT':
            const decreasedAmount = state.basketProducts.map(product => 
                {if(product.id === action.productId && product.amount > 1){product.amount = (product.amount - 1)}return product})
            return {
                ...state,
                basketProducts: decreasedAmount
            }

        case 'CALCULATE_TOTAL_PRICE':
            const totalPrice =  state.basketProducts.reduce((acc, el) => acc + (el.price * el.amount), 0);
            return {
                ...state,
                totalPrice: totalPrice
            }
        
        case 'PROCESS_SEARCH':
            state.filter.search = action.value;
            
            return {
                ...state,
                filteredProducts: applyAllFilters(state)
            
                
            }
            
        case 'PROCESS_FILTER':
            state.filter[action.field][action.value] = action.flag;

            return {
                ...state,
                filteredProducts: applyAllFilters(state)
                
            } 
        
        default: return state
    }
}

export default reducer;