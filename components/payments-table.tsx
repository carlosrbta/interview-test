import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Payment } from "@/types/payment"

interface Props {
    data: Payment[]
}

export function PaymentsTable({ data }: Props) {
    return <Table>
        <TableHeader>
            <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Amount</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <>
                {data.map(item => (
                    <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell className="text-right">${item.amount}</TableCell>
                    </TableRow>
                ))}

                {data.length === 0 && (
                    <TableRow>
                        <TableCell className="font-medium">No results</TableCell>
                    </TableRow>
                )}
            </>
        </TableBody>
    </Table>
}