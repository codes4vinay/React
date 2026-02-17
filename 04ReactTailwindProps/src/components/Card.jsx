import React from "react";

function Card({ name }) {

  return (
    <div className=" m-5 flex flex-col items-center justify-center  border border-dashed border-white rounded-2xl p-10">
      <h1 className="text-white">The name of this dog is : {name} </h1>
      <img
        className="size-50"
        src="https://images.unsplash.com/photo-1771196851791-c5f3524c976e?q=80&w=1146&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Dog Image 1"
      />
    </div>
  );
}

export default Card;
