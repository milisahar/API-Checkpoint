import React from 'react'
import { Card } from 'react-bootstrap';

const UserCard = ({ user }) => {
    return (
        <div style={{ marginBottom: "60px" }}>

            <Card border="success" style={{ width: '350px', height: "", color: "black" }}>
                <Card.Header style={{ color: "blue", height: "40px", fontSize: "25px", marginLeft: "40px" }}>{user.name}</Card.Header>
                <p></p>

                <Card.Body >
                    <Card.Text >
                        <p>Email: {user.email}</p>
                        <p className="card-text">Number: {user.phone}</p>
                        <p>Company: {user.company.name}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />

        </div>
    )
}

export default UserCard
