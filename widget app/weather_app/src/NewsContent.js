import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContent = createContext();

export const NewsContentProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "91bdc1fec36745548c3e2e594f3d0201";

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/everything?q=rich&from=2020-07-19&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContent.Provider value={{ data }}>
      {props.children}
    </NewsContent.Provider>
  );
};