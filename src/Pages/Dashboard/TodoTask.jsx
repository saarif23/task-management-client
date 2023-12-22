import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Task from "../../Components/Task";
import { useState } from "react";
import { useDrop } from "react-dnd";

const TodoTask = () => {
    const axiosSecure = useAxiosSecure();
    const [onGoingTask, setOnGoingTask] = useState([]);

    const { user } = useAuth();
    const { data: todoTasks = [], isPending, refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tasks?email=${user?.email}`)

            return res.data
        }
    })

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "object",
        drop: (item) => addToTask(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const addToTask = (id) => {
        const onGoingTaskList = todoTasks.filter(task => task._id === id)
        console.log(onGoingTaskList);
        setOnGoingTask(onGoingTaskList)
        // setOnGoingTask(onGoingTask => [...onGoingTask, onGoingTaskList[0]])
        // console.log(onGoingTask);

    };


    return (
        <>
            <div>
                <div className="text-center text-3xl font-bold text-orange-500 pt-5">
                    <p>Todo Task List</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
                    {
                        todoTasks.map((task, index) => <Task key={task._id} task={task} index={index}> </Task>)
                    }
                </div>
            </div>
            <div className="">
                <div className="text-center text-3xl font-bold text-orange-500 pt-5">
                    <p>On Going Task List</p>
                </div>
                <div ref={drop} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 ">
                    {
                        onGoingTask.map((task, index) => <Task key={task?._id} task={task} index={index}> </Task>)
                    }
                </div>
            </div>


        </>
    );
};

export default TodoTask;