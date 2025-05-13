import { useInputValidation } from "6pp";
import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";

const NewGroup = () => {
  const groupName = useInputValidation("");
  const [members, setMembers] = useState(sampleUsers);
  const [Selectedmembers, setSelectedMembers] = useState([]);
  const Selectmemberhandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currentelement) => currentelement !== id)
        : [...prev, id]
    );
  };
  const submitHandler = () => {};
  const closeHandler = () => {};

  return (
    <Dialog open onClose={closeHandler}>
      <Stack
        p={{ xs: "1rem", sm: "2rem" }}
        width={"25rem"}
        spacing={"2rem"}
        sx={{ backgroundColor: "#262626", color: "white" }}
      >
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>
        <TextField
          label="Group name"
          value={groupName.value}
          onChange={groupName.changeHandler}
          InputLabelProps={{
            style: { color: "white" },
          }}
          InputProps={{
            style: { color: "white" },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
        />

        <Typography textAlign={"center"} variant="body1">
          Select Members
        </Typography>
        <Stack>
          {members.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={Selectmemberhandler}
              isAdded={Selectedmembers.includes(i._id)}
            />
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
            onClick={submitHandler}
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
