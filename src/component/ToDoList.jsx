import { useState, useRef, useEffect, useContext } from "react";
import { MyContext } from "./MyContext";

function ToDoList() {
    // const {} = useContext(MyContext);

    const resetConsole = () => {
        console.clear();
    }

    return (
        <>
            <div className="h-screen w-screen flex justify-center items-center border-2 border-red-600">
                <div id="list-container" className="h-full w-1/2 flex flex-col items-center border-2 border-red-600">
                    <span onClick={resetConsole} className="mt-10 text-7xl border-2 border-red-600 cursor-pointer">To Do List</span>
                    <div className="w-full flex justify-center mt-5">
                        <input type="text" className="h-20 w-1/2 border-2 border-black text-4xl rounded-xl" />
                        <button className="w-20 ml-5 text-4xl border-2 border-black rounded-xl">Add</button>
                    </div>
                    <div id="tasks-container" className="h-full w-full flex flex-col items-center mt-5 border-2 border-red-600">
                        <div className="h-24 w-1/2 flex flew-row mt-5 border-2 border-red-600">
                            <div className="h-full w-2/3 border-2 border-red-600">
                                to do task
                            </div>
                            <button className="h-full w-1/3 border-2 border-red-600">Delete</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoList;