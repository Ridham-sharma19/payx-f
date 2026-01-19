import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


export const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const id = searchParams.get("id");
  const name = searchParams.get("name") || "";
  const [amount, setAmount] = useState<string>(""); 
  const [loading, setLoading] = useState(false);

  const handleTransfer = async () => {
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount greater than 0.");
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        "https://payx-fwkf.onrender.com/api/v1/user/account/transaction",
        {
          to: id,
          amount: Number(amount),
        },
        {
          withCredentials: true,
        }
      );

      alert("✅ Transfer Successful!");
      navigate("/dashboard");
    } catch (error: any) {
      console.error("❌ Transfer failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Transfer failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Send Money</h2>

        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
            <span className="text-2xl text-white font-bold">
              {name.charAt(0).toUpperCase()}
            </span>
          </div>
          <h3 className="text-2xl font-semibold">{name}</h3>
        </div>

        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Amount (in ₹)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <button
          onClick={handleTransfer}
          disabled={loading || !amount}
          className={`w-full py-2 text-white rounded-md transition-colors ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {loading ? "Processing..." : "Initiate Transfer"}
        </button>
      </div>
    </div>
  );
};
