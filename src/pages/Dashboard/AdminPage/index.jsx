// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { data } from "./cardsdata"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Tab1 from "./tab1"
import Tab2 from "./tab2"
import Tab3 from "./tab3"
import { tabs } from "./cardsdata"
export default function AdminPage() {
  return (
    <motion.main

      style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff ,50%,#ffffff ,x100%)", background: "radial-gradient(70% 80% at center 0%, rgba(255,255,255,0.06) 3%, rgba(98, 255, 179, 0) 70%, rgba(98, 255, 179, 0) 100%)", }} className="px-2 py-2 space-y-10 ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }} className="flex flex-col items-center md:items-start justify-center">
        <h1 data-aos="fade-up" className="mt-10 text-white poppins-medium text-4xl">Admin Dashboard</h1>
        <p className="text-[#d1d5db] text-center">Manage loads,users, and system settings</p>

      </motion.div>

      <motion.div initial={{ opacity: 0, y1: -40 }}
        animate={{ opacity: 1, y1: 40 }}
        transition={{ duration: 1, ease: "easeIn" }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  justify-center items-center place-content-center gap-4 mx-auto px-2">
        {
          data.map((card) => (
            <div key={card.id} className="holographic-card bg-transparent  w-[250px] lg:w-[300px] backdrop-blur-2xl space-y-2 bg-blend-hue flex items-center justify-between p-6 rounded-2xl border-2 inset-shadow-sm hover:inset-shadow-lg transition-all duration-500 hover:inset-shadow-[#1d4ed8] shadow   hover:scale-105 ">
              <span className="flex items-start flex-col space-y-3">  <h1 className="text-xl font-normal text-white">{card.title}</h1>
                <p className="text-white">{card.text}</p>
                <label className="bg-black/10 text-white rounded-md px-2 py-2 inset-shadow-sm inset-shadow-[#1d4ed8] ">{card.label}</label></span>
              <span>{card.icon}</span>


            </div>
          ))
        }
      </motion.div>


      <motion.div initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: -10 }}
        transition={{ duration: 1, ease: "easeIn" }}>

        <Tabs defaultValue="Load Board"  >

          <TabsList >
            {
              tabs.map((tab) => (
                <TabsTrigger className={``} key={tab.id} value={tab.name}>{tab.icon}{tab.name}</TabsTrigger>
              ))
            }

          </TabsList>
          
        <TabsContent   value="Load Board"><Tab1 /></TabsContent>
        <TabsContent value="User Management"><Tab2 /></TabsContent>
        <TabsContent value="Roles and Permissions"><Tab3 /></TabsContent>

        </Tabs>
      </motion.div>






    </motion.main>
  )
}
