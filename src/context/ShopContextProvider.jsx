import { ShopContext } from "./ShopContext";
import { products } from "../assets/assets";   
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ShopContextProvider = ({ children }) => {

    const currency = "₹";
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({})
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    const addToCart = async (itemId, size) => {

        if (!size){
            toast.error('Select Product Size')
            return
        }

        let cartData = structuredClone(cartItems)

        if (cartData[itemId]) {
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1
            }
            else {
                cartData[itemId][size] = 1
            }
        }
        else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }

        setCartItems(cartData)
    }

    // Auth: simple client-side placeholder auth
    const login = async (email, password) => {
        try {
            const trimmedEmail = String(email || '').trim()
            const trimmedPassword = String(password || '').trim()

            if (!trimmedEmail || !trimmedPassword) {
                toast.error('Email and password are required')
                return false
            }
            if (trimmedPassword.length < 6) {
                toast.error('Password must be at least 6 characters')
                return false
            }

            const fakeUser = { email: trimmedEmail }
            setUser(fakeUser)
            localStorage.setItem('auth_user', JSON.stringify(fakeUser))
            toast.success('Logged in successfully')
            return true
        } catch (err) {
            toast.error('Login failed')
            return false
        }
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('auth_user')
        toast.info('Logged out')
        navigate('/')
    }

    const getCartCount = () => {

        let totalCount = 0
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalCount += cartItems[items][item]
                    }

                } catch (error) {

                }
            }
        }

        return totalCount
    }

    const updateCartItemQuantity = (itemId, size, quantity) => {
        const qty = Math.max(1, Number(quantity) || 1)
        const cartData = structuredClone(cartItems)
        if (!cartData[itemId]) cartData[itemId] = {}
        cartData[itemId][size] = qty
        setCartItems(cartData)
    }

    const updateQuantity = async (itemId, size, quantity) => {
        const cartData = structuredClone(cartItems)
        if (!cartData[itemId]) cartData[itemId] = {}
        cartData[itemId][size] = quantity
        setCartItems(cartData)
    }

    const removeFromCart = (itemId, size) => {
        const cartData = structuredClone(cartItems)
        if (cartData[itemId] && cartData[itemId][size]) {
            delete cartData[itemId][size]
            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId]
            }
            setCartItems(cartData)
        }
    }

    const getCartAmount =  () => {

        let amount = 0
        for(const items in cartItems){
            let itemInfo = products.find((product) => product._id === items)
            for(const item in cartItems[items]){
                try {
                    if (cartItems[items][item] > 0){
                        amount += itemInfo.price * cartItems[items][item]
                    }
                } catch (error) {

                }
            }
        }
        return amount
    }

    // Load persisted auth on mount
    useEffect(() => {
        try {
            const raw = localStorage.getItem('auth_user')
            if (raw) {
                const parsed = JSON.parse(raw)
                if (parsed && parsed.email) setUser(parsed)
            }
        } catch {}
    }, [])

    const value = {
        products,
        currency,
        delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, getCartCount, updateCartItemQuantity,
        updateQuantity, removeFromCart,
        getCartAmount, 
        navigate,
        user,
        login,
        logout
    };
    
    console.log("✅ Products inside Provider:", products);

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
