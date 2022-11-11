import * as React from "react";
import styled from "styled-components";
import { useAppStore } from "../../../stores/app-store";

const LoaderContainer = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgb(47 47 47);
  z-index: 999;
`;

type Props = {};

const Loader = ({}: Props) => {
  const { handleLoading } = useAppStore();

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      handleLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return <LoaderContainer />;
};

export default Loader;
