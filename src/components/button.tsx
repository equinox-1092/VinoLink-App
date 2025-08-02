import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button  className="px-3 py-1 text-blue-600 bg-transparent rounded-md hover:bg-blue-50 hover:underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-1 transition-all duration-150 cursor-pointer text-sm font-medium">
      {children}
    </button>
  );
};
