import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "router";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Router></Router>
        <Toaster position="bottom-right" reverseOrder={false} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
export default App;
