import Link from "next/link";
import { ArrowRight, Box } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facility Services & BOH Textiles",
  description: "Complete industrial facility solutions including Kitchen to Bar towels, Custom Logo Mats, and Mops.",
};

export default function FacilityServicesPage() {
  return (
    <>
      <section className="bg-[#050505] text-[#FDFCF0] pt-40 pb-32 px-6 md:px-16 overflow-hidden">
        <div className="max-w-6xl mx-auto relative flex flex-col md:flex-row gap-20 items-end">
          <div className="md:w-1/2 relative z-10 w-full ml-0 md:-ml-8">
            <h1 className="text-6xl md:text-[90px] font-black uppercase tracking-tighter leading-[0.85] mb-8 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              Facility<br />Services
            </h1>
            <p className="text-2xl font-light text-white/50 border-l-2 border-white/20 pl-6 leading-relaxed">
              Utilitarian excellence. Supplying the tactical equipment running the background of your front-of-house operations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white text-[#050505] py-32 px-6 md:px-16 min-h-screen">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          
          <div className="border border-emerald-100 p-12 bg-emerald-50 group hover:bg-emerald-900 hover:text-[#FDFCF0] hover:border-emerald-700 transition-colors duration-500 cursor-default">
             <Box className="w-10 h-10 mb-8 text-emerald-700 opacity-50 group-hover:opacity-100 group-hover:text-emerald-400 transition-all" />
             <h2 className="text-2xl font-black uppercase mb-4 group-hover:text-emerald-300">Towels</h2>
             <p className="text-emerald-950/70 group-hover:text-white/80 font-light leading-relaxed">
               Versatile "Kitchen to Bar" towels. Engineered for supreme absorption and rigorous sanitation standards during high-volume prep and bartending.
             </p>
          </div>

          <div className="border border-emerald-100 p-12 bg-emerald-50 group hover:bg-emerald-900 hover:text-[#FDFCF0] hover:border-emerald-700 transition-colors duration-500 cursor-default">
             <Box className="w-10 h-10 mb-8 text-emerald-700 opacity-50 group-hover:opacity-100 group-hover:text-emerald-400 transition-all" />
             <h2 className="text-2xl font-black uppercase mb-4 group-hover:text-emerald-300">Floor Mats</h2>
             <p className="text-emerald-950/70 group-hover:text-white/80 font-light leading-relaxed">
               Industrial-grade Carpet Floor Mats designed to trap moisture, and fully customized Logo Mats that leave a profound first impression at your hostess stand.
             </p>
          </div>

          <div className="border border-emerald-100 p-12 bg-emerald-50 group hover:bg-emerald-900 hover:text-[#FDFCF0] hover:border-emerald-700 transition-colors duration-500 cursor-default">
             <Box className="w-10 h-10 mb-8 text-emerald-700 opacity-50 group-hover:opacity-100 group-hover:text-emerald-400 transition-all" />
             <h2 className="text-2xl font-black uppercase mb-4 group-hover:text-emerald-300">Mops & Janitorial</h2>
             <p className="text-emerald-950/70 group-hover:text-white/80 font-light leading-relaxed">
               Part of our complete industrial solution, securing the safety of your BOH floors through high-frequency soil extraction mops.
             </p>
          </div>

        </div>

        <div className="max-w-6xl mx-auto mt-24 flex justify-end">
           <Link href="/quote" className="group inline-flex items-center space-x-6 pb-2 border-b-2 border-emerald-600 text-emerald-700 hover:text-emerald-500 hover:border-emerald-500 transition-all">
              <span className="text-lg uppercase tracking-[0.2em] font-bold">Secure Your Facility</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>
      </section>
    </>
  );
}
