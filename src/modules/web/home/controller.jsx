import { useState, useEffect } from "react";
import { Parse } from "parse";

export default () => {
  const [entertainment, setEntertainment] = useState(null);

  useEffect(() => {
    const getEntertainment = async () => {
      const className = Parse.Object.extend("back");
      const query = new Parse.Query(className);
      const result = await query.find();
      if (result) {
        setEntertainment(result);
      }
    };

    getEntertainment();
  },[]);
  return {
    entertainment,
  };
};
