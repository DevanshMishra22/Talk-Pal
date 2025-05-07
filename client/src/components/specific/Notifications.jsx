import { Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import React from "react";
import { sampleNotification } from "../../constants/sampleData";

const Notifications = () => {
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notification</DialogTitle>
        {sampleNotification.length > 0 ? (
          <></>
        ) : (
          <Typography>No notification</Typography>
        )}
      </Stack>
    </Dialog>
  );
};

export default Notifications;
