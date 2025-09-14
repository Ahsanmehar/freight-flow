// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Tab1 from "./tab1"
import Tab2 from "./tab2"
import Tab3 from "./tab3"
import Tab4 from "./tab4"
import { tabs,data } from "./cardsdata"
export default function SupportPage() {

  return (
    <motion.main 

 style={{backgroundImage:"linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff ,50%,#ffffff ,x100%)",background:"radial-gradient(70% 80% at center 0%, rgba(255,255,255,0.06) 3%, rgba(98, 255, 179, 0) 70%, rgba(98, 255, 179, 0) 100%)",}}  className="px-2 py-2 space-y-10 ">
      <motion.div 
 initial={{ opacity:0}}
  animate={{ opacity:1}}
  transition={{duration:1,ease:"easeIn"}} className="flex flex-col items-center md:items-start justify-center">
        <h1 data-aos="fade-up" className="mt-10 text-white poppins-medium text-4xl">Support Center</h1>
        <p className="text-[#d1d5db] text-center">Get help when you need it. We're here 24/7 to support your business.</p>

      </motion.div>

      <motion.div initial={{ opacity:0,y1:-40}}
  animate={{ opacity:1,y1:40}}
  transition={{duration:1,ease:"easeIn"}} className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols3 xl:grid-cols-3  place-content-center gap-10 mx-auto px-2">
        {
          data.map((card) => (
            <div key={card.id} className="holographic-card w-[400px] bg-transparent backdrop-blur-2xl space-y-2 bg-blend-hue flex flex-col items-center justify-center p-6 rounded-2xl border-2 inset-shadow-sm hover:inset-shadow-lg transition-all duration-500 hover:inset-shadow-[#1d4ed8] shadow   hover:scale-105 ">
              {card.icon}
              <h1 className="text-xl font-normal text-white">{card.title}</h1>
              <p className="text-white text-center">{card.text}</p>
              <label className="bg-black/10 text-white rounded-md px-2 py-2 inset-shadow-sm inset-shadow-[#1d4ed8] ">{card.label}</label>
            </div>
          ))
        }
      </motion.div>
      <div className="flex flex-row items-center ">

      </div>
      <motion.div initial={{ opacity:0,y:40}}
  animate={{ opacity:1,y:-40}}
  transition={{duration:1,ease:"easeIn"}}>

      <Tabs defaultValue="Live Chat"  >
        
        <TabsList >
          {
            tabs.map((tab) => (
              <TabsTrigger  className={``} key={tab.id} value={tab.name}>{tab.icon}{tab.name}</TabsTrigger>
            ))
          }

        </TabsList>

        <TabsContent   value="Live Chat"><Tab1 /></TabsContent>
        <TabsContent value="Support Tickets"><Tab2 /></TabsContent>
        <TabsContent value="Faqs"><Tab3 /></TabsContent>
        <TabsContent value="System Status"><Tab4 /></TabsContent>
      </Tabs>
        </motion.div>


    </motion.main>
  )
}
