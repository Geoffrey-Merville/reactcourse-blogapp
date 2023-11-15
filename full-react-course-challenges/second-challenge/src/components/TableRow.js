import TableData from "./TableData";

const TableRow = ({ item }) => {
  return (
    <tr>
      {Object.entries(item).map(([key, value]) => {
        return <TableData key={key} cellData={JSON.stringify(value)} />;
      })}
    </tr>
  );
};

export default TableRow;
