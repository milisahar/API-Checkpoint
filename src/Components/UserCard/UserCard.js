import React from 'react'
import { Card } from 'react-bootstrap';

const UserCard = ({ user }) => {
    return (
        <div>

            <Card border="success" style={{ width: '18rem' }}>
                <Card.Header>{user.name}</Card.Header>
                <Card.Body>
                    <Card.Title>Success Card Title</Card.Title>
                    <Card.Text>
                        <p className="card-text">{user.email}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />

        </div>
    )
}

export default UserCard
