import { useLogout, useMenu } from "@refinedev/core";
import { NavLink, Link } from "react-router-dom";
import logo from '../../assets/logo1.png'
export const Menu = () => {
  const { mutate: logout } = useLogout();
  const { menuItems } = useMenu();
  return (
    <div className="fixed top-0 left-0 w-[260px] h-screen bg-[#F6F9F7] shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-transform duration-300">
      <div className="h-[50px] flex justify-center items-center">
        <Link to="/" className="w-[180px] h-[50px]">
          <img className="w-full h-full" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="px-[16px] mt-4">
        <nav className="menu">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <p key={item.key}>
                <NavLink
                  to={item.route ?? "/"}
                  className={({ isActive }) =>
                    `block py-3 px-4 rounded-md text-white transition-colors duration-200 ${isActive ? 'bg-[#a2e2a5] text-white' : 'bg-[#E4EBE6] text-white hover:bg-[#E2F3E8]'}`
                  }
                >
                  {item.label}
                </NavLink>
              </p>
            ))}
            <p>
              <button
                onClick={() => logout()}
                className="block w-full py-3 px-4 bg-[#FF5252] text-white rounded-md transition-colors duration-200 hover:bg-[#FF867F]"
              >
                Log out
              </button>
            </p>
          </ul>
        </nav>
      </div>
    </div>
  );
};
