import React, { useState } from "react";
import { axios } from "../../../connection/axios";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import INITDATA from "../../../data/user.create.data";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  Radio,
  RadioGroup,
  Select,
  FormHelperText,
  MenuItem,
  Button,
} from "@material-ui/core";

export default function AddressForm(props) {
  const { userName, NIC, location, userId, role, status } = props.userValues;

  const errors = props.userErrors;

  const dirty = props.userDirty;

  const handleOnChange = props.handleChanges;

  console.log("Errors ==>", errors);
  console.log("dirty ==>", dirty);

  // const getUser = async () => {
  //   const response = await axios
  //     .get("/user/getuser/10/kumara")
  //     .catch((err) => console.log("Error ", err));
  //   if (response) {
  //     console.log(response.data);
  //   }
  // };

  /*Drop down list items mapping*/
  const INITLOCATIONS = INITDATA.LOCATIONS.map((data) => (
    <MenuItem key={data.title} value={data.title}>
      {data.title}
    </MenuItem>
  ));

  const INITROLES = INITDATA.ROLES.map((data) => (
    <MenuItem key={data.title} value={data.title}>
      {data.title}
    </MenuItem>
  ));

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        User Form
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <InputLabel htmlFor="age-native-simple">Location</InputLabel>
          <FormControl fullWidth>
            <Select
              autoFocus
              fullWidth
              name="location"
              id="location"
              value={location}
              defaultValue=""
              onChange={handleOnChange}
            >
              {INITLOCATIONS}
            </Select>
            <FormHelperText>
              {Boolean(errors.location && dirty.location)
                ? errors.location
                : ""}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            error={Boolean(errors.userId && dirty.userId)}
            id="standard-basic"
            label="User ID"
            name="userId"
            value={userId}
            onChange={handleOnChange}
            helperText={
              Boolean(errors.userId && dirty.userId) ? errors.userId : ""
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            error={Boolean(errors.userName && dirty.userName)}
            id="standard-basic"
            label="User Name"
            name="userName"
            value={userName}
            onChange={handleOnChange}
            helperText={
              Boolean(errors.userName && dirty.userName) ? errors.userName : ""
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            error={Boolean(errors.NIC && dirty.NIC)}
            id="standard-basic"
            label="NIC"
            name="NIC"
            value={NIC}
            onChange={handleOnChange}
            helperText={Boolean(errors.NIC && dirty.NIC) ? errors.NIC : ""}
          />
        </Grid>

        <Grid item xs={12}>
          <InputLabel htmlFor="age-native-simple">Role</InputLabel>
          <FormControl fullWidth error={Boolean(errors.role && dirty.role)}>
            <Select
              fullWidth
              name="role"
              id="role"
              value={role}
              defaultValue=""
              onClick={handleOnChange}
            >
              {INITROLES}
            </Select>
            <FormHelperText>
              {Boolean(errors.role && dirty.role) ? errors.role : ""}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl>
            <FormLabel>Status</FormLabel>
            <RadioGroup name="status" value={status} onClick={handleOnChange}>
              <FormControlLabel
                value="active"
                control={<Radio />}
                label="Active"
              />
              <FormControlLabel
                value="inactive"
                control={<Radio />}
                label="Inactive"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
