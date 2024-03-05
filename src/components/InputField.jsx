// MATERIAL UI
import TextField from "@mui/material/TextField";

// FORMIK
import { useField } from "formik";

export default function InputField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <TextField
      style={{ height: props.height }}
      fullWidth
      label={label}
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
}
