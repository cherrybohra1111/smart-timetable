import { CalendarDays } from 'lucide-react'

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
        <CalendarDays className="mx-auto mb-4 h-10 w-10 text-indigo-600" />
        <h1 className="text-3xl font-bold text-indigo-600">
          Smart CSE Timetable
        </h1>
        <p className="mt-3 text-slate-600">
          Tailwind CSS is working!
        </p>
      </div>
    </div>
  )
}

export default App