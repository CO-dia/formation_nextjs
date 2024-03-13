"use client";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-blue-400">
      <div>Formation</div>
      <div className="space-x-10">
        <button onClick={() => alert("Home")}>Home</button>
        <button onClick={() => alert("About")}>About</button>
      </div>
    </nav>
  );
};

export default Navbar;