import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        maxWidth: '250px'
    },
    button:{
        textTransform: 'none',
        backgroundColor: '#1a73e8',
        color: 'white',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: 'white !important',
            color: '#1a73e8 !important'
        }
    }
});

export default useStyles;