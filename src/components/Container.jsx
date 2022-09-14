import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { CatFact } from "./CatFact";
import { Giphy } from "./Giphy";

const Container = () => {
  const [threeWords, setThreeWords] = useState();

  const fetchCatFacts = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    return data;
  };

  const { isLoading, isError, data } = useQuery(
    "fetchingCatFacts",
    fetchCatFacts
  );

  useEffect(() => {
    const retrievingThreeWords = () => {
      const quote = data?.fact;
      const result = quote?.split(" ").slice(0, 3);
      return setThreeWords(result);
    };
    retrievingThreeWords();
  }, [data]);

  return (
    <>
      <CatFact props={{ isError, isLoading, data }} />
      <Giphy threeWords={threeWords} />
    </>
  );
};

export { Container };
