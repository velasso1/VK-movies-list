import { FC } from "react";
import { MutatingDots } from "react-loader-spinner";

const Loader: FC = () => {
  return (
    <div className="loader">
      <MutatingDots
        color="#4b6df6"
        secondaryColor="#4b6df6"
        width="100"
        height="100"
      />
    </div>
  );
};

export default Loader;
