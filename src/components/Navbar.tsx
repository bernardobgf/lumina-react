import type { PageOptions } from "../types/types";

interface NavbarProps {
  pageHandler: (page: PageOptions) => void;
}

const Navbar = ({ pageHandler }: NavbarProps) => {
  return (
    <nav className="navbar h-25 glass rounded-b-2xl">
      <div className="navbar-start mx-10">
        <button
          className="text-3xl font-bold hover:cursor-pointer"
          onClick={() => pageHandler("home")}
        >
          Lumina
        </button>
      </div>
      <div className="navbar-center">
        <ul className="flex gap-x-10 text-lg">
          <li>
            <button className="cursor-pointer" onClick={() => pageHandler("about")}>
              Sobre
            </button>
          </li>
          <li>
            <button className="cursor-pointer" onClick={() => pageHandler("pricing")}>
              Preços
            </button>
          </li>
          <li>
            <button className="cursor-pointer" onClick={() => pageHandler("contact")}>
              Contato
            </button>
          </li>
        </ul>
      </div>
      <div className="navbar-end mx-10"></div>
    </nav>
  );
};

export default Navbar;
