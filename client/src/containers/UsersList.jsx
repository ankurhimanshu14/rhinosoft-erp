import DataList from '../components/DataList';

const heads = [
      { label: 'Employee ID', id: 'employeeId' },
      { label: 'Full Name', id: 'fullName'},
      { label: 'Email', id: 'email'},
      { label: 'Username', id: 'username'}
];

const data = [
  {
    row: [
      
    ]
  }
]

const UsersList = () => {
  return (
    <DataList heads = {heads} body = {data} />
)
}

export default UsersList;