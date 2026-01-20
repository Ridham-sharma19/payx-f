import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to PayX</h1>
        <p className="mb-6">Your secure payment solution</p>
        <button
          onClick={() => navigate("/signin")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
