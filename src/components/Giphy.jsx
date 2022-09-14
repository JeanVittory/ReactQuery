import { useQuery } from "react-query";

const Giphy = ({ threeWords }) => {
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
    ["fetchingGiphy", threeWords],
    fetchGiphy
  );

  if (isError) return <h2> Something went wrong with Giphy</h2>;
  if (isLoading) return <h2>Loading...</h2>;
  return (
    <>
      {data.results.map((item) => {
        return <img key={item.id} src={item.media_formats.gif.url} alt="GIF" />;
      })}
    </>
  );
};
export { Giphy };
