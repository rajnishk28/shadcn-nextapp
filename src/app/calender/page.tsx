"use client"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

const Page = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
     const [dropdown, setDropdown] =useState<React.ComponentProps<typeof Calendar>["captionLayout"]>(
      "dropdown"
    )
    return (
      

            <Calendar
                mode="single"
                selected={date}
                defaultMonth={date}
                captionLayout={dropdown}
                onSelect={setDate}
                className="rounded-lg border w-[40vw] m-auto"
            />
        
    )
}

export default Page;