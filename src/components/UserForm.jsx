import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserForm() {
    const { id } = useParams();
    const [user, setUser] = useState({ name: '', email: '', phone: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Fetch user data when the component mounts
    useEffect(() => {
        if (id) {
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(response => setUser(response.data))
                .catch(error => setError('Error fetching user data'));
        }
    }, [id]);

    // Handle form input changes
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            // Update existing user
            axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user)
                .then(() => {
                    alert('User updated!');
                    navigate('/')
                })
                .catch(() => alert('Error updating user'));
        } else {
            // Create new user
            axios.post('https://jsonplaceholder.typicode.com/users', user)
                .then(() => {
                    alert('User created!');
                    navigate('/');
                })
                .catch(() => alert('Error creating user'));
        }
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{id ? 'Edit User' : 'Create User'}</h2>
            {error && <p>{error}</p>}
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Name"
                required
            />
            <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
            />
            <button type="submit">{id ? 'Update User' : 'Create User'}</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
    );
}

export default UserForm;
