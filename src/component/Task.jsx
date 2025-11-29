import { useContext } from "react";
import { MyContext } from "./MyContext";

function Task({id, description}) {
    const {setTasks} = useContext(MyContext);

    const handleDelete = (itemToDelete) => {
        setTasks(prevItems => prevItems.filter(item => item.description !== itemToDelete));
    }

    return (
        <>
             <div className="h-24 w-1/2 flex flew-row mt-5 border-2 border-red-600">
                <div className="h-full w-2/3 flex justify-center items-center border-2 border-red-600">
                    {description}<br/>
                    {/* id: {id} */}
                </div>
                <button onClick={() => handleDelete(description)} id={id} className="h-full w-1/3 font-semibold text-black text-xl border-2 border-red-600 hover:bg-gray-50 active:bg-gray-200">Delete</button>
            </div>
        </>
    )
}

export default Task;