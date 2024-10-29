import { useEffect, useState } from "react";

export const Shop = () => {
  const [advice, setAdvice] = useState("")
  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";
    const fetchData = async () => {
      
        try {
          const response = await fetch(url);
          const json = await response.json();
          setAdvice(json.slip.advice);
        } catch (error) {
          console.log("Error: ", error);
        }
    }
    fetchData();
  }, [])
  return (
    <>
    <div className="container mx-auto px-4 lg:px-8 mt-10">
      <div className="grid grid-cols-1 gap-y-10">
        <p className="font-semibold text-red-600 text-3xl">Случайный совет дня: {advice}</p>
    
      </div>
    </div>
  </>
  );
};