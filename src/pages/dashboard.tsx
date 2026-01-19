import { useEffect, useState } from "react";
import axios from "axios";
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

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await axios.get<BalanceResponse>(
          `https://payx-fwkf.onrender.com/api/v1/user/account/balance`,
          {
            withCredentials: true,
          }
        );

        setBalance(res.data.data.balance);
      } catch (err: any) {
        console.error(
          "Error fetching balance:",
          err.response?.data || err.message
        );
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className="flex flex-col">
      <Appbar  />
      <Balance value={balance ?? 0} />
      <UserList/>
    </div>
  );
}
