const CatFact = ({ props }) => {
  const { isError, isLoading, data } = props;

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Something went wrong!</h2>;

  return <div style={{ marginBottom: "2rem" }}>{data.fact}</div>;
};

export { CatFact };
