function applyAllFilters(state){
    let filteredProducts= state.products.filter(product => product.title.toLowerCase().includes(state.filter.search)|| product.publisher.toLowerCase().includes(state.filter.search)); 
    const availableFields = ['publisher', 'language', 'binding'];
    for (let field of availableFields){
        const appliedFilters = [];
        for (let pair of Object.entries(state.filter[field])){
            if (pair[1]){ appliedFilters.push(pair[0])}
        }
        if (appliedFilters.length) {filteredProducts = filteredProducts.filter(product => appliedFilters.includes(product[field]))} 
    }
    return filteredProducts;
}

export default applyAllFilters;
