import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="loader">
      <ThreeDots
        visible={true}
        height="100"
        width="100"
        color="rgb(70, 7, 78)"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
