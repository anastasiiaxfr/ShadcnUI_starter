import { Button } from "@/components/ui/button";

import Logo from "./Logo";
import NavMenu from "./NavMenu";
import Drawer from "./Draer";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <NavMenu />
        <div className="flex gap-2">
          <Button variant="secondary" className="btn">
            Sign In
          </Button>
          <div className="sm:hidden">
            <Drawer />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
