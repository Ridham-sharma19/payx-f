import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../congig";

interface User {
  email: string;
  fullname: string;
}

export const Appbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await api.get("/api/v1/user/me");
        setUser(res.data.data.user);
      } catch {
        setUser(null);
      }
    };
    fetchMe();
  }, []);

  const handleLogout = async () => {
    try {
      await api.post("/api/v1/user/logout");
    } catch {}
    setUser(null);
    navigate("/signin");
  };

  const avatarLetter = user?.email
    ? user.email.charAt(0).toUpperCase()
    : "";

  return (
    <nav className="w-full border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <h1
          onClick={() => navigate("/dashboard")}
          className="text-2xl font-bold text-[#002970] cursor-pointer"
        >
          Pay<span className="text-[#00baf2]">X</span>
        </h1>

        {user ? (
          <div className="relative">
            <div
              onClick={() => setOpen((p) => !p)}
              className="flex items-center gap-3 cursor-pointer"
            >
              <span className="text-sm font-medium text-gray-700">
                Hi, {user.fullname}
              </span>

              <div className="h-10 w-10 rounded-full bg-[#00baf2] flex items-center justify-center text-white font-bold">
                {avatarLetter}
              </div>
            </div>

          
            {open && (
              <div className="absolute right-0 mt-3 w-44 bg-white border rounded-lg shadow-lg z-50">
                <div className="flex justify-between items-center px-4 py-2 border-b">
                  <span className="text-sm font-medium">Account</span>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/signin")}
            className="text-sm font-medium text-[#002970] hover:text-[#00baf2]"
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};
