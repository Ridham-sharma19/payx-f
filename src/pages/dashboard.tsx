import { useEffect, useState } from "react";
import { api } from "../congig";
import { Appbar } from "../components/appbar";
import { Balance } from "../components/balance";
import { UserList } from "../components/user";

interface BalanceResponse {
  statusCode: number;
  data: {
    balance: number;
  };
  message: string;
  success: boolean;
}

export default function Dashboard() {
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await api.get<BalanceResponse>("/api/v1/user/account/balance"); 
        setBalance(res.data.data.balance);
      } catch (err: any) {
        console.error("Error fetching balance:", err.response?.data || err.message);
        alert(err.response?.data?.message || "Failed to fetch balance. Please login again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <Appbar />
      
      <Balance value={loading ? 0 : balance ?? 0} />
       

      <UserList />
    </div>
  );
}
