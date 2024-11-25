import { useCallback, useEffect, useState } from "react";
import { PaymentsTable } from "./components/payments-table";
import { getPayments } from "./lib/api";
import { Payment } from "./types/payment";

import { PaymentsFilter } from "./components/payments-filter";
import { Button } from "./components/ui/button";

function App() {
  const [data, setData] = useState<Payment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [dateFilter, setDateFilter] = useState<Date | undefined>();

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await getPayments(dateFilter);
      setData(response);
    } catch (err) {
      setError(err as string);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [dateFilter]);

  useEffect(() => {
    fetchData();
  }, [dateFilter, fetchData]);

  return (
    <div className="container py-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold tracking-tight">List of payments</h2>
        <p className="text-muted-foreground">Here's a list of payments!</p>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <PaymentsFilter onFilter={(date) => setDateFilter(date)} />
          <Button onClick={fetchData}>Refresh</Button>
        </div>
        <PaymentsTable data={data} loading={loading} error={error} />
      </div>
    </div>
  );
}

export default App;
