import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header/Index'
import { GlobalStyle } from "./styles/Global";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}