import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title"


const CartTotal = () => {

    const {currency, delivery_fee, getCartAmount} = useContext(ShopContext)

    return (
        <div className="w-full">
            <div className="text-2xl mb-8">
                <Title text1={'CART'} text2={'TOTALS'} />
            </div>

            <div className="flex flex-col gap-4 text-sm">
                <div className="flex justify-between py-2 border-b">
                    <p className="text-gray-600">Subtotal</p>
                    <p>{currency} {getCartAmount()}.00</p>
                </div>
                <div className="flex justify-between py-2 border-b">
                    <p className="text-gray-600">Shipping Fee</p>
                    <p>{currency} {delivery_fee}</p>
                </div>
                <div className="flex justify-between py-2">
                    <p className="font-semibold text-base">Total</p>
                    <p className="font-semibold text-base">{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}</p>
                </div>
            </div>

        </div>
    )
}

export default CartTotal