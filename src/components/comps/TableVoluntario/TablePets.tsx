import { Button } from "@/components/ui/button";
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
import Link from "next/link";

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

export default function TablePets({ voluntarios, headers, deleteFunc }: any) {
  return (
    <Table className="font-white text-white">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Nome</TableHead>
          <TableHead>Idade</TableHead>
          <TableHead>Porte</TableHead>
          <TableHead>Características</TableHead>
          <TableHead>Data de entrada</TableHead>
          <TableHead>Editar</TableHead>
          <TableHead>Deletar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {voluntarios?.length > 0 &&
          voluntarios?.map((voluntario: any) => (
            <TableRow key={voluntario.id}>
              <TableCell>{voluntario.name}</TableCell>
              <TableCell className="font-medium">{voluntario.age}</TableCell>
              <TableCell>{voluntario.porte}</TableCell>
              <TableCell>{voluntario.characteristics}</TableCell>
              <TableCell>{formatDate(voluntario.entryDate)}</TableCell>
              <TableCell>
                <Link href={`/cachorros/editar?id=${voluntario.id}`}>
                  <Button>Editar</Button>
                </Link>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    deleteFunc(voluntario.id);
                  }}
                >
                  Deletar
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
      <TableFooter className="bg-slate-900 w-full">
        <TableRow>
          <TableCell colSpan={6}>Total de Pets</TableCell>
          <TableCell className="text-right">{voluntarios.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
