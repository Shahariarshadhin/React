import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { id } = useParams();

    const [friend, setFriend] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    })
    return (
        <div>
            <h2>Details About Friend : {id}</h2>
            <h3>Name: {friend.name}</h3>
            <h3>Email: {friend.email}</h3>
            <p><small>Address : {friend.address?.city}</small></p>
        </div>
    );
};

export default FriendDetail;