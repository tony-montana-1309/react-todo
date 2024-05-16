import React, { useState, useEffect } from "react";
import style from "./Todo.module.css";
import axios from "axios";

function Todo({ settodoTask, todos, settodos, todoTask }) {

    const [data, setdata] = useState([]);

    const todoTaskHandler = (e) => {
        settodoTask(e.target.value)
    };
    const SubmitTodoHandler = (e) => {
        axios.get("http://localhost:8000/Todo-Tasks")
            .then((result) => {
                setdata(result.data.tasks);
            })
            .catch((error) => {
                setdata(Error = 404);
            })
        e.preventDefault();
        settodos([
            ...todos,
            {
                text: todoTask, id: Date.now(), completed: false,
            }
        ]);
        settodoTask("");
        
    }

    function deliteHandler() {
        axios.delete("http://localhost:8000/Todo-Tasks")
            .then((result) => {
                console.log("delete")
            })
            .catch(() => {
                console.log("error");
            })
    }

    //completed

    function EditHandler(result) {
        axios.patch("http://localhost:8000/Todo-Tasks", {
            completed: true,
        })
    }



    return (
        <div className={style.todo}>
            <div className={style.topTodo}>
                <div className={style.forTop}>
                    <div className={style.textTodo}>T O D O</div>
                    <div className={style.DarkLight} id="Lightside">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bibi-sun-fill" viewBox="0 0 16 16">
                            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                        </svg>
                    </div>
                </div>
                {/**/}
                <div className={style.sendBox}>
                    <input className={style.icon} type="text" value={todoTask} placeholder="Create a new todo" onChange={todoTaskHandler} />
                    <div className={style.submit} onClick={SubmitTodoHandler} type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bibi-send-check" className={style.color} viewBox="0 0 16 16" color="#ffff">
                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372zm-2.54 1.183L5.93 9.363 1.591 6.602z" />
                            <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686" />
                        </svg>
                    </div>
                </div>
                <div className={style.todoList}>
                    <ul className={style.listPart}>
                        {
                            data.map((result) => (
                                <li key={result.id}>
                                    <div className={style.textCircel} onClick={EditHandler}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bibi-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                        </svg>
                                        <div className={style.Text}>{result.text}</div>
                                    </div>
                                    <div onClick={deliteHandler}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                                        </svg>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <div className={style.items}>
                        <p>
                            items left
                        </p>
                        <p>Clear Completed</p>
                    </div>
                </div>
                <div className={style.Grouping}>
                    <p className={style.all}>All</p>
                    <p>Active</p>
                    <p>Completed</p>
                </div>
            </div>
        </div>
    )
}


export default Todo;