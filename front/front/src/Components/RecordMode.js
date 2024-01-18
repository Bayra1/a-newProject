'use client'
import React, { useState } from "react";
import Types from "./Types";
import AppendCategory from "./AppendCategory";
import axios from "axios";

const backEnd = "http://localhost:8003/transactions"

export default function RecordMode() {
    const [data, setData] = useState([]);
    const [userRecord, setUseRecord] = useState([])
    const [isIncome, setIsIncome] = useState(false);
    const [isExpense, setIsExpense] = useState(false);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [note, setNote] = useState('');
    const [amount, setAmount] = useState();
    const [category, setCategory] = useState('');

    const homeEmoji = '\u{1F3E0}';
    const giftEmoji = '\u{1F381}';
    const spoonAndForkEmoji = '\u{1F374}\u{1F944}';
    const drinkEmoji = '\u{1F379}';
    const cabEmoji = '\u{1F696}';
    const shoppingEmoji = '\u{1F6CD}';



    const visualData = (note, amount, category) => {
        return (
            <div key={category}>
                <div>{amount}</div>
                <div>{category}</div>
                <div>{note}</div>
            </div>
        );
    };

    const addRecord = async () => {
        try {
            const userRecord = await axios.post(backEnd, {
                amount: isIncome ? `+${amount}` : `-${amount}`,
                transaction_type: isIncome ? "INC" : "EXP",
                description: note,
                time: new Date().toLocaleDateString(),
                category,
                date
            });
            console.log(userRecord.data);
            if (amount !== '' && category !== '' && note !== '') {
                setData(prevData => {
                    const newData = visualData(note, amount, category);
                    return [...prevData, newData];
                });
                console.log('this is new data', data);
                setAmount();
                setCategory('');
                setNote('');
                document.getElementById('my_modal_5').close();
            } else {
                alert('it has to be formed');
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="flex bg-white mt-5 rounded p-3 ml-[50px] border-solid border-red-700">
            <div className="w-[350px] bg-slate-200 p-3 rounded mr-5">
                <div className="text-2xl text-black font-bold mb-[15px]">Records</div>
                <div className="w-full">
                    <button
                        className="btn w-full border-none h-[32px] bg-blue-600 text-white text-base"
                        onClick={() => document.getElementById('my_modal_5').showModal()}
                    >
                        <div className="text-lg text-white">&#43;</div>
                        Add
                    </button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="rounded w-fit p-2 w-6/12 bg-white">
                            <div className="justify-between justify-center border-b-slate-400 border-b-2 flex items-center justify-between">
                                <div className="text-xl text-lg text-black font-bold">Add Record</div>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button
                                            onClick={() => {
                                                setIsIncome(false);
                                                setIsExpense(false);

                                            }}
                                            className="w-8 h-8 rounded-full flex justify-center mb-5 items-center"
                                        >
                                            &#10005;
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mt-5 w-[396px] flex flex-col">
                                    <div className="flex gap-3 bg-slate-200 rounded-3xl w-fit">
                                        <button
                                            style={{ background: userRecord.transaction_type === "INC" ? '#0166FF' : '#F54949' }}
                                            onClick={() => {
                                                setIsIncome(true);
                                                setIsExpense(false);
                                            }}
                                            className="w-[172px] rounded-3xl"
                                        >
                                            Income
                                        </button>
                                        <button
                                            style={{ background: userRecord.transaction_type === "EXP" ? '#F54949' : '#0166F' }}
                                            onClick={() => {
                                                setIsExpense(true);
                                                setIsIncome(false);
                                            }}
                                            className="w-[172px] rounded-3xl"
                                        >
                                            Expense
                                        </button>
                                    </div>

                                    <div className="flex flex-col text-start">
                                        <div className="p-3">
                                            <div className="text-base text-black font-bold">Amount</div>
                                            <input
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                                className="rounded p-4 text-black bg-slate-200 mt-3 w-[348px] h-[25px]"
                                                placeholder="₮ 000.0"
                                            />
                                        </div>
                                        <div className="p-3">
                                            <div className="text-base text-black font-bold">Category</div>
                                            <select
                                                onChange={(e) => {
                                                    setCategory(e.target.value)
                                                }}
                                                value={category}
                                                className="select select-bordered bg-slate-200 w-full max-w-xs">
                                                <option disabled selected>Choose Your Category</option>
                                                <option value="Home">Home</option>
                                                <option value="Food">Food</option>
                                                <option value="Drink">Drink</option>
                                                <option value="Shopping">Shopping</option>
                                            </select>
                                        </div>
                                        <div className="flex gap-12 ml-3">
                                            <div>
                                                <div className="font-base font-bold text-black">Date</div>
                                                <input
                                                    placeholder="Date"
                                                    className="bg-slate-200 rounded p-3 w-[150px]"
                                                    value={date}
                                                    onChange={(e) => setDate(e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <div className="font-base font-bold text-black">Time</div>
                                                <input
                                                    placeholder="Time"
                                                    className="bg-slate-200 rounded p-3 w-[150px]"
                                                    value={time}
                                                    onChange={(e) => setTime(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <button
                                            onClick={addRecord}
                                            className={`bg-blue-600 btn w-[350px] mt-2 ml-2 text-white border-none ${isIncome ? 'bg-blue-600' : 'bg-blue-600'} ${isExpense ? 'bg-green-600' : 'bg-blue-600'}`}
                                        >
                                            Add Record
                                        </button>
                                    </div>
                                </div>
                                <div className="w-[200px] mt-3">
                                    <div>
                                        <div className="text-black">Payee</div>
                                        <input
                                            className="bg-slate-200 rounded"
                                            placeholder="Write here"
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <div className="text-black">Note</div>
                                        <textarea
                                            value={note}
                                            onChange={(e) => setNote(e.target.value)}
                                            className="bg-slate-200 text-black border-solid-2"
                                            placeholder="Write Here"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </dialog>
                </div>
                <input
                    className="p-2 bg-slate-300 w-full rounded mt-3"
                    placeholder="Search"
                />
                <Types />
                <AppendCategory />
            </div>
            <div className="visualCategory w-full">
                {data.map((element, i) => (
                    <div className="flex mb-2 justify-between p-3 w-full bg-blue-100" key={i}>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="checkbox" />
                            <div
                                className={`w-[35px] rounded-full h-[35px] flex items-center justify-center ${isIncome ? 'bg-blue-600' : 'text-black'} ${isExpense ? 'bg-green-600' : 'text-black'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M17.5 9.02724V16.2499C17.5 16.5814 17.3683 16.8994 17.1339 17.1338C16.8995 17.3682 16.5815 17.4999 16.25 17.4999H13.125C12.7935 17.4999 12.4755 17.3682 12.2411 17.1338C12.0067 16.8994 11.875 16.5814 11.875 16.2499V13.1249C11.875 12.9591 11.8092 12.8002 11.6919 12.6829C11.5747 12.5657 11.4158 12.4999 11.25 12.4999H8.75C8.58424 12.4999 8.42527 12.5657 8.30806 12.6829C8.19085 12.8002 8.125 12.9591 8.125 13.1249V16.2499C8.125 16.5814 7.9933 16.8994 7.75888 17.1338C7.52446 17.3682 7.20652 17.4999 6.875 17.4999H3.75C3.41848 17.4999 3.10054 17.3682 2.86612 17.1338C2.6317 16.8994 2.5 16.5814 2.5 16.2499V9.02724C2.49997 8.85424 2.53586 8.68311 2.60538 8.5247C2.67491 8.36628 2.77656 8.22402 2.90391 8.10692L9.15391 2.21005L9.1625 2.20145C9.39261 1.99218 9.69248 1.87622 10.0035 1.87622C10.3146 1.87622 10.6144 1.99218 10.8445 2.20145C10.8472 2.20451 10.8501 2.20738 10.8531 2.21005L17.1031 8.10692C17.2292 8.22464 17.3295 8.36718 17.3978 8.52556C17.4661 8.68395 17.5009 8.85475 17.5 9.02724Z" fill="white" />
                                </svg>
                            </div>
                            <div className="text-green-400">{element.props.children[1]}</div>
                            <div className="text-blue-400">{element.props.children[2]}</div>
                        </div>
                        <div className="text-red-400">{element.props.children[0]}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
