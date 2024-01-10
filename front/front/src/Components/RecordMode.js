'use client'
export default function RecordMode() {
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


                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="flex items-center mt-3 gap-3" onClick={() => document.getElementById('my_modal_1').showModal()}>
                    <div className="text-2xl text-green-400">
                        &#43;
                    </div>
                    Add Category
                </button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box bg-slate-800">

                        <div className="flex w-full justify-between gap-3">
                            <h3 className="font-bold text-lg">Add Category</h3>
                            <form method="dialog modal-action">
                                <button className="w-7 h-7 bg-white rounded-full">&#215;</button>
                            </form>
                        </div>

                        {/* Content of Model */}
                       

                    </div>
                </dialog>





                {/* <button className="flex gap-2 mt-3 items-center">
                    <div className="text-2xl text-green-400">
                        &#43;
                    </div>
                    Add Category
                </button> */}


            </div>

        </div>
    )
}