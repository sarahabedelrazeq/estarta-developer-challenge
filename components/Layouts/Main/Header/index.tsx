import React from "react";
import Link from "next/link";
import {
  Breadcrumbs,
  Link as LinkComponent,
  Typography,
  Box,
} from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
interface Props {
  title?: string;
  links: Array<{ link: string; label: string }>;
}

export default function Header({ links, title }: Props) {
  return (
    <Box
      py={1}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.grey[400]}` }}
      component="header"
    >
      <Breadcrumbs
        separator={<NavigateNext fontSize="small" />}
        aria-label="breadcrumb"
      >
        {links.map(({ link, label }, index) => (
          <LinkComponent
            component={Link}
            underline="hover"
            color="inherit"
            href={link}
            key={index}
          >
            {label}
          </LinkComponent>
        ))}
        <Typography color="text.primary">{title}</Typography>
      </Breadcrumbs>
    </Box>
  );
}
