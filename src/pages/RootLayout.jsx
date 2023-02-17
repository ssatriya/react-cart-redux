import { Outlet } from "react-router-dom";

import Container from "../components/Container";
import Navigation from "../components/Navigation";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default RootLayout;
