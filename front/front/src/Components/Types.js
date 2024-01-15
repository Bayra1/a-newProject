export default function Types() {
    const types = ['All', 'Income', 'Expense']
    return (
        <div>
            <div className="font-bold text-base text-black mt-3">Types</div>
            {
                types.map((element, i) => {
                    return (
                        <div key={i} className="flex gap-3 items-center">
                            <div className="form-control">
                                <label className="cursor-pointer label">
                                    <input type="checkbox" className="checkbox rounded-full border-slate-400 checkbox-warning" />
                                </label>
                            </div>
                            <div>{element}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}