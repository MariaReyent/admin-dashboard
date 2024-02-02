import Followers from "../components/Followers";
import Interactions from "../components/Interactions";
import Statistics from "../components/Statistics";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import Pagination from "../components/Pagin";

function PrivatePage() {
  return (
    <>
      <Sidebar />
      <Followers />
      <Table />
      <Interactions />
      <Statistics />
      <Pagination />
    </>
  );
}

export default PrivatePage;
