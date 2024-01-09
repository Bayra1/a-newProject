'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Loading() {
    const router = useRouter()

    useEffect(() => {
        const delayedAction = () => {
            router.push('/FirstStep')
        };

        const timeout = setTimeout(delayedAction, 2000)
    }, [router])

    return (
        <div className="w-full flex  justify-center items-center mt-[500px]">
            <div className="flex w-[172px] h-[184px] items-center flex-col gap-[48px]">
                <div className="flex items-center gap-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="44" viewBox="0 0 45 44" fill="none">
                        <path d="M29.7273 14.5887V0.081543H14.9042V14.5887H0.0810547V29.4118H14.9042V43.9189H29.7273V29.4118H44.5505V14.5887H29.7273ZM29.7273 29.0958H14.9042V14.9069H29.7273V29.0958Z" fill="#0166FF" />
                    </svg>
                    <div className="text-5xl font-bold">Geld</div>
                </div>
                <div>
                    <span className="loading loading-infinity loading-lg"></span>
                </div>
                <div className="text-lg">Wait for a Second</div>
            </div>
        </div>
    )
}

