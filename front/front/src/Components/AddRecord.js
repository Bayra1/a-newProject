import { useState } from "react";
export default function AddRecords() {
    const [isIncome, setIsIncome] = useState(false)
    const [isExpense, setIsExpense] = useState(false)
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    return (
        <div className="w-full">
            <button className="btn w-full border-none h-[32px] bg-blue-600 text-white text-base" onClick={() => document.getElementById('my_modal_5').showModal()}>
                <div className="text-lg text-white">
                    &#43;
                </div>
                Add
            </button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">

                <div className="rounded w-fit p-2 w-6/12 bg-white">
                    <div className="justify-between justify-center border-b-slate-400 border-b-2 flex items-center justify-between">
                        <div className="text-xl text-lg text-black font-bold">Add Record</div>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="w-8 h-8 rounded-full flex justify-center mb-5 items-center">&#10005;</button>
                            </form>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="mt-5 w-[396px] flex flex-col">
                            <div className="flex gap-3 bg-slate-200 rounded-3xl w-fit">
                                <button onClick={() => {
                                    setIsIncome(true);
                                    setIsExpense(false)
                                }}
                                    className={`w-[172px] rounded-3xl ${isIncome ? 'text-white' : 'text-black'} h-[42px] p-2 ${isIncome ? 'bg-blue-600' : 'bg-slate-200'}`}
                                >
                                    Income
                                </button>
                                <button onClick={() => {
                                    setIsExpense(true)
                                    setIsIncome(false);
                                }}
                                    className={`w-[172px] rounded-3xl ${isExpense ? 'text-white' : 'text-black'} h-[42px] p-2 ${isExpense ? 'bg-green-600' : 'bg-slate-200'}`}
                                >
                                    Expense
                                </button>
                            </div>

                            <div className="flex flex-col text-start">
                                <div className="p-3">
                                    <div className="text-base text-black font-bold">Amount</div>
                                    <input
                                        className="rounded p-4 text-black bg-slate-200 mt-3 w-[348px] h-[25px]"
                                        placeholder="₮ 000.0">
                                    </input>
                                </div>

                                <div className="p-3">
                                    <div className="text-base text-black font-bold">Category</div>
                                    <input
                                        className="rounded p-4 bg-slate-200 mt-3 text-black w-[348px] h-[25px]"
                                        placeholder="Choose">
                                    </input>
                                </div>

                                <div className="flex gap-12 ml-3">
                                    <div>
                                        <div className="font-base font-bold text-black">Date</div>
                                        <input
                                            placeholder="Date"
                                            className="bg-slate-200 rounded p-3 w-[150px]"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                        ></input>
                                    </div>
                                    <div>
                                        <div className="font-base font-bold text-black">Time</div>
                                        <input
                                            placeholder="Date"
                                            className="bg-slate-200 rounded p-3 w-[150px]"
                                            value={time}
                                            onChange={(e) => setTime(e.target.value)}
                                        ></input>
                                    </div>
                                </div>
                                <button
                                   className={`bg-blue-600 btn w-[350px] mt-2 ml-2 text-white border-none ${isIncome ? 'bg-blue-600' : 'bg-blue-600'} ${isExpense ? 'bg-green-600' : 'bg-blue-600'}`}>Add Record
                                </button>
                            </div>
                        </div>
                        <div className="w-[200px] mt-3">
                            <div>
                                <div className="text-black">Payee</div>
                                <input
                                    className="bg-slate-200 rounded"
                                    placeholder="Write here"></input>
                            </div>
                            <div className="mt-3">
                                <div className="text-black">Note</div>
                                <textarea className="bg-slate-200 text-black border-solid-2" placeholder="Write Here"></textarea>
                            </div>

                        </div>

                    </div>

                </div>
            </dialog>
        </div>
    )
}