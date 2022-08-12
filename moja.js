const products = [
    {id: 1, name: "Phone"},
    {id: 2, name: "phone"},
    {id: 3, name: "Laptop"},
    {id: 4, name: "Phone"},
    {id: 5, name: "lapTop"},
    {id: 6, name: "PhoNE"}
]

function matching (products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
const result = matching(products, "laptop");
console.log(result);