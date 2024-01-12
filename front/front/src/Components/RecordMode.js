'use client'
import { useState } from "react";

export default function RecordMode() {
    const [recordsData, setRecordsData] = useState([])
    const [nameCategory, setNameCategory] = useState('')
    const [selectedEmoji, setSelectedEmoji] = useState('')
    const [minNum, setMinNum] = useState(0)
    const [isIncome, setIsIncome] = useState(false)
    const [isExpense, setIsExpense] = useState(false)
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    const smilingEmoji = '\u{1F603}';
    const earth = '\u{1F30D}';
    const catFace = '\u{1F431}';
    const rocket = '\u{1F680}';
    const party = '\u{1F389}';
    const flower = '\u{1F33A}';

    const renderRecord = (selectedEmoji, nameCategory) => {
        return (
            <div key={visualRecors}>
                <div>{selectedEmoji}</div>
                <div>{nameCategory}</div>
            </div>
        )
    }


    const AddCategory = () => {
        if (selectedEmoji && nameCategory) {
            console.log(selectedEmoji, nameCategory);
            const newRecord = renderRecord(selectedEmoji, nameCategory)
            setRecordsData([...recordsData, newRecord])

            console.log('this is setRecords', newRecord);

            document.getElementById('my_modal_4').close();

            setSelectedEmoji('');
            setNameCategory('');
        }
    }

    return (
        <div className="flex bg-white mt-5 rounded p-3 ml-[50px] border-solid border-red-700 w-[250px] flex-col">

            <div className="text-2xl text-black font-bold mb-[15px]">Records</div>




            {/* Record Modal */}
            <button className="btn text-white text-base" onClick={() => document.getElementById('my_modal_5').showModal()}>
                <div className="text-lg text-white">
                    &#43;
                </div>
                Add
            </button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">

                <div className="rounded  p-2 w-6/12 bg-white">
                    <div className="justify-between justify-center border-b-slate-400 border-b-2 flex items-center justify-between">
                        <div className="text-xl text-lg text-black font-bold">Add Record</div>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="w-8 h-8 rounded-full flex justify-center mb-5 items-center bg-blue-500">&#10005;</button>
                            </form>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="mt-5 w-[396px] flex flex-col">
                            <div className="flex gap-3 bg-slate-200 rounded-3xl w-fit">
                                {isExpense ? (
                                    <button className="w-[172px] rounded-3xl text-black h-[42px] p-2 bg-blue-700">Expense</button>
                                ) : (
                                    <button className="w-[172px] rounded-3xl text-slate-200 h-[42px] p-2 bg-sky-700">Expense</button>
                                )}

                                {isIncome ? (
                                    <button className="w-[172px] rounded-3xl text-black h-[42px] p-2 bg-blue-700">Income</button>
                                ) : (
                                    <button className="w-[172px] rounded-3xl text-black h-[42px] p-2 bg-slate-200">Income</button>
                                )}
                            </div>

                            <div>
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
                                            className="bg-slate-200 w-[150px]"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                        ></input>
                                    </div>
                                    <div>
                                        <div className="font-base font-bold text-black">Time</div>
                                        <input
                                            className="bg-slate-200 w-[150px]"
                                            value={time}
                                            onChange={(e) => setTime(e.target.value)}
                                        ></input>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="w-[200px] mt-3">
                            <div>
                                <div className="text-black font-bold">Payee</div>
                                <input
                                    className="bg-slate-200 rounded"
                                    placeholder="Write here"></input>
                            </div>
                            <div className="mt-3">
                                <div className="text-black font-bold">Note</div>
                                <input
                                    className="bg-slate-200 h-[210px] flex rounded"
                                    placeholder="Write here"></input>
                            </div>

                        </div>
                    </div>
                    <button>Add Record</button>

                </div>
            </dialog>
            {/* Record Modal */}









            <input
                className="p-2 bg-slate-300 rounded mt-3"
                placeholder="Search" />

            {/* Types */}
            <div className="flex flex-col gap-5">
                <div className="font-bold text-base text-black mt-3">Types</div>

                <div className="flex flex-col">

                    <div className="flex gap-3 items-center">
                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <input type="checkbox" className="checkbox rounded-full border-slate-400 checkbox-warning" />
                            </label>
                        </div>
                        <div>All</div>
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <input type="checkbox" className="checkbox rounded-full border-slate-400  checkbox-warning" />
                            </label>
                        </div>
                        <div>Income</div>
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <input type="checkbox" className="checkbox rounded-full border-slate-400  checkbox-warning" />
                            </label>
                        </div>
                        <div>Expense</div>
                    </div>


                </div>
            </div>

            {/* Category */}
            <div>
                <div className="flex justify-between">
                    <div className="text-black text-base font-bold">Category</div>
                    <button className="btn btn-xs">Clear</button>
                </div>
                {/* Rendering Records According to user Input */}

                <div id="visualRecors">
                    {recordsData.map((record, index) => {
                        return (
                            <div className="flex border-solid-2 bg-slate-500 p-2 rounded mt-3 mb-3 w-full gap-4" key={index}>
                                <div>{record.props.children[0]}</div>
                                <div className="text-black">{record.props.children[1]}</div>
                            </div>
                        )
                    })}
                </div>


                {/* Model */}
                <button className="flex gap-3 mt-4 mb-4 text-black items-center" onClick={() => document.getElementById('my_modal_4').showModal()}>
                    <div className="text-3xl text-blue-400">
                        &#43;
                    </div>
                    Add Category
                </button>

                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">

                        <div className="justify-center border-b-slate-400 border-b-2 flex items-center justify-between">
                            <div className="text-xl font-bold">Add Category</div>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="w-8 h-8 rounded-full flex justify-center mb-5 items-center bg-blue-500">&#10005;</button>
                                </form>
                            </div>
                        </div>

                        <div className="w-full justify-between mt-5 flex">
                            <div className="w-[84px] h-[34px]">
                                <select
                                    value={selectedEmoji}
                                    onChange={(e) => setSelectedEmoji(e.target.value)}
                                    className="p-2 rounded-full flex">
                                    <option>&#10070;</option>
                                    <option value={smilingEmoji}>{smilingEmoji}</option>
                                    <option value={earth}>{earth}</option>
                                    <option value={catFace}>{catFace}</option>
                                    <option value={rocket}>{rocket}</option>
                                    <option value={party}>{party}</option>
                                    <option value={flower}>{flower}</option>
                                </select>
                            </div>
                            <div className="p-2">
                                <input className="p-3 rounded"
                                    placeholder="Name ?"
                                    value={nameCategory}
                                    onChange={(e) => setNameCategory(e.target.value)}
                                ></input>
                            </div>
                        </div>

                        <button
                            onClick={AddCategory}
                            className="flex items-center model-action btn w-full mt-[25px] bg-green-400 rounded p-3">
                            <div>&#43;</div>
                            Add Category
                        </button>
                    </div>
                </dialog>
                <div>
                    <div className="text-base font-bold text-black">Amount Rage</div>
                    <div className="flex gap-4">
                        <div className="w-full text-lg rounded h-10 flex justify-center items-center p-2 border-solid-2 mt-5 mb-5 bg-slate-500">
                            {minNum}
                        </div>
                    </div>
                    <input
                        className="w-full"
                        type="range"
                        value={minNum}
                        min={0}
                        max={100}
                        onChange={(e) => setMinNum(e.target.value)} />
                </div>


            </div>

        </div>
    )
}