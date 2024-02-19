import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import DataTable from 'datatables.net-bs4';



function StatusTable() {
  const tableRef = useRef(null);

  useEffect(() => {
    if (!tableRef.current) return;

    const table = DataTable(tableRef.current, {
      // Add DataTable options here
      paging: true, // Enable paging
      searching: true, // Enable searching
      ordering: true, // Enable ordering
      info: true // Enable info (pagination information)
      // You can add more options as needed
    });

    return () => {
      table.destroy();
    };
  }, []);

  return (
    <div className="container mt-4">
      <table className="table" style={{ borderRadius: '10px' }} ref={tableRef}>
        <thead className="thead-dark">
          <tr>
            <th>Issue No.</th>
            <th>Date</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Issue 15</td>
            <td>11/01/2021</td>
            <td>High</td>
            <td>
              <div className="progress" style={{ height: '5px', width: '150px' }}>
                <div className="progress-bar bg-success" style={{ width: '100%' }}></div>
              </div>
              Completed
            </td>
            <td>Maintenance</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default StatusTable;
