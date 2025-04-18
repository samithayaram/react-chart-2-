import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";

export default function ProfileCard() {
  return (
    <div className="bg-[#111] rounded-lg p-5 py-6 w-full text-white border border-gray-800 min-h-[140px]">
      <div className="flex items-center gap-4">
        {/* Custom user icon made with two white divs */}
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-white rounded-full" />
          <div className="w-12 h-6 bg-white rounded-t-full mt-2" />
        </div>

        <div className="flex flex-col gap-1 text-sm">
          <div className="flex items-center gap-1">
            <h2 className="text-lg font-semibold">Mr A</h2>
            <BsCheckCircleFill className="text-blue-500 text-sm" />
          </div>
          <span className="text-sm text-gray-400">Co-Founder & CEO @ Vertx</span>
          <span className="bg-white text-black px-2 py-0.5 rounded text-xs w-fit">
            Entrepreneur
          </span>

          <div className="flex gap-4 mt-3">
            <FaLinkedin className="w-5 h-5 text-[#0A66C2]" />
            <FaXTwitter className="w-5 h-5" />
            <MdEmail className="w-5 h-5 text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
