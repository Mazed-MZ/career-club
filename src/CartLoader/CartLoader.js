import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () =>{
    const loadProducts = await fetch('../../public/fakeData.json');
    const products = await loadProducts.json();

    //if cart data is in database, you have to use async await 
    const storedCart = getShoppingCart();
    const savedCart = [];
    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    //if you need to send two things

    return savedCart;
}

export default cartProductsLoader;