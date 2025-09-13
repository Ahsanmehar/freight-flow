import { motion } from "framer-motion"
import {UserRoundCheck, TriangleAlert, Map, Shield, Eye, DollarSign, Filter, Users, Ellipsis, Package, Phone, Mail, MessageCircle, CircleQuestionMark, Search, Activity, FileText, Truck, Settings, Send } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,

} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
export default function Tab2(){
    return(
           <motion.div initial={{ opacity: 0, y1: -40 }}
        animate={{ opacity: 1, y1: 40 }}
        transition={{ duration: 1, ease: "easeIn" }} id="list" className="px-5 py-5 inset-shadow-sm inset-shadow-[#1d4ed8] rounded-md  mt-10 space-y-10">
        <div className="flex items-start md:items-center flex-col md:flex-row justify-between w-full flex-wrap space-y-2">
          <h1 className="text-lg font-normal text-white">User Management</h1>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-self-start gap-4">
            <div className="flex px-4 py-3  rounded-md border-2 overflow-hidden md:w-md mx-auto">
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
                placeholder="Search Users... "
                className=" outline-none bg-transparent text-white text-sm placeholder:text-white"
              />
            </div>
            <Select>
              <SelectTrigger className={`text-white `}>
                <SelectValue placeholder="Select category" className="placeholder:text-white" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="billing">All Status</SelectItem>
                <SelectItem value="technical">Available</SelectItem>
                <SelectItem value="general">Dispatched</SelectItem>
                <SelectItem value="compliance">in Transit</SelectItem>
              </SelectContent>
            </Select>
          </div>

        </div>


        <div className="flex flex-wrap items-center justify-between px-3.5 py-3.5 border rounded-lg">
          <div className="flex items-start sm:items-center  gap-3 ">
            <span className="bg-[#007bff] text-lg text-white px-3 py-3 rounded-md">JS</span>
            <span className="flex flex-col items-start  space-y-1">
              <span className="flex items-start gap-2"><h1 className="text-white">John Smith</h1><span className="flex border border-gray-400 items-center gap-2 text-blue-600 text-xs font-medium bg-blue-200 p-1 tracking-wide rounded-md">Driver</span><span className="flex border border-gray-400 items-center gap-2 text-green-600 text-xs font-medium bg-green-200 p-1 tracking-wide rounded-md">active</span></span>

              <h1 className="text-xs sm:text-sm text-gray-300 md:text-base ">john@abctransport.com • ABC Transport</h1>
              <h1 className="text-xs sm:text-sm text-gray-300 md:text-base  ">Last login: 2024-12-07 15:30 • Loads: 142 • Rating: 4.9/5</h1>
            </span>
          </div>

          <div className="gap-2 mt-2 flex items-center flex-wrap">
            <Eye color="blue" size={30} />
            <FileText color="orange" size={30} />
           <span className="flex items-center gap-1 text-[green]">
              <UserRoundCheck  color="green" size={30} />
              Activate
            </span>

          </div>
        </div>


        <div className="flex flex-wrap items-center justify-between px-3.5 py-3.5 border rounded-lg">
          <div className="flex items-start sm:items-center gap-3 ">
            <span className="bg-[#007bff] text-lg text-white px-3 py-3 rounded-md">SJ</span>
            <span className="flex flex-col items-start  space-y-1">
              <span className="flex items-start gap-2"><h1 className="text-white">Sarah Johnson</h1><span className="flex border border-gray-400 items-center gap-2 text-green-600 text-xs font-medium bg-green-200 p-1 tracking-wide rounded-md">Carrier</span><span className="flex border border-gray-400 items-center gap-2 text-green-600 text-xs font-medium bg-green-200 p-1 tracking-wide rounded-md">active</span></span>

              <h1 className="text-sm text-gray-300 md:text-base ">sarah@xyzlogistics.com • XYZ Logistics</h1>
              <h1 className="text-sm text-gray-300 md:text-base ">Last login: 2024-12-07 12:45 • Loads: 89 • Rating: 4.7/5</h1>
            </span>
          </div>

          <div className="gap-2 mt-2 flex items-center flex-wrap">
            <Eye color="blue" size={30} />
            <FileText color="orange" size={30} />
            <span className="flex items-center gap-1 text-[green]">
              <UserRoundCheck  color="green" size={30} />
              Activate
            </span>

          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between px-3.5 py-3.5 border rounded-lg">
          <div className="flex items-start sm:items-center gap-3 ">
            <span className="bg-[#007bff] text-lg text-white px-3 py-3 rounded-md">MW</span>
            <span className="flex flex-col items-start space-y-1">
              <span className="flex items-start gap-2"><h1 className="text-white">Mike Wilson</h1><span className="flex border border-gray-400 items-center gap-2 text-purple-600 text-xs font-medium bg-purple-200 p-1 tracking-wide rounded-md">Admin</span><span className="flex border border-gray-400 items-center gap-2 text-green-600 text-xs font-medium bg-green-200 p-1 tracking-wide rounded-md">active</span></span>

              <h1 className="text-sm text-gray-300 md:text-base ">mike@fastfreight.com • Fast Freight Co</h1>
              <h1 className="text-sm text-gray-300 md:text-base ">Last login: 2024-12-07 16:15 • Loads: 0</h1>
            </span>
          </div>

          <div className="gap-2 mt-2 flex items-center flex-wrap">
            <Eye color="blue" size={30} />
            <FileText color="orange" size={30} />
            <span className="flex items-center gap-1 text-[green]">
              <UserRoundCheck  color="green" size={30} />
              Activate
            </span>

          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between px-3.5 py-3.5 border rounded-lg">
          <div className="flex items-start sm:items-center gap-3 ">
            <span className="bg-[#007bff] text-lg text-white px-3 py-3 rounded-md">LC</span>
            <span className="flex flex-col items-start  space-y-1">
              <span className="flex items-start gap-2"><h1 className="text-white">Lisa Chen</h1><span className="flex border border-gray-400 items-center gap-2 text-blue-600 text-xs font-medium bg-blue-200 p-1 tracking-wide rounded-md">Driver</span><span className="flex border border-gray-400 items-center gap-2 text-red-600 text-xs font-medium bg-red-200 p-1 tracking-wide rounded-md">suspended</span></span>

              <h1 className="text-sm text-gray-300 md:text-base ">lisa@primemovers.com • Prime Movers</h1>
              <h1 className="text-sm text-gray-300 md:text-base ">Last login: 2024-12-05 09:20 • Loads: 23 • Rating: 3.2/5</h1>
            </span>
          </div>

          <div className="gap-2 mt-2 flex items-center flex-wrap">
            <Eye color="blue" size={30} />
            <FileText color="orange" size={30} />
            <span className="flex items-center gap-1 text-[green]">
              <UserRoundCheck  color="green" size={30} />
              Activate
            </span>

          </div>
        </div>
      </motion.div>
    )
}