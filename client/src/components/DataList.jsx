import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell, 
    TableBody
} from '@material-ui/core';

import CheckBox from '../components/CheckBox';

import useStyles from '../customStyles';

const DataList = ({heads, body}) => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
                <TableCell align="right"><CheckBox name="selectSteel" id="selectSteels" /></TableCell>
                {heads.map((items) => (
                    <TableCell align="right" key={items.id}>{items.label}</TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            { body.map(({row, ...rest}) => (
              <TableRow>
                {row.map((subData) => (
                  <TableCell align = "right">{subData.result}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default DataList;