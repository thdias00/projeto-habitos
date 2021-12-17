import { DataGrid } from "@mui/x-data-grid";

export default function Participantes() {
  const groups = JSON.parse(localStorage.getItem("@happyhabits:group")) || {};
  const data = {
    columns: [
      {
        field: "username",
        headerName: "Nome",
        width: 150,
      },
      {
        field: "email",
        headerName: "Contato",
        width: 300,
      },
    ],
    rows: groups.group.users_on_group,
  };

  return (
    <div style={{ height: "40%", width: "100%" }}>
      <DataGrid
        pagination
        {...data}
        sx={{ background: "#FFFFFF", marginTop: "10px" }}
      />
    </div>
  );
}
