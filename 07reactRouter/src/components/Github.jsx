import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.github.com/users/Ebombey");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="" width={"300px"} />
    </div>
  );
}

export default Github;
