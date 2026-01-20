import React from "react";

interface inputprops {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputBox({ label, placeholder, onChange,type }: inputprops) {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">{label}</div>
      <input
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        className="w-full px-2 py-1 border rounded border-slate-200"
      />
    </div>
  );
}
