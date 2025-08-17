import { LucideIcon } from "lucide-react";

interface Types {
    title: string;
    subtitle: string;
    Icon: LucideIcon;
}
const Service: React.FC<Types> = ({ title, subtitle, Icon }) => {
    return (
      <div className="w-full h-full flex flex-col p-8 rounded-xl border-[1px] border-slate-300 relative overflow-hidden group bg-white/75 backdrop-blur-md shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
        <div className="flex gap-2 items-center">
            <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
            <Icon className="mb-2 text-2xl text-purple-500 group-hover:text-white transition-colors relative z-10 duration-300" />
            <h3 className="font-semibold text-md text-[#4d4d4d] group-hover:text-white relative z-10 duration- mb-2">
            {title}
            </h3>
        </div>
        <p className="text-[#4d4d4d]/80 group-hover:text-white/70 relative z-10 duration-300">
          {subtitle}
        </p>
      </div>
    );
  };

  export default Service;