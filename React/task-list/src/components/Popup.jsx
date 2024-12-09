const Popup = ({isOpen, handleClose, handleSubmit, task}) => {


  return (
    isOpen && (
      <div className="w-[100%] h-[100%] fixed top-0 left-0 bg-[#000000a3]">

      <div className="w-[400px] h-[200px] bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg p-3 flex flex-col">   
        <div className="flex justify-between mb-1">
          <p className="font-bold text-center w-full text-xl">Update Note</p>
          <button className="text-xl" onClick={handleClose}>x</button>
        </div>
        <textarea className="m-auto p-2 w-[80%] border" placeholder="Enter task..."></textarea>
        <button className="m-auto p-2 w-[80%] bg-[#22333B] rounded-lg text-white"
        onClick={handleSubmit}
        >Update</button>
      </div>

    </div>
    )
  );
};

export default Popup;
