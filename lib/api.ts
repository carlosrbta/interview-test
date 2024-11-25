import { Payment } from "@/types/payment";

export function getPayments(date?: Date): Promise<Payment[]> {
  const data: Payment[] = [
    { id: 1, description: "Description 1", date: "2024-11-25", amount: 100 },
    { id: 2, description: "Description 2", date: "2024-11-25", amount: 200 },
  ];

  const shouldSimulateError = Math.random() < 0.3;

  const filteredData = date ? data.filter((item) => item.date === date) : data;

  return new Promise((resolve, reject) => {
    if (shouldSimulateError) {
      reject({ message: "Error on fetch data!" });
    }
    resolve(filteredData);
  });
}
