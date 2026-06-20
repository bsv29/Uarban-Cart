import { useContext, useState } from "react"
import { ShopContext } from "../context/ShopContext.jsx"
import { toast } from "react-toastify"
import { useLocation } from "react-router-dom"

const Login = () => {

    const { login, navigate } = useContext(ShopContext)
    const location = useLocation()
    const [mode, setMode] = useState("Login")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault()
        if (mode === 'Sign Up' && !name.trim()) {
            toast.error('Name is required')
            return
        }
        const ok = await login(email, password)
        if (ok) {
            if (mode === 'Sign Up') {
                toast.success('Account created')
            }
            const dest = location.state?.from?.pathname || '/'
            navigate(dest)
        }
    }

    return (
        <form onSubmit={onSubmit} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
            <div className="inline-flex items-center gap-2 mb-2 mt-10">
                <p className="prata-regular text-3xl">{mode}</p>
                <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
            </div>
            {mode === 'Login' ? null : (
                <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-800"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            )}
            <input
                type="email"
                className="w-full px-3 py-2 border border-gray-800"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <div className="w-full relative">
                <input
                    type={showPassword ? 'text' : 'password'}
                    className="w-full px-3 py-2 border border-gray-800 pr-12"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600"
                >
                    {showPassword ? 'Hide' : 'Show'}
                </button>
            </div>
            <div className="w-full flex justify-between text-sm mt-[-8px]">
                <p className="cursor-pointer">Forgot your password?</p>
                {mode === 'Login' ? (
                    <p onClick={() => setMode('Sign Up')} className="cursor-pointer">Create account</p>
                ) : (
                    <p onClick={() => setMode('Login')} className="cursor-pointer">Login Here</p>
                )}
            </div>
            <button type="submit" className="bg-black text-white font-light px-8 py-2 mt-4">
                {mode === 'Login' ? 'Sign In' : 'Sign Up'}
            </button>
        </form>
    )
}

export default Login