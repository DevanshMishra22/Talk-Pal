import React from "react";
import { Helmet } from "react-helmet-async";
const Title = ({
  title = "Talk Pal",
  description = "This is a Chat App called TalkPals",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
