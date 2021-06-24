import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from '../UserCard/UserCard'

const UserList = () => {
    const [userList, setUserList] = useState([])
    const getUsers = () => {

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => console.log("response", response))
            .then((response) => setUserList(response.data))
            .catch((error) => console.log(error))

    }
    useEffect(() => {
        getUsers();
    }, [])
    console.log("list", userList)
    return (
        <div>


        </div>
    )
}

export default UserList
