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
import { Switch } from "@/components/ui/switch"
export default function Tab3(){
    return(
         <motion.div initial={{ opacity: 0, y1: -40 }}
        animate={{ opacity: 1, y1: 40 }}
        transition={{ duration: 1, ease: "easeIn" }} className="flex items-center mt-6 justify-center flex-wrap gap-10">
        <div className="backdrop-blur-2xl  sm:min-w-2xl inset-shadow-sm inset-shadow-[#1d4ed8] px-4 py-4 space-y-6 rounded-md">
          <h1 className="text-lg font-normal text-white">Role Management</h1>
          <div className="p-3 w-full border-2 rounded-md space-y-2">
            <span className="flex items-ceter justify-between w-full">
              <h1 className="text-white">Super Admin</h1>
              <span className="flex border border-gray-400 items-center gap-2 text-purple-600 text-xs font-medium bg-purple-300 p-1 tracking-wide rounded-md ">System Role
              </span>
            </span>
            <p className="text-gray-400">Full system access including user management and system setting</p>
            <button className="px-1 py-1 rounded-md border font-medium w-20  text-gray-300 hover:border-[#007bff] hover:text-">Edit</button>
            <button className="ml-2 px-1 py-1 rounded-md border font-medium w-32  text-gray-300 hover:border-[#007bff] hover:text-" >View Users</button>
          </div>
          <div className="p-3 w-full border-2 rounded-md space-y-2">
            <span className="flex items-ceter justify-between w-full">
              <h1 className="text-white">Carrier Admin</h1>
              <span className="flex border border-gray-400 items-center gap-2 text-green-600 text-xs font-medium bg-green-200 p-1 tracking-wide rounded-md">Business Role
              </span>
            </span>
            <p className="text-gray-400 ">Manage loads, view reports, manage carrier operations</p>
            <button className="px-1 py-1 rounded-md border font-medium w-20  text-gray-300 hover:border-[#007bff] hover:text-">Edit</button>
            <button className="ml-2 px-1 py-1 rounded-md border font-medium w-32  text-gray-300 hover:border-[#007bff] hover:text-" >View Users</button>
          </div>
          <div className="p-3 w-full border-2 rounded-md space-y-2">
            <span className="flex items-ceter justify-between w-full">
              <h1 className="text-white">Driver</h1>
              <span className="flex border border-gray-400 items-center gap-2 text-blue-600 text-xs font-medium bg-blue-200 p-1 tracking-wide rounded-md">Operational Role
              </span>
            </span>
            <p className="text-gray-400">View assigned loads, update delivery status, access mobile app</p>
            <button className="px-1 py-1 rounded-md border font-medium w-20  text-gray-300 hover:border-[#007bff] hover:text-">Edit</button>
            <button className="ml-2 px-1 py-1 rounded-md border font-medium w-32  text-gray-300 hover:border-[#007bff] hover:text-" >View Users</button>
          </div>

        </div>
        <div className="sm:min-w-xl inset-shadow-sm inset-shadow-[#1d4ed8] backdrop-blur-2xl px-4 py-4 space-y-6 rounded-md">
          <h1 className="text-lg font-normal text-white mt-4">Two-Factor Authentication</h1>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-white text-lg">Require 2FA for Admins</h1>
              <p className="text-base font-normal text-gray-400">All admin users must enable 2FA</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-white text-lg">Require 2FA for Financial Actions</h1>
              <p className="text-base font-normal text-gray-400">2FA required for payments and billing</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-white text-lg">Optional 2FA for Drivers</h1>
              <p className="text-base font-normal text-gray-400">Drivers can enable 2FA optionally</p>
            </div>
            <Switch />
          </div>
          <hr />
          <h1 className="text-lg font-normal text-white">2FA Statistics</h1>
          <div className="space-y-2 mb-12">
            <span className="flex items-center justify-between">
              <h1 className="text-white">Admins with 2FA:</h1>
              <h1 className="text-white">12/12 (100%)</h1>

            </span>
            <span className="flex items-center justify-between">
              <h1 className="text-white">Drivers with 2FA:</h1>
              <h1 className="text-white">87/245 (35%)</h1>
            </span>
            <span className="flex items-center justify-between">
              <h1 className="text-white">Carriers with 2FA:</h1>
              <h1 className="text-white">12/12 (100%)</h1>

            </span>
          </div>


        </div>
      </motion.div>
    )
}