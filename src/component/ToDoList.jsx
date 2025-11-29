import { useState, useRef, useEffect, useContext } from "react";
import { MyContext } from "./MyContext";
import Task from "./Task";

function ToDoList() {
    // const {} = useContext(MyContext);
    const [tasks, setTasks] = useState([
        {id: 1, description: "Walk the dog"},
        {id: 2, description: "Take out the trash"},
        {id: 3, description: "Wash the dishes"},
    ]);
    const [inputValue, setInputValue] = useState();

    const handleInputValue = (event) => {
        setInputValue(event.target.value);
    }

    const resetConsole = () => {
        console.clear();
    }

    const addTask = () => {
        setTasks(task => [...task, {id: 4, description: "Do laundry"}]);
    }


    return (
        <>
            <div className="h-screen w-screen flex justify-center items-center border-2 border-red-600">
                <div id="list-container" className="h-full w-1/2 flex flex-col items-center border-2 border-red-600">
                    {/* TITLE */}
                    <span onClick={resetConsole} className="mt-10 text-7xl border-2 border-red-600 cursor-pointer">To Do List</span>
                    {/* ADD TASK BAR */}
                    <div className="w-full flex justify-center mt-5">
                        <input onChange={handleInputValue} type="text" className="h-20 w-1/2 border-2 border-black text-4xl rounded-xl" />
                        <button onClick={addTask} className="w-20 ml-5 text-4xl border-2 border-black rounded-xl">Add</button>
                    </div>

                    {/* TASK CONTAINER */}
                    <div id="tasks-container" className="h-full w-full flex flex-col items-center mt-5 border-2 border-red-600">

                        {/* TASKS */}
                        {tasks.map((task, index) => {
                            return <Task key={index} id={index} description={task.description}/>
                        })}


                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoList;
