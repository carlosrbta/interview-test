import { useEffect, useState } from 'react'
import { Payment } from './types/payment'
import { PaymentsTable } from './components/payments-table'
import { getPayments } from './lib/api'

import './App.css'
import { PaymentsFilter } from './components/payments-filter'

function App() {
  const [data, setData] = useState<Payment[]>([])
  const [filterDate, setFilterDate] = useState<Date>();

  const getData = async () => {
    const result = await getPayments(filterDate);
    setData(result)
  }

  useEffect(() => {     
      getData();
  }, [])

  useEffect(() => {
    getData();
  }, [filterDate])

  return (
    <>
      <div className='text-lg'>List of payments</div>
      <div className='flex flex-col'>
        <PaymentsFilter onFilter={setFilterDate}/>
        <PaymentsTable data={data} />
      </div>
    </>
  )
}

export default App
