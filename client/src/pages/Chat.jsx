import React, { Fragment, useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { Stack, IconButton } from "@mui/material";
import { grayColor } from "../constants/color";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponent";
import FileMenu from "../components/dailogs/FileMenu";
import { sampleMessage } from "../constants/sampleData";
import MessageComponent from "../components/shared/MessageComponent";
const user = {
  _id: "idhqifhqkf",
  name: "Devansh Mishra",
};
const Chat = () => {
  const containerRef = useRef(null);
  return (
    <Fragment>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        height={"90%"}
        bgcolor={grayColor}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {sampleMessage.map((i) => (
          <MessageComponent message={i} user={user} />
        ))}
      </Stack>
      <form style={{ height: "10%" }}>
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
          bgcolor={"#2f2b2b"}
        >
          <IconButton
            sx={{
              rotate: "30deg",
              position: "absolute",
              left: "1rem",
            }}
          >
            <AttachFileIcon
              sx={{
                color: "#000",
              }}
            />
          </IconButton>
          <InputBox
            placeholder="Type Message Here..."
            sx={{
              "&::placeholder": {
                color: "black",
                opacity: 0.5,
              },
            }}
          />
          <IconButton
            type="submit"
            sx={{
              backgroundColor: "green",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                backgroundColor: "darkgreen",
              },
            }}
          >
            <SendIcon
              sx={{
                color: "#ffffff",
              }}
            />
          </IconButton>
        </Stack>
      </form>
      <FileMenu></FileMenu>
    </Fragment>
  );
};
export default AppLayout()(Chat);
