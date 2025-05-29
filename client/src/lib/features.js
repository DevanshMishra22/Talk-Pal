const fileFormat = (url = "") => {
  const fileExt = url.split(".").pop();
  if (fileExt === "mp4" || fileExt === "webm" || fileExt === "ogg")
    return "video";
  if (fileExt === "mp3" || fileExt === "m4a" || fileExt === "wav")
    return "audio";
  if (
    fileExt === "jpg" ||
    fileExt === "png" ||
    fileExt === "jpeg" ||
    fileExt === "gif"
  )
    return "image";

  return "file";
};
export default { fileFormat };
