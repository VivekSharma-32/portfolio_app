import Layout from "./components/layout/Layout";
import { ThemeProvider } from "./context/ThemeContext";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
