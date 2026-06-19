import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
