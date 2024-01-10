import bgr from "../../public/image/Noise.png";
export default function OutMenuIn({ cash, income, percent, totalExpense, percentExp }) {
    return (
        <div className="flex w-full justify-center mt-[50px] flex-gap gap-[40px]">
            {/* First */}
            <div className="w-[400px] rounded-2xl h-[250px] bg-red-100 bg-blue-800">

                <div className="flex items-center text-sky-400 gap-2 mt-[35px] ml-[35px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 22 22" fill="none">
                        <path d="M14.5348 7.47163V0.703369H7.61915V7.47163H0.70343V14.3873H7.61915V21.1556H14.5348V14.3873H21.4506V7.47163H14.5348ZM14.5348 14.2399H7.61915V7.62013H14.5348V14.2399Z" fill="white" />
                    </svg>
                    <div className="w-[41px] text-white text-2xl mb-[18px] h-[14px]">Geld</div>
                </div>

                <div className="mt-[82px] text-lg text-slate-400 ml-[40px]">Cash</div>
                <div className="ml-[40px] text-white">{cash}
                    100'000'000
                </div>

            </div>
            {/* Second */}
            <div className="w-[400px] rounded-2xl h-[250px] bg-white">
                <div className="flex items-center gap-[10px] border-b-slate-400 border-b-2 mt-2 w-full">
                    <div className="text-2xl text-green-400 ml-[25px]">&#9784;</div>
                    <div className="text-base font-bold text-black">Your Income</div>
                </div>

                <div className="mt-[45px] ml-[25px]">
                    <div className="text-3xl font-bold text-black">{income}100'000'00</div>
                    <div className="mt-[15px]">Your Income Amount</div>
                </div>
                <div className="mt-[35px] gap-[15px] ml-[25px] flex">
                    <div className="bg-green-400 rounded-full w-6 text-white h-6 justify-center flex">&#8593;</div>
                    <div>{percent} 92% from last month</div>
                </div>
            </div>
            {/* Third */}
            <div className="w-[400px] rounded-2xl h-[250px] bg-white">
                <div className="flex items-center gap-[10px] border-b-slate-400 border-b-2 mt-2 w-full">
                    <div className="text-2xl text-green-400 ml-[25px]">&#9883;</div>
                    <div className="text-base font-bold text-black">Total Expense</div>
                </div>

                <div className="mt-[45px] ml-[25px]">
                    <div className="text-3xl font-bold text-black">{totalExpense}100'000'00</div>
                    <div className="mt-[15px]">Your Expense Amount</div>
                </div>
                <div className="mt-[35px] gap-[15px] ml-[25px] flex">
                    <div className="bg-green-400 rounded-full w-6 text-white h-6 justify-center flex">&#8593;</div>
                    <div>{percentExp} 92% from last month</div>
                </div>
            </div>

        </div>
    )
}