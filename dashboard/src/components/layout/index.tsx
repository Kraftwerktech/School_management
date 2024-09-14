import type { PropsWithChildren } from "react";
import { Menu } from "../menu";
export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Menu />
      <div className="content">
        <div className="ml-[270px]">{children}</div>
      </div>
    </div>
  );
};