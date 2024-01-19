import { useState, useEffect } from "react";
import axios from "axios";

const backEnd = "http://localhost:8003/categories"

export default function AppendCategory() {
    const [recordsData, setRecordsData] = useState([])
    const [selectedEmoji, setSelectedEmoji] = useState('')
    const [name, setname] = useState('')
    const [minNum, setMinNum] = useState(0)
    const smilingEmoji = '\u{1F603}';
    const earth = '\u{1F30D}';
    const catFace = '\u{1F431}';
    const rocket = '\u{1F680}';
    const party = '\u{1F389}';
    const flower = '\u{1F33A}';
    const userData = JSON.parse(localStorage.getItem('user'))
    console.log(userData);

    useEffect(() => {
        const storedRecordsData = JSON.parse(localStorage.getItem("recordsData"));
        if (storedRecordsData) {
            setRecordsData(storedRecordsData);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("recordsData", JSON.stringify(recordsData));
    }, [recordsData]);

    const renderRecord = (selectedEmoji, name) => {
        return (
            <div key={visualRecors}>
                <div>{selectedEmoji}</div>
                <div className="text-black">{name}</div>
            </div>
        );
    };

    const AddCategory = async () => {
        try {
          const trackCategory = await axios.post(backEnd, {
            name: name,
            user_id: userData.id,
          });
    
          if (selectedEmoji && name) {
            const newRecord = renderRecord(selectedEmoji, name);
            setRecordsData([...recordsData, newRecord]);
    
            document.getElementById('my_modal_4').close();
    
            setSelectedEmoji('');
            setname('');
          }
        } catch (error) {
          console.log('error for adding category', error);
        }
      };
    

    return (
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
            <button className="flex transition rounded duration-150 ease-in-out p-2 hover:bg-blue-600 gap-3 mt-4 mb-4 text-black items-center" onClick={() => document.getElementById('my_modal_4').showModal()}>
                <div className="text-3xl text-blue-400">
                    &#43;
                </div>
                Add Category
            </button>

            <dialog id="my_modal_4" className="modal">
                <div className="modal-box bg-white max-w-5xl">

                    <div className="justify-center border-b-slate-400 border-b-2 flex items-center justify-between">
                        <div className="text-xl text-black font-bold">Add Category</div>
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
                                className="p-2 bg-slate-200 rounded-full flex">
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
                            <input className="p-3 bg-slate-200 rounded"
                                placeholder="Name ?"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <button
                        onClick={AddCategory}
                        className="flex items-center text-white model-action btn w-full mt-[25px] bg-green-400 rounded p-3">
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

    )
}

























