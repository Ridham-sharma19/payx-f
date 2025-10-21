

import Cookies from "js-cookie";


export const Appbar = () => {
 
  const email = Cookies.get("email") || "";

  
  const avatarLetter = email.charAt(0).toUpperCase();

  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4">
        PayX
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">
          Yo!
        </div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl font-bold">
            {avatarLetter}
          </div>
        </div>
      </div>
    </div>
  );
};
