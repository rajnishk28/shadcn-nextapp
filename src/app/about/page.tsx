"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from "sonner"



const Page = () => {
  const [data, setData] = useState("");
  const [viewData, setViewData] = useState("");
  const handleClick = () => {
    setViewData(data);
    toast(viewData);
  }
  return (
    <div>
      <div>This is about page</div>
      <div>

        <Input placeholder='enter your name' onChange={(e) => setData(e.target.value)} />
        <Button variant={"default"} size={"lg"} onClick={handleClick}>clcik </Button>
      </div>
    </div>
  )
}

export default Page