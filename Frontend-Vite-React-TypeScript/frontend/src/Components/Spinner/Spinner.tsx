import React from "react";
import { BarLoader } from "react-spinners";
import "./Spinner.css";

type Props = {
  isLoading?: boolean;
};

const Spinner = ({ isLoading = true }: Props) => {
  return (
    <>
      <div id="loading-spinner">
        <BarLoader
          color="#36d7b7"
          loading={isLoading}
          speedMultiplier={1.5}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
};

export default Spinner;
