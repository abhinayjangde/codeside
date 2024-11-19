"use client";
import { Calendar } from "./ui/calendar"
import { useState } from "react"
const Calender = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border bg-white shadow-md dark:bg-dark"
        />
    )
}

export default Calender