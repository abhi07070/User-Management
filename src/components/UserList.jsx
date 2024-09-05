import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserList({ onDelete, onEdit }) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState('');

    // Fetch user list
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Error fetching users');
                setLoading(false);
            });
    }, []);

    if (error) return <div>{error}</div>;

    return (
        <>
            <h2>User List</h2>
            <div className="user-list">
                {loading ? (
                    // Skeleton loading placeholders
                    Array.from({ length: 12 }).map((_, index) => (
                        <div key={index} className="user-item skeleton">
                            <div className="skeleton-title"></div>
                            <div className="skeleton-text"></div>
                            <div className="skeleton-text"></div>
                            <div className="skeleton-btn-group">
                                <div className="skeleton-btn"></div>
                                <div className="skeleton-btn"></div>
                                <div className="skeleton-btn"></div>
                            </div>
                        </div>
                    ))
                ) : (
                    users.map(user => (
                        <div key={user.id} className="user-item">
                            <h3>Name: {user.name}</h3>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                            <div className="btn-group">
                                <Link to={`/userform/${user.id}`} onClick={() => onEdit(user)}>Edit</Link>
                                <button onClick={() => onDelete(user.id)}>Delete</button>
                                <Link to={`/user/${user.id}`}>Details</Link>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default UserList;
