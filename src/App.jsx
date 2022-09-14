import { QueryClientProvider } from "react-query";
import { queryClient } from "./utils/queryClient";
import { Container } from "./components/Container";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Container />
    </QueryClientProvider>
  );
};

export { App };
