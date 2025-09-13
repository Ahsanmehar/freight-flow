import { Phone, Mail, MessageCircle, CircleQuestionMark, Search, Activity, DollarSign, FileText, Truck, Settings, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
export default function Tab1(){
    return (
           <motion.div  initial={{ opacity:0}}
  animate={{ opacity:1}}
  transition={{duration:1,ease:"easeIn"}} className="w-full mt-10 flex flex-wrap items-start justify-cente gap-3">
        <div className="inset-shadow-sm inset-shadow-[#1d4ed8] w-full md:w-3xl rounded-md px-3 py-3 flex flex-col items-start space-y-2">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-white">Live Chat</h1>
            <span className="flex items-center gap-2 text-green-600 text-sm font-medium bg-green-200 px-3 py-1.5 tracking-wide rounded-full">
              <span className="bg-green-500 rounded-full w-2 h-2" />
              Online
            </span>


          </div>
          <div className="h-[450px] px-2 py-2 w-full  overflow-auto overflow-y-visible rounded-md flex flex-col-reverse">
            <div className="mt-6 border border-gray-300 rounded-md px-3 py-2 bg-white w-full md:w-md space-y-1">
              <h1 className="font-medium text-lg">Sarah Chen</h1>
              <p className="font-normal text-lg">Hi! I see you're having trouble with a payment. Let me look into that for you.</p>
              <h1 className="font-light text-xs">2024-12-07 14:25</h1>
            </div>
            <div className="mt-6 border border-gray-300 rounded-md px-3 py-2 bg-[#000000] w-full md:w-md space-y-1 ml-auto">
              <h1 className="font-medium text-lg text-white">You</h1>
              <p className="font-normal text-lg text-white">Yes, I completed Load LD-002 yesterday but haven't received payment yet.</p>
              <h1 className="font-light text-xs text-white">2024-12-07 14:26</h1>
            </div>
            <div className="mt-6 border border-gray-300 rounded-md px-3 py-2 bg-white w-full md:w-md space-y-1">
              <h1 className="font-medium text-lg">Sarah Chen</h1>
              <p className="font-normal text-lg">I can see the load was marked as delivered yesterday at 3:15 PM. The payment is currently being processed and should appear in your account within 24 hours. Would you like me to expedite this?</p>
              <h1 className="font-light text-xs">2024-12-07 14:28
              </h1>
            </div>

          </div>
          <div className="w-full flex items-center">
            <Input placeholder="Type your message" className={`w-full placeholder:text-white`} />
            <button className="p-6">
              <Send className="bg-[#000000] text-white h-10 w-10 rounded  p-3" />
            </button>

          </div>

        </div>
        <div className="inset-shadow-sm inset-shadow-[#1d4ed8]  h-[350px] rounded-md px-3 py-2  w-full md:w-lg">
          <h1 className="text-2xl font-stretch-50% text-white">Quick Help</h1>
          <button className=" mt-4  text-white  flex items-center gap-3 h-14  border hover:border-[#007bff] rounded-md px-3 py-3 w-full "><DollarSign />Payment Issues</button>
          <button className="mt-2 flex text-white  items-center gap-3 h-14  border hover:border-[#007bff] rounded-md px-3 py-3 w-full"><FileText />Document Problems</button>
          <button className=" mt-2 flex text-white  items-center gap-3 h-14  border hover:border-[#007bff] rounded-md px-3 py-3 w-full"><Truck />Load Questions</button>
          <button className=" mt-2 flex text-white  items-center gap-3 h-14  border hover:border-[#007bff]  rounded-md px-3 py-3 w-full"><Settings />Technical Support</button>
        </div>
      </motion.div>
    )
}