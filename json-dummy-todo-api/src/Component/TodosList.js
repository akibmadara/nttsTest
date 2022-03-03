const TodosList =({todos})=>{
    return(
        <ul className="list-group">
        {todos.map((posts)=>(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {posts.name } :   {posts.email }

        </li>
        ))}

        </ul>
    )
}

export default TodosList;