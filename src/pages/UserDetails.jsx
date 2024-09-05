import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function UserDetailsPage() {
    // Get user ID from URL parameters
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    // Fetch user details
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => setUser(response.data))
            .catch(() => setError('Error fetching user details'));
    }, [id]);

    if (error) return <div>{error}</div>;
    if (!user) return (
        <div className="spinner-container">
            <div className="spinner"></div>
        </div>
    );

    return (
        <div className="user-details">
            <h2>User Detail</h2>
            <div className="user-info">
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <p>Company: {user.company.name}</p>
            </div>
            <Link to="/">Back to User List</Link>
        </div>
    );
}

export default UserDetailsPage;
