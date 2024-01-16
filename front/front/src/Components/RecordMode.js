'use client'
import React, { useState } from "react";
import Types from "./Types";
import AppendCategory from "./AppendCategory";

export default function RecordMode() {
    const [data, setData] = useState([]);
    const [isIncome, setIsIncome] = useState(false);
    const [isExpense, setIsExpense] = useState(false);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [note, setNote] = useState('');
    const [amount, setAmount] = useState();
    const [category, setCategory] = useState('');

    const visualData = (note, amount, category) => {
        return (
            <div key={category}>
                <div>{amount}</div>
                <div>{category}</div>
                <div>{note}</div>
            </div>
        );
    };

    const addRecord = () => {
        if (note && amount && category) {
            const newData = visualData(note, amount, category);
            setData([...data, newData]);
            console.log('this is new data', data);
            setAmount(0);
            setCategory('');
            setNote('');
        }
    };

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
                                                setAmount();
                                                setCategory('');
                                                setNote('');
                                                setDate('');
                                                setTime('');
                                                document.getElementById('my_modal_5').close();
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
                                            onClick={() => {
                                                setIsIncome(true);
                                                setIsExpense(false);
                                            }}
                                            className={`w-[172px] rounded-3xl ${isIncome ? 'text-white' : 'text-black'} h-[42px] p-2 ${isIncome ? 'bg-blue-600' : 'bg-slate-200'}`}
                                        >
                                            Income
                                        </button>
                                        <button
                                            onClick={() => {
                                                setIsExpense(true);
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
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                                className="rounded p-4 text-black bg-slate-200 mt-3 w-[348px] h-[25px]"
                                                placeholder="₮ 000.0"
                                            />
                                        </div>
                                        <div className="p-3">
                                            <div className="text-base text-black font-bold">Category</div>
                                            <input
                                                value={category}
                                                onChange={(e) => setCategory(e.target.value)}
                                                className="rounded p-4 bg-slate-200 mt-3 text-black w-[348px] h-[25px]"
                                                placeholder="Choose"
                                            />
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
            <div className="visualCategory">
                {data.map((element, i) => (
                    <div key={i}>
                        <div>{element.amount}</div>
                        <div>{element.category}</div>
                        <div>{element.note}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
