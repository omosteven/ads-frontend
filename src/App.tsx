import { BrowserRouter as Router } from "react-router-dom";

// import "./App.css";
import AppRoutes from "AppRoutes";
import Layout from "components/ui/layout";

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;
