// MATERIAL UI
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function FormNavigation(props) {
  return (
    <>
      <Box width="100%" height="100%">
        <Stack direction="row" spacing={2} justifyContent="space-between">
          {props.hasPrevious && (
            <Button variant="outlined" onClick={props.onBackClick}>
              Back
            </Button>
          )}
          <Button type="submit" variant="outlined">
            {props.isLastStep ? "Submit" : "Next"}
          </Button>
        </Stack>
      </Box>
    </>
  );
}
