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
            {statuses.map((status, index) => <Section key={index} status = {status} />)}
        </div>
    );
}

export default ListTasks;

const Section = ({status}) => {
    return (
        <div>
            <h2>{status}</h2> List
        </div>
    )
}
