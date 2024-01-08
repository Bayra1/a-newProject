"use client";
import { useState } from "react"
import axios from "axios"

const backEnd = "http://localhost:8003/users"


export default function SignUp() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [rePassword, setRePassword] = useState()
    const [showPassword, setShowPassword] = useState(false)
    // const [showRePassword, setShowRePassword] = useState(false)

    const VisibilityPassword = () => {
        setShowPassword(!showPassword)
    }
    // const ReVisbilityReP = () => {
    //     setShowRePassword(!showRePassword)
    // }

    const HandleSignIn = async () => {

        try {
            if (name !== "" || name !== null) {
                console.log(password);
                const userData = await axios.post(backEnd, {
                    name,
                    email,
                    password,
                    rePassword
                });
                console.log("This is Data of user", userData.data);
            } else {
                alert("The form has to be filled")
            }
        } catch (error) {
            console.log("something goes wrongly");
        }
    }

    return (
        <div className="flex w-full">
            <div className="h-screen w-6/12 flex items-center justify-center">
                <div className="flex flex-col h-[554px] w-[384px]">

                    <div className="justify-center flex gap-4 p-5 justify-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 24" fill="none">
                                <path d="M16.1294 8.18255V0.404785H8.18219V8.18255H0.234985V16.1298H8.18219V23.9075H16.1294V16.1298H24.0766V8.18255H16.1294ZM16.1294 15.9603H8.18219V8.35319H16.1294V15.9603Z" fill="#0166FF" /></svg>
                        </div>
                        <div className="font-bold text-2xl">Geld</div>
                    </div>

                    <div className="text-center text-2xl font-semibold font-serif mt-[40px]">Create Geld account</div>
                    <div className="text-center text-base font-normal font-serif mt-2 mb-[40px]">Sign up below to create your Wallet account</div>

                    <div className="flex flex-col gap-[25px] ">
                        <input
                            className="flex h-[48px] p-[16px] items-center border rounded-2xl"
                            placeholder="Name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />

                        <input className="flex h-[48px] p-[16px] items-center border rounded-2xl"
                            placeholder="Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />

                        <div className="flex h-[48px]">
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
                        
                        {/* <div className="relative">
                            <input
                                type={showRePassword ? "text" : "password"}
                                className="w-[390px] h-[48px] p-[16px] border rounded-2xl"
                                placeholder="Re-Password"
                                value={rePassword}
                                onChange={(e) => setRePassword(e.target.value)}
                            />
                            <div
                                className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
                                onClick={ReVisbilityReP}
                            >
                                {showRePassword ? "👁️" : "👁️‍🗨️"}
                            </div>
                        </div> */}

                    </div>
                    <button className="mt-[40px]  bg-blue-600 rounded-2xl w-[384px] h-[48px] justify-center items-center p-[16px]" onClick={HandleSignIn}>Sign in</button>
                </div>
            </div>
            <div className="h-screen w-6/12 bg-blue-600"></div>
        </div>
    )
}


