
function Task(description) {

    return (
        <>
             <div className="h-24 w-1/2 flex flew-row mt-5 border-2 border-red-600">
                <div className="h-full w-2/3 border-2 border-red-600">
                    {description}
                </div>
                <button className="h-full w-1/3 border-2 border-red-600">Delete</button>
            </div>
        </>
    )
}

export default Task;