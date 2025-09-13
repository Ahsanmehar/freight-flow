import { Phone, Mail, MessageCircle, CircleQuestionMark, Search, Activity, DollarSign, FileText, Truck, Settings, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
export default function Tab4(){
    return (
            <motion.div initial={{ opacity:0}}
  animate={{ opacity:1}}
  transition={{duration:1,ease:"easeIn"}} className="mt-10 w-full space-y-3 ">
        <div className="mb-3 inset-shadow-sm inset-shadow-[#1d4ed8] text-white rounded-md flex items-center gap-2 px-2 py-2">
          <Activity />
          <h1 className=" font-normal text-lg rounded">All systems are currently operational. Last updated: 9/11/2025, 8:51:55 PM</h1>
        </div>
        <div className="px-4 py-4  inset-shadow-sm inset-shadow-[#1d4ed8] rounded-md">
          <h1 className="text-2xl font-stretch-50% text-white">System Status</h1>
          <div className="mt-4 flex items-center justify-between border border-gray-300 px-4 py-4 rounded-xl ">
            <div className="flex items-center justify-center gap-4">
              <span className="bg-green-500 rounded-full w-4 h-4" />
              <span className="flex flex-col items-start ">
                <h1 className="font-normal text-lg text-white">Load Matching System</h1>
                <h2 className="font-light text-base text-gray-300">Uptime: 99.9%</h2>
              </span>

            </div>
          <span className="flex border border-gray-400 items-center gap-2 text-green-600 text-xs font-medium bg-green-200 p-1   tracking-wide rounded-md">
              operational
            </span>
          </div>
          <div className="mt-4 flex items-center justify-between border border-gray-300 px-4 py-4 rounded-xl ">
            <div className="flex items-center justify-center gap-4">
              <span className="bg-green-500 rounded-full w-4 h-4" />
              <span className="flex flex-col items-start ">
                <h1 className="font-normal text-lg text-white">Payment Processing</h1>
                <h2 className="font-light text-base text-gray-300">Uptime: 99.8%</h2>
              </span>

            </div>
              <span className="flex border border-gray-400 items-center gap-2 text-green-600 text-xs font-medium bg-green-200 p-1   tracking-wide rounded-md">
              operational
            </span>
          </div>
          <div className="mt-4 flex items-center justify-between border border-gray-300 px-4 py-4 rounded-xl ">
            <div className="flex items-center justify-center gap-4">
              <span className="bg-yellow-500 rounded-full w-4 h-4" />
              <span className="flex flex-col items-start ">
                <h1 className="font-normal text-lg text-white">Document Upload</h1>
                <h2 className="font-light text-base text-gray-300">Uptime: 97.2%</h2>
              </span>

            </div>
       <span className="flex border border-gray-400 items-center gap-2 text-yellow-600 text-xs font-medium bg-yellow-200 p-1 tracking-wide rounded-md">
              degraded

            </span>
          </div>
          <div className="mt-4 flex items-center justify-between border border-gray-300 px-4 py-4 rounded-xl ">
            <div className="flex items-center justify-center gap-4">
              <span className="bg-green-500 rounded-full w-4 h-4" />
              <span className="flex flex-col items-start ">
                <h1 className="font-normal text-lg text-white">Mobile API</h1>
                <h2 className="font-light text-base text-gray-300">Uptime: 99.7%</h2>
              </span>

            </div>
            <span className="flex border border-gray-400 items-center gap-2 text-green-600 text-xs font-medium bg-green-200 p-1   tracking-wide rounded-md">
              operational
            </span>
          </div>
          <div className="mt-4 flex items-center justify-between border border-gray-300 px-4 py-4 rounded-xl ">
            <div className="flex items-center justify-center gap-4">
              <span className="bg-green-500 rounded-full w-4 h-4" />
              <span className="flex flex-col items-start ">
                <h1 className="font-normal text-lg text-white">Notifications</h1>
                <h2 className="font-light text-base text-gray-300">Uptime: 99.5%</h2>
              </span>

            </div>
              <span className="flex border border-gray-400 items-center gap-2 text-green-600 text-xs font-medium bg-green-200 p-1   tracking-wide rounded-md">
              operational
            </span>
          </div>
        </div>
      </motion.div>
    )
}