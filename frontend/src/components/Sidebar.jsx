import React from 'react';

import {
  Link,
  Collapse,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  Divider,
  ListItemText
} from '@material-ui/core';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

export default function Sidebar({items}) {
  const [open, setOpen] = React.useState(false);

  const handleClick = (item) => {
    let newData = { ...open, [item]: !open[item]};
    setOpen(newData);
  };

  return (
    <List
    disablePadding
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
      <ListSubheader component="div" id="nested-list-subheader">
        Menu
      </ListSubheader>
      }
    >
      {items.map(({label, name, items: subItems, ...rest}) => (
        <>
        <ListItem key={name} disableGutters button onClick={() => handleClick(name)}>
          <ListItemText primary={label} />
          {open[name] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
          {
            Array.isArray(subItems) ? (
              <>
              <Collapse in={open[name]} timeout="auto" unmountOnExit>
              <List disablePadding dense>
                {subItems.map((subItem) => (
                  <ListItem style={{color: 'black'}} key={subItem.name} button component={Link} href={subItem.link}>
                    <ListItemIcon>{subItem.icon}</ListItemIcon>
                    <ListItemText primary={subItem.label} />
                  </ListItem>
                ))}
              </List>
              </Collapse>
              <Divider />
              </>
            ) : null
          }
      </>
      ))}
    </List>
  )
}