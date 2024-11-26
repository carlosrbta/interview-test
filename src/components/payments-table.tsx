import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Payment } from "@/types/payment";
import { format } from "date-fns";

interface Props {
  data: Payment[];
  loading: boolean;
  error: string | null;
}

export function PaymentsTable({ data, loading, error }: Props) {
  const formatDate = (date: Date): string => {
    try {
      return format(new Date(date), "yyyy-MM-dd");
    } catch {
      return "Invalid date";
    }
  };

  const renderMessage = (message: string) => (
    <TableRow>
      <TableCell className="font-medium text-center" colSpan={4}>
        {message}
      </TableCell>
    </TableRow>
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Amount (USD)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loading && renderMessage("Loading...")}

        {!loading && error && renderMessage(error)}

        {!loading && !error && data.length === 0 && renderMessage("No results")}

        {!loading &&
          !error &&
          data.length > 0 &&
          data.map(({ id, date, description, amount }) => (
            <TableRow key={id}>
              <TableCell className="font-medium">{id}</TableCell>
              <TableCell>{formatDate(date)}</TableCell>
              <TableCell>{description}</TableCell>
              <TableCell className="text-right">${amount}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
