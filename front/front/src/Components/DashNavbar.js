'use client'
import { useState } from "react"
import { useRouter } from "next/navigation";
export default function DashNav() {
    const [isDash, setIsDash] = useState(false)
    const [isRecord, setIsRecord] = useState(false)
    const router = useRouter()

    const GoDash = () => {
        setIsDash(true)
        router.push('/Dashboard')
    }

    const GoRecord = () => {
        setIsRecord(true)
        router.push('/Records')
    }

    return (
        <div className="flex w-full justify-center">
            <div className="navbar bg-slate-300 ml-[50px] mr-[50px]">

                <div className="flex-1 flex gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                        <path d="M18.8296 9.36772V0.300781H9.56514V9.36772H0.300659V18.6322H9.56514V27.6991H18.8296V18.6322H28.0941V9.36772H18.8296ZM18.8296 18.4347H9.56514V9.56665H18.8296V18.4347Z" fill="#0166FF" />
                    </svg>

                    {isDash ? (

                        <button onClick={GoDash} className="text-xl font-bold text-green-400">DashBoard</button>
                    ) : (
                        <button onClick={GoDash} className="text-xl font-bold text-slate-700">DashBoard</button>
                    )}

                    {isRecord ? (
                        <button onClick={GoRecord} className="text-xl font-bold text-green-400">Record</button>
                    ) : (
                        <button onClick={GoRecord} className="text-xl font-bold text-slate-700">Record</button>
                    )}




                </div>

                <div className="flex-none gap-2">
                    <button className="btn">
                        <div className="text-2xl">+</div>
                        Record</button>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 h-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}