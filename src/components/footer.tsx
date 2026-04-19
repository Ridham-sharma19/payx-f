
import Logo from "./logo";

export default function Footer() {
  return (
    <div className="relative bg-black text-white min-h-[60vh] w-full px-6 py-12 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className=""><Logo/></span>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            © 2026 PayX. All rights reserved.
          </p>
        </div>

      
        <div className="grid grid-cols-2 gap-6 text-sm text-gray-400">
          

          <div>
            <h4 className="font-semibold text-white mb-2">Socials</h4>
            <ul className="space-y-1">
              <li><a href='https://github.com/Ridham-sharma19' className="hover:text-white">GitHub</a></li>
              
              <li><a href="https://x.com/Ridham_Sharma19" className="hover:text-white">X</a></li>
              <li><a href="https://www.linkedin.com/in/ridham-sharma-504560312/" className="hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}