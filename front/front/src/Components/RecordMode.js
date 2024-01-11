'use client'
import { data } from "autoprefixer";
import { useState } from "react";

export default function RecordMode() {
    const recordsData = []
    const [selectedEmoji, setSelectedEmoji] = useState('')

    const renderRecord = (emoji, userInput) => {
        return (
            <div>
                <div>{emoji}</div>
                <div>{userInput}</div>
            </div>
        )
    }

    const smilingEmoji = '\u{1F603}';
    const earth = '\u{1F30D}';
    const catFace = '\u{1F431}';
    const rocket = '\u{1F680}';
    const party = '\u{1F389}';
    const flower = '\u{1F33A}';

   const AddCategory = () => {

   }


    return (
        <div className="flex bg-white p-3 ml-[50px] border-solid border-red-700 w-[250px] flex-col">

            <div className="text-2xl text-black font-bold mb-[15px]">Records</div>
            <button className="btn">
                <div className="text-2xl text-green-400">&#43;</div>
                Add
            </button>
            <input
                className="p-2 rounded mt-3"
                placeholder="Search" />

            {/* Types */}
            <div className="flex flex-col gap-5">
                <div className="font-bold text-base text-black mt-3">Types</div>
                <div className="flex flex-col">

                    <div className="flex gap-3 items-center">
                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <input type="checkbox" className="checkbox checkbox-warning" />
                            </label>
                        </div>
                        <div>All</div>
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <input type="checkbox" className="checkbox checkbox-warning" />
                            </label>
                        </div>
                        <div>Income</div>
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <input type="checkbox" className="checkbox checkbox-warning" />
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
                <div id="unique"></div>

                {/* Model */}
                <button className="flex gap-3 items-center" onClick={() => document.getElementById('my_modal_4').showModal()}>
                    <div className="text-2xl text-blue-400">
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
                               <input className="p-3 rounded" placeholder="Name ?"
                               ></input>
                            </div>
                        </div>

                        <button
                            onClick={AddCategory}
                            className="flex items-center btn w-full mt-5 bg-green-400 rounded p-3">
                            <div>&#43;</div>
                            Add Category
                        </button>

                    </div>
                </dialog>


            </div>

        </div>
    )
}