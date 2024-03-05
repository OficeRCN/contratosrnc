// MATERIAL UI
import Typography from "@mui/material/Typography";

// WRITER
import Typewriter from "typewriter-effect";

export default function TextTyper(props) {
  return (
    <>
      <Typography
        variant="h5"
        sx={{ fontSize: { xs: "3rem", sm: "3rem", md: "3rem", lg: "5rem" } }}
      >
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(props.message)
              .pauseFor(7000)
              .deleteAll()
              .start();
          }}
        />
      </Typography>
    </>
  );
}
