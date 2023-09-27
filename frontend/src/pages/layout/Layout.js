import React from "react";
import Header from "../../components/Header";

const Layout = ({ children }) => {
   return (
      <div className="container dark">
         <div className="app">
            <Header></Header>

            <main>{children}</main>
         </div>
      </div>
   );
};

export default Layout;
