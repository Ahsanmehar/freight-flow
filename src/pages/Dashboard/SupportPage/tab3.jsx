import { motion } from "framer-motion"
export default function Tab3(){
    return (
           <motion.div initial={{ opacity:0}}
  animate={{ opacity:1}}
  transition={{duration:1,ease:"easeIn"}} className="mt-10 rounded-md space-y-10">
        <div className="flex px-4 py-3  rounded-md border-2 overflow-hidden w-full mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="16px"
            className="fill-gray-200 mr-3 rotate-90"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
          <input
            type="email"
            placeholder="Search Frequently Asked "
            className="w-full outline-none bg-transparent placeholder:text-white text-sm "
          />
        </div>

        <div className="px-4 py-4 rounded-md inset-shadow-sm inset-shadow-[#1d4ed8]">
          <h1 className="text-xl font-stretch-50% text-white">System Status</h1>
          <div className="mt-6 flex flex-col items-start  ">
            <h1 className="font-medium text-lg text-white">When will I recieve payment for completed loads</h1>
            <p className="font-light text-base text-gray-300">Standard payment terms are 7 days from delivery confirmation. Quick-pay options are available for same-day payment with a small processing fee.</p>
          </div>
          <hr className="border-slate-200 mt-6" />
          <div className="mt-6 flex flex-col items-start  mb-5">
            <h1 className="font-medium text-lg text-white">When will I recieve payment for completed loads</h1>
            <p className="font-light text-base text-gray-300">Standard payment terms are 7 days from delivery confirmation. Quick-pay options are available for same-day payment with a small processing fee.</p>
          </div>

        </div>
        <div className="px-4 py-4 rounded-md inset-shadow-sm inset-shadow-[#1d4ed8]">
          <h1 className="text-xl font-stretch-50% text-white">Documentation</h1>
          <div className="mt-6 flex flex-col items-start  ">
            <h1 className="font-medium text-lg text-white">What documents do I need to provide?</h1>
            <p className="font-light text-base text-gray-300">You'll need your MC Certificate, DOT Certificate, Certificate of Insurance, CDL, and W-9 tax form. All documents must be current and valid.

            </p>
          </div>
          <hr className="border-slate-200 mt-6" />
          <div className="mt-6 flex flex-col items-start  mb-5">
            <h1 className="font-medium text-lg text-white">How do I update expired documents?</h1>
            <p className="font-light text-base text-gray-300">Go to Compliance → Document Vault and click "Update" next to any expired documents. You can upload new versions directly.</p>
          </div>

        </div>
        <div className="px-4 py-4 rounded-md inset-shadow-sm inset-shadow-[#1d4ed8]">
          <h1 className="text-xl font-stretch-50% text-white">Technical</h1>
          <div className="mt-6 flex flex-col items-start  ">
            <h1 className="font-medium text-lg text-white">The platform is running slowly. What should I do?</h1>
            <p className="font-light text-base text-gray-300">Try clearing your browser cache and cookies. If the issue persists, contact our technical support team.</p>
          </div>
          <hr className="border-slate-200 mt-6" />
          <div className="mt-6 flex flex-col items-start   mb-5">
            <h1 className="font-medium text-lg text-white">Can I access the platform on mobile? </h1>
            <p className="font-light text-base text-gray-300">Yes, our platform is fully responsive and works on all devices. We also have mobile apps available for iOS and Android.</p>
          </div>

        </div>
      </motion.div>
    )
}