import { CalendarClock } from 'lucide-react';
import { BATCHES } from '../data/timetableData.js';

export default function Header({ selectedBatchId, setSelectedBatchId}) {
    return (
        <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-900/90 px-4 py-3 backdrop-blur-md">
            <div className="mx-auto max-w-7xl flex items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-2.5 shadow-lg">
                        <CalendarClock className="h-6 w-6 text-white" />
                    </div>

                    <div  className="flex flex-col">
                         <div className="flex items-center gap-2">
                            <h1 className="text-xl font-bold text-white">
                                Smart CSE Timetable
                            </h1>   
                            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-400">
                                CU JAMMU
                            </span>
                         </div>
                        <p className="text-sm text-slate-400">
                            Department of Computer Science & Engineering
                        </p>   
                    </div>
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-3 py-2">
                    <label htmlFor="batch" className="text-xs font-medium text-slate-400">
                        Batch :
                    </label>

                    <select 
                        id="batch"
                        value = {selectedBatchId}
                        onChange= {(e) => setSelectedBatchId(e.target.value)}
                        className="cursor-pointer bg-transparent text-sm font-semibold text-slate-100 outline-none"
                    >
                        {BATCHES.map((batch) => (
                            <option key={batch.id} value={batch.id} className="bg-slate-900 text-slate-200">
                                {batch.name} ({batch.semester})
                            </option>
                        ))}
                    </select>
                </div>
             </div>

        </header>
    )
}

