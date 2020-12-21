import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ButtonGroup variant="contained" color="primary">
        <Button startIcon={<SaveIcon />}>Production</Button>
        <Button startIcon={<DeleteIcon />}>Development</Button>
      </ButtonGroup>
    );
  }
}

export default Menu;
