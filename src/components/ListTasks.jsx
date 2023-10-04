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
    }, [tasks])

    return <div>List</div>;
}

export default ListTasks;
