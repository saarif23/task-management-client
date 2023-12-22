import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const CreateTask = () => {
    const { user } = useAuth();
    console.log(user.email);
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data);
        if (data) {
            const taskData = {
                name: data.name,
                priority: data.priority,
                deadline: data.deadline,
                task_des: data.task_des,
                user_email: user.email

            }
            const taskResponse = await axiosSecure.post('/tasks', taskData)
            if (taskResponse.data) {
                reset();
                return toast.success("New Task Add Successfully")
            }
        }

    }

    return (
        <div className='p-10 text-center lg:w-2/3 mx-auto '>
            <h3 className='text-4xl text-white font-bold mb-5'>Create New Task </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control   text-left">
                    <label className="label text-white">
                        <span className="label-text pl-2">Task Title</span>
                    </label>
                    <input {...register("name", { required: true })} type="text" placeholder="Type task title" className="py-3 px-2 mt-2 w-full bg-slate-950 bg-blend-overlay bg-opacity-50 rounded-md text-gray-500  focus:border-2 focus:border-fuchsia-500 " required />
                </div>
                <div className="flex flex-col lg:flex-row lg:gap-10 ">
                    <div className="form-control flex-1 text-gray-500  text-left  mt-2  ">
                        <label className="label text-white">
                            <span className="label-text">Priority</span>
                        </label>
                        <select {...register("priority", { required: true })} defaultValue={'default'} className="select py-3 mt-2 px-2 w-full bg-slate-950 bg-blend-overlay bg-opacity-50 rounded-md  text-gray-100 focus:border-2 focus:border-fuchsia-500 ">
                            <option disabled value='default'>Select a priority</option>
                            <option value={"low"}>Low</option>
                            <option value={"moderate"}>Moderate</option>
                            <option value={"high"}>High</option>

                        </select>
                    </div>
                    <div className="form-control flex-1 text-left  mt-2 ">
                        <label className="label text-white">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input {...register("deadline", { required: true })} type="date" placeholder="deadline" className="py-3 mt-2 px-2 w-full bg-slate-950 bg-blend-overlay bg-opacity-50 rounded-md text-gray-500   focus:border-2 focus:border-fuchsia-500  " />
                    </div>
                </div>
                <div className="form-control text-left flex-1 mt-2">
                    <label className="label text-white">
                        <span className="label-text">Task Description </span>
                    </label>
                    <textarea {...register("task_des", { required: true })} placeholder="Task Description" className="textarea textarea-lg w-full py-3 px-2  text-gray-500 mt-2 bg-slate-950 bg-blend-overlay bg-opacity-50 rounded-md   focus:border-2 focus:border-fuchsia-500 " ></textarea>
                </div>

                <div className=" cursor-pointer hover:bg-white hover:text-slate-900 hover:font-bold text-white  bg-slate-950 bg-blend-overlay bg-opacity-50 rounded-md  mt-2 w-full py-3 px-10" >
                    <input type="submit" className="cursor-pointer " value='Add New Task' required />

                </div>
            </form>
        </div>
    );
};

export default CreateTask;