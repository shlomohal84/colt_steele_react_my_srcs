import PageContent from "./components/PageContent";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ThemeProvider from "./components/contexts/ThemeContext";
import LanguageProvider from "./components/contexts/LanguageContext";

import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
