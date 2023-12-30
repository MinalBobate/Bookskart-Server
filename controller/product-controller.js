import Product from '../model/productSchema.js';


export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});
        if (products) {
            response.status(200).json(products);
        } else {
            response.status(400).json(error.message)
        }
    } catch (error) {
        response.status(500).json(error.message)
    }
}

export const getProductById = async (request, response) => {
    try {
        const products = await Product.findOne({ 'id': request.params.id });
        console.log(products);
        if(products){
            response.status(200).json(products);
        }else{
            response.json('products not found');
        }
       
    } catch (error) {
response.status(500).json(error.message)
    }
}