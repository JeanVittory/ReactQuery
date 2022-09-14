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

  const fetchGiphy = async ({ queryKey }) => {
    const searchTerm = queryKey[1]?.join(" ");
    const APIKEY = "AIzaSyBcguGYWCKZglTLwzq-TM9K5GU5FKgWwMI";
    const response = await fetch(
      `https://tenor.googleapis.com/v2/search?q=${searchTerm}&key=${APIKEY}&limit=1`
    );
    const data = await response.json();
    return data;
  };

  const { isErrorGiphy, isLoadingGiphy, dataGiphy } = useQuery(
    ["fetchingGiphy", threeWords],
    fetchGiphy
  );

  return (
    <>
      <CatFact props={{ isError, isLoading, data }} />
      <Giphy threeWords={{ isErrorGiphy, isLoadingGiphy, dataGiphy }} />
    </>
  );
};

export { Container };
