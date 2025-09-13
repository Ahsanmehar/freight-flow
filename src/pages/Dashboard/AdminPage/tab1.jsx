import { motion } from "framer-motion"
import { data } from "../SupportPage/cardsdata"
import { TriangleAlert, Map, Shield, Eye, DollarSign, Filter, Users, Ellipsis, Package, Phone, Mail, MessageCircle, CircleQuestionMark, Search, Activity, FileText, Truck, Settings, Send } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,

} from "@/components/ui/select"
import { useState } from "react"
import { Switch } from "@/components/ui/switch"
export default function Tab1() {
  const [isopen, setisopen] = useState(false)
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeIn" }}>
      <div className="flex gap-3 items-center justify-between  flex-wrap w-full mt-6">
        <div className="flex flex-wrap items-center justify-self-start gap-4">
          <div className="flex px-4 py-3  rounded-md border-2 overflow-hidden max-w-md  md:mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              className="fill-gray-300 mr-3 rotate-90"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
            <input
              type="email"
              placeholder="Search Loads... "
              className=" outline-none bg-transparent text-gray-600 text-sm placeholder:text-white"
            />
          </div>
          <Select>
            <SelectTrigger className={`text-white`}>
              <SelectValue placeholder="Select category" className="placeholder:text-white" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="billing">All Status</SelectItem>
              <SelectItem value="technical">Available</SelectItem>
              <SelectItem value="general">Dispatched</SelectItem>
              <SelectItem value="compliance">in Transit</SelectItem>
            </SelectContent>
          </Select>
          <button className="flex  items-center gap-2 px-1 py-1 m-1 rounded-md border font-medium w-20  text-gray-300 hover:border-[#007bff]"><Filter />Filter</button>
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="mapview" className="text-white ">Map View</label>

          <Switch id="mapview" checked={isopen} onCheckedChange={setisopen} />

        </div>
      </div>

      {
        isopen ? (
          <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeIn" }} id="mapview" className="mt-10 px-6 py-6 h-[400px] inset-shadow-sm inset-shadow-[#1d4ed8] rounded-md flex flex-col items-center justify-center gap-3">
            <Map color="gray" size={50} />
            <h1 className="font-medium text-xl text-white">GPS Map View</h1>
            <p className="text-lg font-normal text-gray-300">Interactive map showing load locations and carrier positions</p>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeIn" }} className="px-5 py-5 inset-shadow-sm inset-shadow-[#1d4ed8] rounded-md  mt-10 space-y-10">
            <h1 className="text-lg font-normal text-white">Role Management</h1>
            <div className="flex flex-wrap items-center justify-between px-2.5 py-3.5 border rounded-lg gap-5">
              <div className="flex items-center gap-3 ">
                <Truck size={40} className="bg-[#007bff] rounded-md px-2 py-2" />
                <span className="flex flex-col items-start ">
                  <span className="flex items-start gap-2"><h1 className="text-white">LD-001</h1><span className="flex border border-gray-400 items-center gap-2 text-green-600 text-xs font-medium bg-green-200 p-1 tracking-wide rounded-md">Business Role</span></span>
                  <h1 className="text-sm text-gray-300 md:text-base ">Los Angeles, CA → Phoenix, AZ</h1>
                  <h1 className="text-sm text-gray-300 md:text-base ">Dry Van • 28,000 lbs • 374 miles</h1>
                </span>
              </div>
              <div className="flex items-start sm:items-end flex-col space-y-2">
                <h1 className="text-white font-medium">$1,200</h1>
                <h1 className="text-xs text-gray-300 md:text-base ">Dry Van • 28,000 lbs • 374 miles</h1>
              </div>
              <div className="gap-1 flex items-center ">
                <Eye color="blue" size={30} />
            <FileText color="orange" size={30} />
                <Ellipsis color="red" size={30} />
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between px-2.5 py-3.5 border rounded-lg gap-5">
              <div className="flex items-center gap-3 ">
                <Truck size={40} className="bg-[#007bff] rounded-md px-2 py-2" />
                <span className="flex flex-col items-start ">
                  <span className="flex items-start gap-2"><h1 className="text-white">LD-001</h1><span className="flex border border-gray-400 items-center gap-2 text-green-600 text-xs font-medium bg-green-200 p-1 tracking-wide rounded-md">Business Role</span></span>
                  <h1 className="text-sm text-gray-300 md:text-base ">Los Angeles, CA → Phoenix, AZ</h1>
                  <h1 className="text-sm text-gray-300 md:text-base ">Dry Van • 28,000 lbs • 374 miles</h1>
                </span>
              </div>
              <div className="flex items-start sm:items-end flex-col space-y-2">
                <h1 className="text-white font-medium">$1,200</h1>
                <h1 className="text-xs text-gray-300 md:text-base ">Dry Van • 28,000 lbs • 374 miles</h1>
              </div>
              <div className="gap-1 flex items-center ">
                   <Eye color="blue" size={30} />
            <FileText color="orange" size={30} />
                <Ellipsis color="red" size={30} />
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between px-2.5 py-3.5 border rounded-lg gap-5">
              <div className="flex items-center gap-3 ">
                <Truck size={40} className="bg-[#007bff] rounded-md px-2 py-2" />
                <span className="flex flex-col items-start ">
                  <span className="flex items-start gap-2"><h1 className="text-white">LD-001</h1><span className="flex border border-gray-400 items-center gap-2 text-green-600 text-xs font-medium bg-green-200 p-1 tracking-wide rounded-md">Business Role</span></span>
                  <h1 className="text-sm text-gray-300 md:text-base ">Los Angeles, CA → Phoenix, AZ</h1>
                  <h1 className="text-sm text-gray-300 md:text-base ">Dry Van • 28,000 lbs • 374 miles</h1>
                </span>
              </div>
              <div className="flex items-start sm:items-end flex-col space-y-2">
                <h1 className="text-white font-medium">$1,200</h1>
                <h1 className="text-xs text-gray-300 md:text-base ">Dry Van • 28,000 lbs • 374 miles</h1>
              </div>
              <div className="gap-1 flex items-center ">
             <Eye color="blue" size={30} />
            <FileText color="orange" size={30} />
                <Ellipsis color="red" size={30} />
              </div>
            </div>
          </motion.div>
        )
      }


    </motion.div>
  )
}