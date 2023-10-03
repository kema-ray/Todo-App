const CreateTask = ({ tasks, setTasks }) => {
    return (
    <form>
        <input type="text" className="border-2 border-slate-400 bg-slate100 rounded-md 
        mr-4 h-12 w-64 px-1" />
        <button className="bg-cyan-500 rounded-md px-4 h-12 text-white">Create</button>
    </form>
    );
}

export default CreateTask;
