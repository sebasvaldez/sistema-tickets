import { useState } from 'react';
import { useTheme,} from '@mui/material/styles';
import {OutlinedInput,InputLabel, MenuItem ,FormControl, Select} from '@mui/material/';
import { useAuth } from '../../hooks/useAuth';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export const TechnicalList=()=> {

  const {allUsers} = useAuth();

 

  const technicalUsers= allUsers.filter(user=> user.role === "technical")


  const theme = useTheme();
  const [personName, setPersonName] =useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{  width: "100%",maxWidth: "400px", }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {technicalUsers.map((user) => (
            <MenuItem
              key={user._id}
              value={user.name + " " + user.lastname}
              style={getStyles(user.name, personName, theme)}
            >
              {user.name + " " + user.lastname}
            </MenuItem>
            
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
