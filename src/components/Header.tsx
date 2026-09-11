import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-indigo-700 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Task Board
        </h1>
        <p className="text-indigo-100 mt-1 text-sm">
          En taskboard för att organisera dina uppgifter
        </p>
        <nav className="flex gap-3 mt-6 pt-4 border-t border-indigo-500/40">
          <Link
            to="/"
            className="bg-white text-indigo-700 hover:bg-indigo-50 text-sm font-semibold px-4 py-2 rounded-md transition-colors"
          >
            Task board
          </Link>
          <Link
            to="/create"
            className="bg-white text-indigo-700 hover:bg-indigo-50 text-sm font-semibold px-4 py-2 rounded-md transition-colors"
          >
            Skapa task
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;
