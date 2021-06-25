import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from '../UserCard/UserCard'

const UserList = () => {
    const [userList, setUserList] = useState([])
    const getUsers = () => {

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setUserList(response.data))
            .catch((error) => console.log(error))

    }
    useEffect(() => {
        getUsers();
    }, [])
    console.log("list", userList)
    return (
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
            {
                userList.map((user) => <UserCard user={user} />)
            }

        </div>
    )
}

export default UserList
