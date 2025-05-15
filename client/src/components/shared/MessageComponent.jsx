import { Typography } from "@mui/material";
import React, { memo } from "react";
import { lightblue, orange } from "../../constants/color";
import moment from "moment";
import fileformat from "../../lib/features";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attactments = [], createdAt } = message;
  const TimeAgo = moment(createdAt).fromNow();

  const samesender = sender?._id === user?._id;
  return (
    <div
      style={{
        alignSelf: samesender ? "flex-end" : "flex-start",
        width: "fit-content",
        background: "#fff",
        color: "#000",
        borderRadius: "5px",
        padding: ".5rem",
      }}
    >
      {!samesender && (
        <Typography color={lightblue} variant="caption" fontWeight={"600"}>
          {sender.name}
        </Typography>
      )}
      {samesender && (
        <Typography color={orange} variant="caption" fontWeight={"600"}>
          Me
        </Typography>
      )}
      {content && <Typography>{content}</Typography>}
      {attactments.lenght > 0 &&
        attactments.map((attachment, index) => {
          const url = attachment.url;
          const file = fileformat;
          return (
            <Box>
              <a
                href=""
                download
                target="_blank"
                style={{ color: "black" }}
              ></a>
            </Box>
          );
        })}
      <Typography variant="caption" color="text.secondary">
        {TimeAgo}
      </Typography>
    </div>
  );
};

export default memo(MessageComponent);
