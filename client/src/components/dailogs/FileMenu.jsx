import { Menu } from "@mui/material";
import React from "react";

const FileMenu = ({ anchorEl }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      sx={{
        width: "10rem",
      }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
      voluptatum officia eius reiciendis itaque dignissimos, soluta recusandae
      similique magni magnam.
    </Menu>
  );
};

export default FileMenu;
