import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';

const items = [
    {
      name: 'admin',
      label: 'Admin',
      items: [
        { name: 'createAccount', label: 'Create Account', icon: <AddOutlinedIcon />, link: "/users/register" },
        { name: 'profile', label: 'Profile', icon: <AccountCircleOutlinedIcon />, link: "/users/profile" },
        { name: 'changePassword', label: 'Change Password', icon: <VisibilityOffOutlinedIcon />, link: "users/changePassword" },
        { name: 'userList', label: 'All Users', icon: <DescriptionOutlinedIcon />, link: "/admin/userList" }
      ],
    },
    {
      name: 'gateEntry',
      label: 'Gate Entry',
      items: [
        { name: 'createGRN', label: 'Create GRN', icon: <AddOutlinedIcon />, link: "/gateEntry/createGRN" },
        { name: 'reports', label: 'Reports', icon: <DescriptionOutlinedIcon />, link: "/gateEntry/reports" },
      ],
    },
    {
      name: 'rmStore',
      label: 'Raw Material Store',
      items: [
        { name: 'approveSteel', label: 'Approve Steels', icon: <AssignmentTurnedInOutlinedIcon />, link: "/rmStore/approveSteels" },
        { name: 'inventory', label: 'Inventory', icon: <DescriptionOutlinedIcon />, link: "/rmStore/inventory" },
      ],
    },
    {
      name: 'production',
      label: 'Production',
      items: [
        { name: 'cutting', label: 'Cutting', icon: <AddOutlinedIcon />, link: "/production/cutting" },
        { name: 'forging', label: 'Forging', icon: <AddOutlinedIcon />, link: "production/forging" },
        { name: 'heatTreatment', label: 'Heat Treatment', icon: <AddOutlinedIcon />, link: "/production/heatTreatment" },
        { name: 'shotBlasting', label: 'Shot Blasting', icon: <AddOutlinedIcon />, link: "production/shotBlasting" },
      ],
    },
    {
      name: 'genStore',
      label: 'General Store',
      items: [
        { name: 'createGRN', label: 'Create GRN', icon: <AddOutlinedIcon />, link: "/generalStore/createGRN" },
        { name: 'reports', label: 'Reports', icon: <AddOutlinedIcon />, link: "/generalStore/reports" },
        { name: 'inventory', label: 'Inventory', icon: <AddOutlinedIcon />, link: "/generalStore/inventory" },
      ],
    }
  ];

export default items;