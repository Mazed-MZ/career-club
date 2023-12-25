import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { getShoppingCart } from '../../utilities/fakedb';

export const UserContext = createContext(null);
export const auth = getAuth(app);
export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const signinwithpass = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = ()=>{
        return signOut(auth);
    }

    const googleSignin = (provider)=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unsubscibe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscibe();
        }
    }, [])

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


    const authInfo = {
        user,
        loading,
        signinwithpass,
        logout,
        googleSignin,
        cartProductsLoader
    }

    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    )
}
