import Content from "../layouts/Content";
import Sidebar from "../layouts/Sidebar";

function Home() {
  return (
    <div className="grid grid-cols-4">
      <Sidebar />
      <div className="col-span-3">
        <Content />
      </div>
    </div>
  );
}

export default Home;
