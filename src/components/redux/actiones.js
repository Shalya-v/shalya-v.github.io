export const productsFetched = (products) => {
    return {
        type: 'PRODUCTS_FETCHED',
        payload: products
    }
}

export const toggleProductSelected = (id) => {
    return {
        type: 'TOGGLE_PRODUCT_SELECTED',
        productId: id
    }
}

export const increaseAmount= (id) => {
    return {
        type: 'INCREASE_AMOUNT',
        productId: id
    }
}

export const decreaseAmount = (id) => {
    return {
        type: 'DECREASE_AMOUNT',
        productId: id
    }
}

export const calculateTotalPrice = () => {
    return {
        type: 'CALCULATE_TOTAL_PRICE'
        
    }
}

export const processSearch = (value) => {
    return {
        type: 'PROCESS_SEARCH',
        value: value
        
        
    }
}

export const processFilter = (field, value, flag) => {
    return {
        type: 'PROCESS_FILTER',
        value: value,
        flag: flag,
        field: field
        
        
    }
}