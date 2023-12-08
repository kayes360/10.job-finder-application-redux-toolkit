import React from "react";

export default function Alert({ message }) {
  return (
    <div className="bg-red-500 text-sm text-white rounded-lg p-4" role="alert">
      <span className="font-bold">{message}</span>
    </div> 
  );
}

 