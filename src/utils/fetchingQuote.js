import { useQuery } from "react-query";

const fetchingQuotes = () => {
  const fetchCatFacts = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    console.log("hello");
    return data;
  };

  const { isLoading, isError, data } = useQuery(
    "fetchingCatFacts",
    fetchCatFacts
  );
  return { isLoading, isError, data };
};

export { fetchingQuotes };
