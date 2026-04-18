
interface btnprops {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export function Button({label, onClick}:btnprops) {
    return <button onClick={onClick} type="button" className="  text-white bg-[#002970] hover:bg-[#011d4f] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{label}</button>
}