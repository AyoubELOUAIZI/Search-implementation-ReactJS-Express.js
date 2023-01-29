import './Table.css'
const Table = ({ Users }) => {
    return (
        <table className="table" border="1">
            <tbody>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email Address</th>
                    <th>Gender</th>
                </tr>
                {Users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;