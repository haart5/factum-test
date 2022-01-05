import React from 'react';
import moment from 'moment';

const TableElements = (props) => {
  return (
    props.employees.map((e, index) => {
      return (
        <tr key={index}>
          <td>{e.id}</td>
          <td>{e.name}</td>
          <td>{e.last_name}</td>
          <td>{moment(e.birthday).format("DD/MM/YYYY")}</td>
        </tr>
      );
    })
  )
}

export default TableElements
