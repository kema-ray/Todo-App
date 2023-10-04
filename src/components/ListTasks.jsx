import { useEffect, useState } from "react";

const ListTasks = ({ tasks, setTasks }) => {

    const [todos, setTodos] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [completed, setCompleted] = useState([]);

    useEffect(() => {
        const filterTodos = tasks.filter(task => task.status === "todo");
        const filterInProgress = tasks.filter(task => task.status === "inprogress");
        const filterCompleted = tasks.filter(task => task.status === "completed");

        setTodos(filterTodos);
        setInProgress(filterInProgress);
        setCompleted(filterCompleted);
    }, [tasks]);

    const statuses = ["todo", "inprogress", "completed"]

    return (
        <div className="flex gap-16">
            {statuses.map((status, index) => (
                <Section 
                    key={index} 
                    status = {status} 
                    tasks={tasks} 
                    setTasks={setTasks} 
                    todos={todos} 
                    inProgress={inProgress} 
                    completed={completed} 
                />
            ))}
        </div>
    );
}

export default ListTasks;

const Section = ({status, tasks, setTasks, todos, inProgress, completed}) => {
    let text = "Todo";
    let bg = "bg-red-500";
    let tasksToMap = todos;

    if (status === "inprogress") {
        text = "In Progress";
        bg = "bg-purple-500";
        tasksToMap = inProgress;
    }

    if (status === "completed") {
        text = "completed";
        bg = "bg-green-500";
        tasksToMap = completed;
    }

    return (
        <div className={`w-64`}>
           <Header text={text} bg={bg} count={tasksToMap.length} /> List
        </div>
    )
}

const Header = ({ text, bg, count}) => {
    return (
        <div className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}>
           {text}
           <div className="ml-2 bg-white h-5 w-5 text-black rounded-full flex items-center justify-center">{count}</div> 
        </div>
    )
}
