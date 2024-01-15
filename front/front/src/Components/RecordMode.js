'use client'
import Types from "./Types";
import AddRecords from "./AddRecord";
import AppendCategory from "./AppendCategory";
import Aside from "./Aside";

export default function RecordMode() {
    return (
        <div className="flex w-full bg-white mt-5 rounded p-3 ml-[50px] border-solid border-red-700 flex-col">
            <div className="w-[300px]">
                <div className="">
                    <div className="text-2xl text-black font-bold mb-[15px]">Records</div>
                    <AddRecords />
                    <input
                        className="p-2 bg-slate-300 w-full rounded mt-3"
                        placeholder="Search" />
                    <Types />
                    <AppendCategory />
                </div>
            </div>
            <div className="w-[894px]">
                <Aside />
            </div>
        </div>
    )
}