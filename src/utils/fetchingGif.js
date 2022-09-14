import { useQuery } from "react-query";

const fetchingGifs = (word) => {
  const fetchGiphy = async ({ queryKey }) => {
    const searchTerm = queryKey[1]?.join(" ");
    const APIKEY = "AIzaSyBcguGYWCKZglTLwzq-TM9K5GU5FKgWwMI";
    const response = await fetch(
      `https://tenor.googleapis.com/v2/search?q=${searchTerm}&key=${APIKEY}&limit=1`
    );
    const data = await response.json();
    return data;
  };

  const { isError, isLoading, data } = useQuery(
    ["fetchingGiphy", word],
    fetchGiphy
  );
  return { isError, isLoading, data };
};

export { fetchingGifs };
