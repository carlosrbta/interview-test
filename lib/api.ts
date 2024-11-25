import { Payment } from "@/types/payment";

export function getPayments(date?: Date) {

    const data: Payment[] = [
        { "id": 1, "description": "Description 1", "date": "2024-11-25", "amount": 100 },
        { "id": 2, "description": "Description 2", "date": "2024-11-25", "amount": 200 }
    ];
    
    const y = Math.random();

    const filterData = date ? data.filter(item => {
        return item.date === date
    }) : data

    return new Promise((resolve, reject) => {
        if(y < 0.5) {
            // reject({message: "Error on fetch data!"})
        }       
        resolve(filterData);
    });
}
