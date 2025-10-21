import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie"; 
import { Button } from "./btn";
import { useNavigate } from "react-router-dom";

interface User {
  _id: string;
  username: string;
  fullname: string;
  email: string;
}

export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();


  
  const currentUserEmail = Cookies.get("email");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/user/getuser", {
          params: { filter },
          withCredentials: true,
        });

      
        const filteredUsers = res.data.data.filter(
          (user: User) => user.email !== currentUserEmail
        );

        setUsers(filteredUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [filter, currentUserEmail]);

  return (
    <div className="w-full mx-auto mt-4 p-4 bg-transparent">
    
      <div>
        <h3 className="text-base font-semibold mb-2">Users</h3>
        <div className="flex items-center space-x-3 w-full">
          <input
            type="text"
            placeholder="Search users..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="flex-1 border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

  
        <div className="space-y-3">
          {users.length === 0 ? (
            <div className="text-gray-500 text-center py-4">No users found</div>
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
                    <div className="text-sm text-gray-500">@{user.username}</div>
                  </div>
                </div>

               
                <Button onClick={(e) => {
                navigate("/send?id=" + user._id + "&name=" + user.fullname);
            }} label={"Send Money"} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

