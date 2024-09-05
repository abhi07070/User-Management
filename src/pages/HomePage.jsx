import { useState } from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import axios from 'axios';

function HomePage() {
    const [editingUser, setEditingUser] = useState(null);

    // Handle delete action
    const handleDelete = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(() => alert('User deleted'))
            .catch(() => alert('Error deleting user'));
    };

    // Handle edit action
    const handleEdit = (user) => {
        setEditingUser(user);
    };


    return (
        <div>
            {/* User list component */}
            <UserList onDelete={handleDelete} onEdit={handleEdit} />
        </div>
    );
}

export default HomePage;
