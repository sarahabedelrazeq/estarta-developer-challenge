import { Layouts } from "components";

export default function LoggerSearch() {
  return (
    <Layouts.Main
      links={[
        { link: "/", label: "Home" },
        { link: "/administration", label: "Administration" },
      ]}
      id="logger-search"
      title="Logger Search Page"
    >
      Logger Search
    </Layouts.Main>
  );
}
