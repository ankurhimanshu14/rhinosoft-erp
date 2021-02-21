import DataList from '../components/DataList';

const heads = [
      { label: 'Employee ID', id: 'employeeId' },
      { label: 'Full Name', id: 'fullName'},
      { label: 'Email', id: 'email'},
      { label: 'Username', id: 'username'}
];

const data = [
  {
      key: 'user1',
      row: [
          { colName: 'employeeId', result: '1' },
          { colName: 'fullName', result: 'Ankur Himanshu' },
          { colName: 'email', result: 'qa@mwspl.co.in' },
          { colName: 'username', result: 'ankur123'}
      ]
  },
  {
    key: 'user2',
    row: [
        { colName: 'employeeId', result: '2' },
        { colName: 'fullName', result: 'Pawan Kumar' },
        { colName: 'email', result: 'qa@mwspl.co.in' },
        { colName: 'username', result: 'pawan123'}
    ]
  },
  {
    key: 'user3',
    row: [
        { colName: 'employeeId', result: '3' },
        { colName: 'fullName', result: 'Kanhaiya Singh' },
        { colName: 'email', result: 'qa@mwspl.co.in' },
        { colName: 'username', result: 'kanhaiya123'}
    ]
  },
];

const UsersList = () => {
  return (
    <DataList heads = {heads} body = {data} caption={"As on " + Date()} title="List of Users" />
)
}

export default UsersList;