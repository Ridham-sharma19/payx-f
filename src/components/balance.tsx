


interface balanceprops{
    value:number
}

export const Balance = ({ value }: balanceprops) => {
  return (
    <div className="flex  items-center justify-start gap-4 my-3 px-6 md: w-[60vw] mx-auto">
      <span className="text-3xl font-bold text-black">
        Your balance
      </span>
      <span className="text-3xl font-bold text-[#002970]">
        ₹ {value}
      </span>
    </div>
  );
};
