// import React from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../../assets/react.svg';
import PropTypes from 'prop-types';

const CONSTANTS = {
  HEADER1: "Company / Issue Date",
  HEADER2: "Issue Size",
  HEADER3: "Price Range",
  HEADER4: "Min Invest / qty",
}

const propTypes = {
  iposData: PropTypes.arrayOf([
    PropTypes.object
  ])
}

const IPOList = ({ iposData = [] }) => {
  if (iposData.length == 0) return null;
  return (
    <div className="ipo-list">
      <table>
        <thead className='subtext'>
          <td>{CONSTANTS.HEADER1}</td>
          <td>{CONSTANTS.HEADER2}</td>
          <td>{CONSTANTS.HEADER3}</td>
          <td>{CONSTANTS.HEADER4}</td>
        </thead>
        <tbody>
          {iposData.map((ipo) => (
            <tr key={ipo.id}>
              <Link to={`/ipo/${ipo.id}`} >
                <td className='info'>
                  <img src={reactLogo} className="logo react" alt="React logo" />
                  <p>{ipo.company_name}<p className="subtext">{ipo.issue_date}</p></p>
                </td>
              </Link>
              <td>{ipo.issue_size}</td>
              <td>{ipo.price_range}</td>
              <td>{ipo.min_investment}<p className='subtext'>{ipo.quantity}</p></td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
};

IPOList.propTypes = propTypes;
export default IPOList;
