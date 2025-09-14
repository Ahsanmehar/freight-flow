// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

export default function Tab2(){
  const handlesubmit=(e)=>{
    e.preventDefault()
  }
    return (
             <motion.div  initial={{ opacity:0}}
  animate={{ opacity:1}}
  transition={{duration:1,ease:"easeIn"}} className="w-full mt-10  flex flex-wrap items-start  gap-3">
        <div className="inset-shadow-sm inset-shadow-[#1d4ed8] w-full md:w-3xl rounded-md px-4 py-4 flex flex-col items-start space-y-2">
          <h1 className="text-xl font-stretch-50% text-white">Your Support Tickets</h1>
          <div className="mt-4 px-3 py-3 border border-slate-300 rounded-md w-full">
              <div className="flex items-center justify-between w-full">
             <span className="flex items-center gap-2">
              <h1 className="text-xl font-stretch-50% text-white">TKT-001</h1><span className="flex border border-gray-400 items-center justify-center gap-2 text-red-600 text-xs font-medium bg-red-200 p-1 tracking-wide rounded-md">open</span><label className="text-red-600">high priority</label>
            </span>
           <button className="px-2 py-1 font-medium text-white hover:border-[#007bff]  border rounded-lg transition-all ">View Details</button>


          </div>
           
            <p className="mt-2 font-normal text-lg text-white">Payment not received for Load LD-002</p>
            <h1 className="font-light text-base text-gray-400">Created: 12/7/2024 • Assigned to: Sarah Chen</h1>
          </div>
           <div className="mt-4 px-3 py-3 border border-slate-300 rounded-md w-full">
              <div className="flex items-center justify-between w-full">
             <span className="flex items-center gap-2">
              <h1 className="text-xl font-stretch-50%  text-white">TKT-003</h1>  <span className="flex border border-gray-400 items-center gap-2 text-yellow-600 text-xs font-medium bg-yellow-200 p-1 tracking-wide rounded-md">
             in progress

            </span><label className="text-yellow-600">medium priority</label>
            </span>
           <button className="px-2 py-1 font-medium text-white hover:border-[#007bff]  border rounded-lg transition-all ">View Details</button>


          </div>
           
            <p className="mt-2 font-normal text-lg text-white">Unable to upload insurance certificate</p>
            <h1 className="font-light text-base text-gray-400">Created: 12/6/2024 • Assigned to: Mike Johnson</h1>
          </div>
           <div className="mt-4 px-3 py-3 border border-slate-300 rounded-md w-full">
              <div className="flex items-center justify-between w-full">
             <span className="flex items-center gap-2">
              <h1 className="text-xl font-stretch-50%  text-white">TKT-003</h1> <span className="flex border border-gray-400 items-center gap-2 text-green-600 text-xs font-medium bg-green-200 p-1   tracking-wide rounded-md">
              resolved
            </span><label className="text-green-600">low priority</label>
            </span>
           <button className="px-2 py-1 font-medium text-white hover:border-[#007bff]  border rounded-lg transition-all ">View Details</button>


          </div>
           
            <p className="mt-2 font-normal text-lg text-white">Question about rate calculation</p>
            <h1 className="font-light text-base text-gray-400">Created: 12/5/2024 • Assigned to: Lisa Wang</h1>
          </div>
        </div>
        <div className="inset-shadow-sm inset-shadow-[#1d4ed8] border-white rounded-md px-3 py-2  w-full md:w-md">
          <h1 className="text-xl font-stretch-50% text-white">Create New Ticket</h1>
<form className="mt-5 space-y-3" onChange={handlesubmit}>
    <div>
            <label className='text-sm text-white font-medium mb-2 block'>Subject</label>
            <input required type='text' placeholder='Enter Subject'
              className="w-full placeholder:text-white py-2.5 px-4 text-white  border border-gray-200 rounded-md text-sm  transition-all" />
          </div>
          <div>
            <label className='text-sm text-white font-medium mb-2 block'>Category</label>
           {/* <Select>
  <SelectTrigger className={`text-white w-full`}>
    <SelectValue placeholder="Select category" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="billing" >Billing</SelectItem>
    <SelectItem value="technical">Technical</SelectItem>
    <SelectItem value="general">General</SelectItem>
    <SelectItem value="compliance">Compliance</SelectItem>
  </SelectContent>
</Select> */}
          </div>
          <div>
            <label className='text-sm text-white font-medium mb-2 block'>Priority</label>
         {/* <Select>
  <SelectTrigger className={`text-white w-full`}>
    <SelectValue placeholder="Select priority" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Low">Low</SelectItem>
    <SelectItem value="Medium">Medium</SelectItem>
    <SelectItem value="High">High</SelectItem>
  </SelectContent>
</Select> */}
          </div>
            <div>
            <label  className='text-sm text-white font-medium mb-2 block'>Subject</label>
    <textarea required placeholder="Describe your issue in detail"  className="w-full py-2.5 px-4 text-white placeholder:text-white border border-gray-200 rounded-md text-sm  transition-all" >

    </textarea>
    <button type="submit" className="hover-underline mt-4 inset-shadow-sm inset-shadow-[#1d4ed8] w-full text-white px-2 py-2 rounded-md">Submit</button>
          </div>
          
</form>
        </div>
      </motion.div>
    )
}