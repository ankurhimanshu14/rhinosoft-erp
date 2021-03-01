import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    grid: {
        display:"flex",
        justifyContent:"center",
        position: "relative",
        height: 'auto',
        padding: '10vh 10vh 10vh 10vh'
    },

    margin: {
        margin: theme.spacing(1)
    },
    paper: {
        padding: '5vh',
        width:'40%',
        height: '50%',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        width: '100%',
        height: '100vh',
    },
    button:{
        color: '#1976d2',
        border: '1px solid rgba(25, 118, 210, 0.5)',
    }
}));

export default useStyles;