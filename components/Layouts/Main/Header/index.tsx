import React from "react";
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import { Link as LinkComponent } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
interface Props {
  title?: string;
  links: Array<{ link: string; label: string }>;
}

export default function Header({ links, title }: Props) {
  return (
    <header>
      <Breadcrumbs
        separator={<NavigateNext fontSize="small" />}
        aria-label="breadcrumb"
      >
        {links.map(({ link, label }) => (
          <LinkComponent
            component={Link}
            underline="hover"
            color="inherit"
            href={link}
          >
            {label}
          </LinkComponent>
        ))}
        <Typography color="text.primary">{title}</Typography>
      </Breadcrumbs>
    </header>
  );
}
