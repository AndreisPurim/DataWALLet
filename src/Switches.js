import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';

export default function SwitchesGroup(props) {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{props.title}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={state.gilad} onChange={handleChange} name="gilad" />}
          label="Email"
        />
        <FormControlLabel
          control={<Switch checked={state.jason} onChange={handleChange} name="jason" />}
          label="Geolocation"
        />
        <FormControlLabel
          control={<Switch checked={state.antoine} onChange={handleChange} name="antoine" />}
          label="Photo Galery"
        />
      </FormGroup>
    </FormControl>
  );
}
