"use client";

import React, { useEffect, useState } from 'react';
import User from "../components/users"

// Define the User type
interface User {
  user_id: number;
  email_address: string;
  user_name: string;
}

const Dashboard : React.FC = () => {
    const [users, setUsers] = useState<User[]>([]); 
    useEffect(() => {
        fetch("http://localhost:3000/api/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data: User[]) => setUsers(data));
      }, []);

    return (
        <div>
          <h1>User List</h1>
          {users.length > 0 ? (
            users.map((user) => <User key={user.user_id} user={user} />)
          ) : (
            <p>Number of users = </p>
          )}
        </div>
      );
}

export default Dashboard;