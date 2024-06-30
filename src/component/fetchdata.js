import { useEffect, useState } from "react";

export default function Fetchdata() {
  const [coinprices, setCoinprices] = useState(false);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&page=1"
    )
      .then((response) => response.json())
      .then((data) => console.log(setCoinprices(data)));
  }, []);

  return (
    <>
      {coinprices
        ? coinprices.map((coinprice) => {
            return (
              <div className="flex gap-4 mb-2 mt-1 ml-2">
                <img
                  src={coinprice.image}
                  alt={coinprice.name}
                  className="w-4 h-4"
                />
                <p className="text-sm">
                  {coinprice.name + " : " + coinprice.current_price}
                </p>
              </div>
            );
          })
        : "not Available"}
    </>
  );
}
