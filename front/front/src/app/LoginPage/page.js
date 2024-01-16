"use client"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation";

const backEnd = "http://localhost:8003/users/one"

export default function LoginPage() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    const VisibilityPassword = () => {
        setShowPassword(!showPassword)
    }

    const GoSignPage = () => {
        router.push('/SignUp')
    }
    const NavigateDashBoard = () => {
        router.push('/Dashboard')
    }

    const HandleSignIn = async () => {
        try {
            setIsLoading(true)
            const userData = await axios.post(backEnd, {
                email,
                password,
            });

            if (userData.data === 'ExUser') {
                NavigateDashBoard();

            } else {
                setError('The given user cannot find')
                console.log(userData.data, "this is user data");
                setTimeout(() => {
                    setError('')
                }, 2000)
            }

        } catch (error) {
            setError('something wrong', error);
            setTimeout(() => {
                setError('');
            }, 1000);
        } finally {
            setIsLoading(false)
           const email = ''
           const password = ''
        }
    };


    return (
        <div className="flex w-full">
            <div className="h-screen w-6/12 flex items-center justify-center">
                <div className="flex flex-col h-[554px] w-[384px]">

                    <div className="justify-center flex gap-4 p-5 justify-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 24" fill="none">
                                <path d="M16.1294 8.18255V0.404785H8.18219V8.18255H0.234985V16.1298H8.18219V23.9075H16.1294V16.1298H24.0766V8.18255H16.1294ZM16.1294 15.9603H8.18219V8.35319H16.1294V15.9603Z" fill="#0166FF" />
                            </svg>
                        </div>
                        <div className="font-bold text-2xl">Geld</div>
                    </div>

                    <div className="text-center text-2xl font-semibold font-serif mt-[40px]">Welcome Back</div>
                    <div className="text-center text-base font-normal font-serif mt-2 mb-[40px]">Welcome Back, Please enter your detail!</div>

                    <div className="flex flex-col gap-[25px] ">
                        <div className="flex flex-col gap-[25px] ">
                            {isLoading ? (
                                <div className="ml-[150px]">
                                    <span className="loading loading-dots loading-lg"></span>
                                </div>
                            ) : (
                                <>
                                    <input
                                        className="flex h-[48px] p-[16px] items-center border rounded-2xl"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <div className="flex h-[48px] relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="flex w-[400px] h-[48px] relative p-[16px] items-center border rounded-2xl"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <div className="absolute mt-[10px] ml-[350px]"
                                            onClick={VisibilityPassword}>{showPassword ? "👁️" : "👁️‍🗨️"}</div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-red-500 mt-2">{error}</div>
                        <button onClick={HandleSignIn} className="mt-[40px]  bg-blue-600 rounded-2xl w-[384px] h-[48px] justify-center items-center p-[16px]">
                            Sign In
                        </button>

                        <div className="mt-[40px] justify-between w-[384px] h-[48px] justify-center items-center p-[16px] flex">
                            <div>Dont have any Account ? </div>
                            <button
                                onClick={GoSignPage}
                                className="text-sky-400">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-screen w-6/12 bg-blue-600"></div>
        </div>
    )
}
















