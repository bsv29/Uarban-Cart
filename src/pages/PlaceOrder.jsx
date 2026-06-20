
import { assets } from "../assets/assets"
import CartTotal from "../components/CartTotal"
import Title from "../components/Title"
import { useContext, useState } from "react"
import { ShopContext } from "../context/ShopContext"

const PlaceOrder = () => {

    const [method, setMethod] = useState('cod')
    const { navigate } = useContext(ShopContext)

    return (
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-top">
            {/*-----------------Left-Side-----------*/}
            <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
                
                <div className="text-xl sm:text-2xl my-3">
                    <Title text1={"DELIVERY"} text2={"INFORMATION"} />
                </div>
                <div className="flex gap-3">
                    <input type="text" placeholder="first name" className="border border-gray-500 rounded py-1.5 px-3.5 w-full" />
                    <input type="text" placeholder="last name" className="border border-gray-500 rounded py-1.5 px-3.5 w-full" />
                </div>
                <input type="email" placeholder="Email address" className="border border-gray-500 rounded py-1.5 px-3.5 w-full" />
                <input type="text" placeholder="Address" className="border border-gray-500 rounded py-1.5 px-3.5 w-full" />
                <div className="flex gap-3">
                    <input type="text" placeholder="City" className="border border-gray-500 rounded py-1.5 px-3.5 w-full" />
                    <input type="text" placeholder="State" className="border border-gray-500 rounded py-1.5 px-3.5 w-full" />
                </div>
                <div className="flex gap-3">
                    <input type="number" placeholder="Zip Code" className="border border-gray-500 rounded py-1.5 px-3.5 w-full" />
                    <input type="text" placeholder="Country" className="border border-gray-500 rounded py-1.5 px-3.5 w-full" />
                </div> 
                <input type="number" placeholder="Phone Number" className="border border-gray-500 rounded py-1.5 px-3.5 w-full" />
            </div>

            {/*-----------------Right-Side-----------*/}
            <div className="mt-8">

                <div className="mt-8 min-w-80">
                    <CartTotal />
                </div>

                <div className="mt-12">
                    <div className="text-xl sm:text-2xl mb-4">
                        <Title text1={"PAYMENT"} text2={"METHOD"} />
                    </div>
                    {/*-----------------Payment Method-----------*/}
                    <div className="flex flex-col gap-3">
                        <div onClick={() => setMethod('stripe')} className={`flex items-center gap-3 border border-gray-400 p-3 px-4 cursor-pointer rounded ${method === 'stripe' ? 'bg-red-50' : ''}`}>
                            <input type="radio" name="payment" value="stripe" checked={method === 'stripe'} onChange={() => setMethod('stripe')} className="w-4 h-4" />
                            <img className="h-4 ml-2" src={assets.stripe_logo} alt="stripe"/>
                        </div>
                        <div onClick={() => setMethod('razorpay')} className={`flex items-center gap-3 border border-gray-400 p-3 px-4 cursor-pointer rounded ${method === 'razorpay' ? 'bg-red-50' : ''}`}>
                            <input type="radio" name="payment" value="razorpay" checked={method === 'razorpay'} onChange={() => setMethod('razorpay')} className="w-4 h-4" />
                            <img className="h-4 ml-2" src={assets.razorpay_logo} alt="razorpay"/>
                        </div>
                        <div onClick={() => setMethod('cod')} className={`flex items-center gap-3 border border-gray-400 p-3 px-4 cursor-pointer rounded ${method === 'cod' ? 'bg-red-50' : ''}`}>
                            <input type="radio" name="payment" value="cod" checked={method === 'cod'} onChange={() => setMethod('cod')} className="w-4 h-4" />
                            <span className="text-gray-600 text-sm font-medium ml-2">CASH ON DELIVERY</span>
                        </div>
                    </div>

                    <div className="w-full text-end mt-8">
                        <button onClick={() => navigate('/orders')} className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder