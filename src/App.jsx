import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Statistics from "./components/Statistics";
import Pagin from "./components/Pagin";
import Followers from "./components/Followers";
import TableUser from "./components/Table";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Statistics />
      <Followers />
      <TableUser/>
      <Pagin />
    </>
  );
}

export default App;
