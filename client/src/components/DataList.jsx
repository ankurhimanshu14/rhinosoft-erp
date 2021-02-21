import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell, 
    TableBody,
    Typography
} from '@material-ui/core';

import CheckBox from '../components/CheckBox';

const DataList = ({heads, body, caption, title}) => {
    return (
        <TableContainer component={Paper}>
                <Typography gutterBottom variant="h5" component="h2" align="center">{title}</Typography>
        <Table size="small" aria-label="a dense table with sticky header" stickyHeader>
        <caption>{caption}</caption>
          <TableHead>
            <TableRow>
                <TableCell align="right">Select</TableCell>
                {heads.map((items) => (
                    <TableCell align="right" key={items.id}>{items.label}</TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            { body.map(({row, key, ...rest}) => (
              <TableRow>
                <TableCell align="right"><CheckBox name={key} id={key} /></TableCell>
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