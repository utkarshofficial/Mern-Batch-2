import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function Toast() {
  const notify = () => toast.success("Task Deleted Successfully...",{position: "bottom-right",
    theme: "dark",
  });

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
}

export default Toast;
