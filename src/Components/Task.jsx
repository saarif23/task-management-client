/* eslint-disable react/prop-types */

import { useDrag } from "react-dnd";


const Task = ({ task, index }) => {
    const [{isDragging}, drag] = useDrag(()=>({
        type: "object",
        item: {id: task?._id},
        collect: (monitor) =>({
            isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <div
        ref={drag}
        style={{border: isDragging ? "5px solid pink" : "0px"}}
        className="">
            <div className="text-white shadow-xl shadow-slate-950 p-5 h-[420px]">
                <div className="">
                    <p className="text-center p-3 shadow-lg shadow-slate-600 mb-5">Task : {index + 1}</p>
                    <h3 className="text-2xl font-bold text-orange-300 font  pb-5">{task.name}</h3>
                    <div className="flex flex-col justify-between ">
                        <p>Priority : {task.priority}</p>
                        <p>Deadline : {task.deadline}</p>
                    </div>
                    <p className="pt-5 text-justify ">Task Description : {task.task_des}</p>
                </div>
            </div>
        </div>
    );
};

export default Task;