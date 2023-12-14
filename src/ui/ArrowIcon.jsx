import {Box} from "@mui/material";

export default function ArrowIcon() {
  return (
    <Box position={"relative"} top={256}>
      <img
        width={32}
        height={32}
        className="icon-animation"
        src="/icons/arrow.svg"
        alt="Arrow icon to explore"
      />
    </Box>
  );
}
