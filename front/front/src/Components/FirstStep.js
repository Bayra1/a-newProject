'use client'
import { useRouter } from "next/navigation";

export default function FirstOne() {
    const router = useRouter()
    const ShiftSecond = () => {
        router.push('/SecondStep')
    }
    return (
        <div className="flex flex-col items-center">
            <div className="mt-[40px]">
                <div className="flex justify-center gap-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 45 44" fill="none">
                        <path d="M29.7273 14.5887V0.081543H14.9042V14.5887H0.0810547V29.4118H14.9042V43.9189H29.7273V29.4118H44.5505V14.5887H29.7273ZM29.7273 29.0958H14.9042V14.9069H29.7273V29.0958Z" fill="#0166FF" />
                    </svg>
                    <div className="text-5xl font-bold">Geld</div>
                </div>
                <div className="mt-[50px]">
                    <ul className="steps steps-vertical lg:steps-horizontal">
                        <li className="step step-primary">Currency</li>
                        <li className="step">Country</li>
                        <li className="step">Finish</li>
                    </ul>
                </div>
            </div>


            <div className="flex flex-col mt-[150px]">
                <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M21 16C21 16.9889 20.7068 17.9556 20.1573 18.7779C19.6079 19.6001 18.827 20.241 17.9134 20.6194C16.9998 20.9978 15.9945 21.0969 15.0245 20.9039C14.0546 20.711 13.1637 20.2348 12.4645 19.5355C11.7652 18.8363 11.289 17.9454 11.0961 16.9755C10.9031 16.0055 11.0022 15.0002 11.3806 14.0866C11.759 13.173 12.3999 12.3921 13.2221 11.8427C14.0444 11.2932 15.0111 11 16 11C17.3261 11 18.5979 11.5268 19.5355 12.4645C20.4732 13.4021 21 14.6739 21 16ZM31 8V24C31 24.2652 30.8946 24.5196 30.7071 24.7071C30.5196 24.8946 30.2652 25 30 25H2C1.73478 25 1.48043 24.8946 1.29289 24.7071C1.10536 24.5196 1 24.2652 1 24V8C1 7.73478 1.10536 7.48043 1.29289 7.29289C1.48043 7.10536 1.73478 7 2 7H30C30.2652 7 30.5196 7.10536 30.7071 7.29289C30.8946 7.48043 31 7.73478 31 8ZM29 13.7937C27.8645 13.458 26.8311 12.8435 25.9938 12.0062C25.1565 11.1689 24.542 10.1355 24.2062 9H7.79375C7.45801 10.1355 6.84351 11.1689 6.00623 12.0062C5.16895 12.8435 4.1355 13.458 3 13.7937V18.2062C4.1355 18.542 5.16895 19.1565 6.00623 19.9938C6.84351 20.8311 7.45801 21.8645 7.79375 23H24.2062C24.542 21.8645 25.1565 20.8311 25.9938 19.9938C26.8311 19.1565 27.8645 18.542 29 18.2062V13.7937Z" fill="white" />
                    </svg>
                </div>
                <div className="flex mt-[25px] mt-[25px] mb-[25px] justify-center">
                    Select Base Currency
                </div>
                <div className="justify-center w-[384px] gap-5 flex-col items-center flex">
                    <select className="select select-warning w-full max-w-xs">
                        <option disabled selected>What is your currency ?</option>
                        <option>Tugrik</option>
                        <option>Euro</option>
                        <option>Dollar</option>
                        <option>Ruble</option>
                    </select>
                    <div className="flex text-basse font-normal mb-[40px]">
                        Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one.
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        onClick={ShiftSecond}
                        className="w-[384px] h-[48px] bg-sky-500 text-slate-100 bg-sky-500 hover:bg-sky-700 rounded-xl">Confirm</button>
                </div>
            </div>
        </div>
    )
}
