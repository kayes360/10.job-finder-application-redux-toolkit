import React from "react";

export default function Alert({ message }) {
  return (
    <div className="bg-red-500 text-sm text-white rounded-lg p-4" role="alert">
      <span className="font-bold">{message}</span>
    </div> 
  );
}


{/* <div class="bg-blue-600 text-sm text-white rounded-lg p-4 dark:bg-blue-500" role="alert">
  <span class="font-bold">Info</span> alert! You should check in on some of those fields below.
</div> */}