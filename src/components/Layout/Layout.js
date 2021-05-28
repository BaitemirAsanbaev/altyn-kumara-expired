import Toolbar from "./Toolbar/Toolbar"
import Drawer from "./Drawer/Drawer"
import Footer from "../Footer/Footer"
import { useState } from "react";

const Layout = ({children}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return ( <div>
    <Toolbar openDrawer={() => setDrawerOpen(true)} />
    <Drawer open={drawerOpen} closeDrawer={()=>setDrawerOpen(false)}/>
    <main>
      {children}
    </main>
    <Footer/>
  </div> );
}
 
export default Layout;