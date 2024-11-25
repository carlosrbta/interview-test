import { Payment } from "@/types/payment";
import { faker } from "@faker-js/faker";

export const generateFakePayments = (count: number): Payment[] => {
  const payments: Payment[] = [];

  for (let i = 1; i <= count; i++) {
    payments.push({
      id: i,
      description: faker.commerce.productDescription(),
      date: new Date(),
      amount: parseFloat(faker.commerce.price()),
    });
  }

  return payments;
};

const payments: Payment[] = generateFakePayments(10);

export function getPayments(date?: Date) {
  const y = Math.random();

  const filteredPayments =
    date !== undefined
      ? payments.filter((payment: Payment) => payment.date === date)
      : payments;

  return new Promise<Payment[]>((resolve, reject) => {
    setTimeout(() => {
      if (y < 0.3) {
        reject("Error on fetch payments data!");
      }

      resolve(filteredPayments);
    }, 1000);
  });
}
