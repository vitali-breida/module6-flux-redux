import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";
import {
  selectIsDeleteMovieDialogVisible,
  selectEditedMovieId,
  dialogDeleteMovie
} from "../../../features/dialogs/dialogsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function DeleteMovieDialog(props) {
  const isDeleteMovieDialogVisible = useSelector(
    selectIsDeleteMovieDialogVisible
  );
  const editedMovieId = useSelector(selectEditedMovieId);
  const dispatch = useDispatch();

  const handleClose = (e) => {
    dispatch(dialogDeleteMovie("close"));
  };

  return (
    <div>
      <Dialog
        open={isDeleteMovieDialogVisible}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          DELETE MOVIE {editedMovieId}
        </DialogTitle>
        <DialogContent>
          Are you sure you want to delete this movie?
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onSubmit} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

DeleteMovieDialog.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
