import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { memo } from "react";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../../constants/sampleData";
import { green } from "@mui/material/colors";
import { useInputValidation } from "6pp";

const NewGroup = () => {
  const Selectmemberhandler = () => {};
  const groupName = useInputValidation("");
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"}>New Group</DialogTitle>
        <TextField
          label="Group name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />
        <Typography textAlign={"center"} variant="body1">
          Select Members
        </Typography>
        <Stack>
          {sampleUsers.map((i) => (
            <UserItem user={i} key={i._id} handler={Selectmemberhandler} />
          ))}
        </Stack>
        <Stack
          direction={"row"}
          marginTop={"1rem"}
          justifyContent={"space-between"}
        >
          <Button
            variant="conatined"
            sx={{
              border: "1px solid green",
              color: "green",
              "&:hover": {
                backgroundColor: "darkgreen",
                color: "white",
                borderColor: "darkgreen",
              },
            }}
          >
            Create
          </Button>
          <Button variant="text" color="error">
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
