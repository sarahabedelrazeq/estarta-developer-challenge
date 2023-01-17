import React from "react";
import useUrlParams from "hooks/useUrlParams";
import { Layouts, Filter, DataTable } from "components";
import moment from "moment";

export default function LoggerSearch({ data }: { data: Array<object> }) {
  const [rows, setRows] = React.useState<Array<object>>([]);
  const { params, setParams } = useUrlParams();

  const inputs = React.useMemo(
    () => [
      { id: "employee-name", name: "userAgent", label: "Employee Name" },
      { id: "action-type", name: "actionType", label: "Action Type" },
      {
        id: "application-type",
        name: "applicationType",
        label: "Application Type",
      },
      { id: "from-date", name: "fromDate", label: "From Date" },
      { id: "to-date", name: "toDate", label: "To Date" },
      { id: "application-id", name: "applicationId", label: "application Id" },
    ],
    []
  );

  React.useEffect(() => {
    if (Object.values(params).length > 0) {
      const rowsFilter = data.filter((item) => {
        let test = true;
        console.log(
          "moment :>> ",
          moment(item.creationTimestamp).format("YYYY-MM-DD")
        );
        for (const key in params) {
          if (
            key === "from-date" &&
            params[key]?.length > 0 &&
            moment(item.creationTimestamp).format() < moment(params[key][0]).format()
          )
            test = false;
          // if(key === "to-date")
          if (
            !(
              item[key] &&
              params[key]?.length > 0 &&
              item[key].toLowerCase().includes(params[key][0].toLowerCase())
            )
          ) {
            test = false;
          }
        }
        return test;
      });
      setRows(rowsFilter);
    } else setRows(data);
  }, [data, params, setParams]);

  return (
    <Layouts.Main
      links={[
        { link: "/", label: "Home" },
        { link: "/administration", label: "Administration" },
      ]}
      id="logger-search"
      title="Logger Search Page"
    >
      <section style={{ marginBottom: "25px" }}>
        <Filter
          inputs={inputs}
          values={params}
          onChange={(name: string, value: string) =>
            setParams({ ...params, [name]: value })
          }
        />
      </section>
      <section>
        <DataTable rows={rows} />
      </section>
    </Layouts.Main>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f"
  );
  const jsonRes = await res.json();
  const data = await jsonRes?.result?.auditLog;

  return {
    props: { data },
  };
}
