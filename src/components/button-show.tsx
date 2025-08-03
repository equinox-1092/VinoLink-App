import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export const ButtonShow = ({ children, onClick }: ButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className="px-3 py-1 text-blue-600 bg-transparent rounded-md hover:bg-blue-50 hover:underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-1 transition-all duration-150 cursor-pointer text-sm font-medium"
    >
      {children}
    </button>
  );
};
