import React from "react";
import Header from "../../Components/Header/Header";
import classes from "./Layout.module.scss";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={classes.Layout__container}>
      <header>
        <Header />
      </header>
      <main className={classes.Layout__Main}>{children}</main>
    </div>
  );
};

export default Layout;
