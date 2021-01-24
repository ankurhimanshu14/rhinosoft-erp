import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    grid: {
        display:"flex",
        justifyContent:"center",
        position: "relative",
        height: 'auto',
        padding: '10vh 10vh 10vh 10vh'
    },
    paper: {
        marginTop: '20vh',
        padding: '5vh',
        width:'25%',
        height: '50%',
        textAlign: 'center',
        color: theme.palette.text.secondary,    
    },
    card: {
        width: '100%',
        height: '80vh',
    },
    buttonBlue:{
        textTransform: 'none',
        backgroundColor: '#1a73e8',
        color: 'white',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: 'white !important',
            color: '#1a73e8 !important'
        }
    },
    buttonWhite:{
        textTransform: 'none',
        backgroundColor: 'white',
        color: '#1a73e8',
        border:'none',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: '#1a73e8 !important',
            color: 'white !important'
        }
    }
}));

export default useStyles;