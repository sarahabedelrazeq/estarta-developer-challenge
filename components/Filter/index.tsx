import React from "react";
import { Box, FormControl, InputBase, InputLabel, Stack, TextField } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

const InputField = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

interface Input {
  id: string;
  name: string;
  type?: string;
  label?: string;
  option?: string;
}

interface Props {
  inputs: Array<Input>;
  onChange: Function;
}

export default function Filter({ inputs, onChange }: Props) {
  return (
    <Stack direction="row" spacing={2}>
      {inputs.map(({ id, name, label, type }, index) => {
        if (type === "number")
          return (
            <FormControl variant="standard" key={index}>
              <InputLabel shrink htmlFor={id}>
                {label || ""}
              </InputLabel>
              <InputField
                onChange={(e) => onChange(name, e.target.value)}
                id={id}
              />
            </FormControl>
          );
        else
          return (
            <FormControl variant="standard" key={index}>
              <InputLabel shrink htmlFor={id}>
                {label || ""}
              </InputLabel>
              <InputField
                onChange={(e) => onChange(name, e.target.value)}
                id={id}
              />
            </FormControl>
          );
      })}
    </Stack>
  );
}
