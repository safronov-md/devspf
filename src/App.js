import RoutesTree from "./Router";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./components/global/Topbar";
import Sidebar from "./components/global/Sidebar"

function App() {
    const [theme, colorMode] = useMode()
  return (
      <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="App">
                      <Sidebar/>
                  <main className="content">
                      <Topbar/>
                      <RoutesTree/>
                  </main>
              </div>
          </ThemeProvider>
      </ColorModeContext.Provider>
  );
}

export default App;
