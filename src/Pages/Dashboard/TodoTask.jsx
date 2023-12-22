import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const TodoTask = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: todoTasks = [], isPending, refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tasks?email=${user?.email}`)
            console.log(res);
            return res.data
        }
    })
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
            {
                todoTasks.map((task, index) => <div key={task._id} className="">

                    <div className="text-white shadow-xl shadow-slate-950 p-5 h-[420px]">
                        <div className="">
                            <p className="text-center p-3 shadow-lg shadow-slate-600 mb-5">Task : {index+1}</p>
                            <h3 className="text-2xl font-bold text-orange-300 font  pb-5">{task.name}</h3>
                            <div className="flex flex-col justify-between ">
                                <p>Priority : {task.priority}</p>
                                <p>Deadline : {task.deadline}</p>
                            </div>
                            <p className="pt-5 text-justify ">Task Description : {task.task_des}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default TodoTask;