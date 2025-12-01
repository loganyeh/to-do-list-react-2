import { useState, useRef, useEffect, useContext } from "react";
import { MyContext } from "./MyContext";
import Task from "./Task";

function ToDoList() {
    // const {} = useContext(MyContext);
    const [taskCount, setTaskCount] = useState(3);
    const [tasks, setTasks] = useState([
        {id: 0, description: "Walk the dog", isComplete: false},
        {id: 1, description: "Take out the trash", isComplete: false},
        {id: 2, description: "Wash the dishes", isComplete: false},
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    const handleInputValue = (event) => {
        setInputValue(event.target.value);
    };

    const resetConsole = () => {
        console.clear();
        setInputValue('');
    };

    const addTask = () => {
        // handleInputValue();
        // had it here at first but didn't work when commented out the thing works
        if(inputValue === ""){
            window.alert(`Add a task`);
        } 
        else{
            setInputValue('');
            setTasks(task => [...task, {id: taskCount, description: inputValue, isComplete}]);
            setTaskCount(prev => prev + 1);
        }
    };

    return (
        <>
            <MyContext.Provider value={{setTasks, taskCount, setTaskCount, isComplete, setIsComplete}}>
                <div className="h-screen w-screen flex justify-center items-center border-2 border-red-600">
                    <div id="list-container" className="h-full w-1/2 flex flex-col items-center border-2 border-red-600">
                        {/* TITLE */}
                        <span onClick={resetConsole} className="mt-10 text-7xl border-2 border-red-600 cursor-pointer">To Do List</span>
                        {/* ADD TASK BAR */}
                        <div className="w-full flex justify-center mt-5">
                            <input onChange={handleInputValue} value={inputValue} type="text" className="h-20 w-1/2 border-2 border-black text-4xl rounded-xl" />
                            <button onClick={addTask} className="w-20 ml-5 text-4xl border-2 border-black rounded-xl">Add</button>
                        </div>

                        {/* TASK CONTAINER */}
                        <div id="tasks-container" className="h-full w-full flex flex-col items-center mt-5 border-2 border-red-600">

                            {/* TASKS */}
                            {tasks.map((task) => {
                                return <Task key={task.id} id={task.id} description={task.description} isComplete={task.isComplete}/>
                            })}

                        </div>
                    </div>
                </div>

            </MyContext.Provider>
        </>
    )
}

export default ToDoList;
