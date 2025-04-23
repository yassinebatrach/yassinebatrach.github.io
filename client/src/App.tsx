
import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { queryClient } from "./lib/queryClient";
import Home from "./pages/Home";
import NotFound from "./pages/not-found";

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
