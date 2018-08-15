import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { InputLabel, MenuItem, FormControl, Select, Input }from "@material-ui/core";

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  wcolor:{
    color:theme.palette.common.white,
  }
});

class FilterSelect extends React.Component {
  state = {
    genre: "",
    genresNames:['Action', 'Comedy', 'Thriller']
  };

  onChangeHandler = (event)=>{
    this.props.handleChange(event);
    this.setState({genre:event.target.value})
  }

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="genre-label-placeholder" className={classes.wcolor}>
            Genre
          </InputLabel>
          <Select
            value={this.state.genre}
            onChange={this.onChangeHandler}
            input={<Input name="genre" id="genre-label-placeholder" />}
            displayEmpty
            name="genre"
            className={classes.selectEmpty + ' ' + classes.wcolor}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value='Action'>Action</MenuItem>
            <MenuItem value='Thriller'>Thriller</MenuItem>
            <MenuItem value='Comedy'>Comedy</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

FilterSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FilterSelect);
