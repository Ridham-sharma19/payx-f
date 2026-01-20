


interface balanceprops{
    value:number
}

export const Balance = ({ value }: balanceprops) => {
  return (
    <div className="flex items-center gap-4 my-3 px-6">
      <span className="text-2xl font-semibold text-gray-700">
        Your balance
      </span>
      <span className="text-3xl font-bold text-gray-900">
        ₹ {value}
      </span>
    </div>
  );
};
