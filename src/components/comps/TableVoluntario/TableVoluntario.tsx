import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

/*
        headers={["age", "city", "freeHours", "name"]}
*/
const formatDate = (data: any) => {
  let objectDate = new Date(data);

  let day = objectDate.getDate();
  console.log(day); // 23

  let month = objectDate.getMonth();
  console.log(month + 1); // 8

  let year = objectDate.getFullYear();
  console.log(year); // 2022

  return `${day}-${month}-${year}`;
};

export default function TableVoluntario({ voluntarios, headers }: any) {
  return (
    <Table className="font-white text-white">
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead className="w-[100px]">Idade</TableHead>
          <TableHead>Cidade</TableHead>
          <TableHead className="text-right">Horas disponíveis</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {voluntarios.map((voluntario: any) => (
          <TableRow key={voluntario.id}>
            <TableCell>{voluntario.name}</TableCell>
            <TableCell className="font-medium">
              {formatDate(voluntario.age)}
            </TableCell>
            <TableCell>{voluntario.city}</TableCell>
            <TableCell className="text-right">{voluntario.freeHours}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className="bg-slate-900">
        <TableRow>
          <TableCell colSpan={3}>Total de voluntários</TableCell>
          <TableCell className="text-right">{voluntarios.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
