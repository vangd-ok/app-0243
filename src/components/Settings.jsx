import { useState } from "react";

export const Settings = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto px-4 lg:px-8 mt-10">
        <div className="grid grid-cols-1 gap-y-10">
          <p className="font-semibold text-red-600 text-3xl">Количество кликов: {count}</p>
          <button className="btn-settings" onClick={() => {
            setCount(count + 1)
          }}>кликни</button>
        </div>
      </div>
    </>
  );
};