import React from 'react'
import { Train } from './App'

interface Props {
  trains: Train[] | null;
}

const List: React.FC<Props> = ({ trains }) => {
  return (
    <table id="trains">
      <thead>
        <tr>
          <th>Origin</th>
          <th>Destination</th>
          <th className="mobile-hidden">Date</th>
          <th>Departure</th>
          <th>Arrival</th>
        </tr>
      </thead>
      <tbody>
        {
          trains === null ? (
            <tr>
              <td colSpan={6}>No trains found</td>
            </tr>
          ) : (
            <>
              {
                trains.map((train, index) => (
                  <tr key={index}>
                    <td>{train.origin}</td>
                    <td>{train.destination}</td>
                    <td className="mobile-hidden">{train.date}</td>
                    <td>{train.departure}</td>
                    <td>{train.arrival}</td>
                  </tr>
                ))
              }
            </>
          )
        }
      </tbody>
    </table >
  )
}

export default List
