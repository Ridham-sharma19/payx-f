import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../congig";
import { Button } from "./btn";

interface User {
  _id: string;
  username: string;
  fullname: string;
  email: string;
}

export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchUsers = async () => {
        try {
          setLoading(true);

          const res = await api.get("/api/v1/user/getuser", {
            params: { filter }, 
          });

          setUsers(res.data.data);
        } catch (error: any) {
          console.error("Error fetching users:", error.response?.data || error.message);
          alert(error.response?.data?.message || "Failed to fetch users");
        } finally {
          setLoading(false);
        }
      };

      fetchUsers();
    }, 300); 

    return () => clearTimeout(timer);
  }, [filter]);

  return (
    <div className="w-full md:w-[60vw] mx-auto mt-4 p-4 bg-transparent">
      <div>
        <h3 className="text-xl font-semibold mb-2">Users</h3>

        <div className="flex items-center space-x-3 w-full">
          <input
            type="text"
            placeholder="Search users..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="flex-1 border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {loading ? (
          <div className="text-gray-500 text-center py-4">Loading...</div>
        ) : (
          <div className="space-y-3">
            {users.length === 0 ? (
              <div className="text-gray-500 text-center py-4">
                No users found
              </div>
            ) : (
              users.map((user) => (
                <div
                  key={user._id}
                  className="flex items-center justify-between border-b pb-3 px-2 hover:bg-gray-50 transition"
                >
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold">
                      {user.email.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-medium">{user.fullname}</div>
                      <div className="text-sm text-gray-500">
                        @{user.username}
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() =>
                      navigate("/send?id=" + user._id + "&name=" + user.fullname)
                    }
                    label="Send Money"
                  />
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
