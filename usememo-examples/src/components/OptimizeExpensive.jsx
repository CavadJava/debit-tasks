import { useState, useMemo } from 'react';

// 2. useMemo for Optimizing Expensive Computations
// In the FilteredUsers and SortedList components, useMemo ensures that the filtering or sorting of data is recalculated only when the relevant state (searchTerm or sortOrder) changes.
// const users = ["Alice", "Bob", "Charlie", "David", "Eve"];


const FilteredUsers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const users = ["Alice", "Bob", "Charlie", "David", "Eve"];

    const filteredUsers = useMemo(() => {
        return users.filter((user) =>{
            return user.toLowerCase().includes(searchTerm.toLowerCase());
        })
    });
    return (
        <div>
            <input
                type = "text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Users"
            />
            <ul>
                {
                    filteredUsers.map((user, index) =>{
                        return <li key={index}>{user}</li>
                    })
                }
            </ul>
        </div>
    )
}
const SortedList = () =>{
    const [sortOrder, setSortOrder] = useState('asc');
    const numbers = [5, 2, 8, 1, 9];

    const sortedNumbers = useMemo(() => {
        return [...numbers].sort((a, b) =>{
            return sortOrder === 'asc' ? a-b : b-a;
        })
    }, [sortOrder]);
    return (
        <div>
            <button onClick={() => setSortOrder(sortOrder ==='asc' ? 'desc' : 'asc')}>
                Toggle Sort ({sortOrder})
            </button>
            <p>{sortedNumbers.join(', ')}</p>   
        </div>
    )
}

export default function OptimizeExpensive() {
    return (
        <div>
            <FilteredUsers />
            <SortedList />
        </div>
    );
}