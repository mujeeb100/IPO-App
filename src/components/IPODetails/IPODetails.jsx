import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import reactLogo from '../../assets/react.svg';
import PropTypes from 'prop-types';

const CONSTANTS = {
  DETAILS_TITLE: "IPO Details",
  TIMELINE_TITLE: "IPO Timeline",
  ABOUT_TITLE: "About the company",
  APPLY_BUTTON_TEXT: "Apply Now",
  READ_MORE: "Read More",
  SHOW_LESS: "Show Less",
};

const propTypes = {
  ipoDetails: PropTypes.shape({
    company: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    about_company: PropTypes.string.isRequired,
    ipo_details: PropTypes.object.isRequired,
    timeline: PropTypes.object.isRequired,
  }).isRequired,
};

const IPODetails = ({ ipoDetails = {} }) => {
  const { company, company_name, about_company, ipo_details, timeline } = ipoDetails;
  const [isReadMore, setIsReadMore] = useState(true);
  
  const toggleReadMore = () => setIsReadMore(!isReadMore);

  const isMobile = () => {
    const minWidth = 768; 
    return window.innerWidth < minWidth || screen.width < minWidth;
  };

  const handleApplyNow = () => alert('Applying...');

  return (
    <div className="ipoDetails-details">
      <nav>
        <div className="page-title">
          <Link to="/"><FaChevronLeft /></Link>
          <img src={reactLogo} className="logo react" alt="React logo" />
          <p>{company}<p className='subtext'>{company_name}</p></p>
        </div>
        <button onClick={handleApplyNow}>{CONSTANTS.APPLY_BUTTON_TEXT}</button>
      </nav>

      <section className='rounded-frame'>
        <p>{CONSTANTS.DETAILS_TITLE}</p>
        <div className='rounded-frame flexed'>
          {Object.entries(ipo_details).map(([key, value]) => (
            <p key={key} >
              <p className='subtext'>{key}</p> {value}
            </p>
          ))}
        </div>
      </section>

      <section className='rounded-frame relative'>
        <p>{CONSTANTS.TIMELINE_TITLE}</p>
        <span className='timeline-bar'></span>
        <div className='timeline'>
          {Object.entries(timeline).map(([key, value]) => (
            <div key={key} className='timeline-content'>
              <TiTick />
              <p>{key}<p className='subtext'>{value}</p></p>
            </div>
          ))}
        </div>
        
      </section>
      <section className='rounded-frame'>
        <p>{CONSTANTS.ABOUT_TITLE}</p>
        {isMobile() ? <p className="text subtext">
          {isReadMore ? about_company.slice(0, 100) : about_company}
          <span
            onClick={toggleReadMore}
            className="read-or-hide"
          >
            {isReadMore ? CONSTANTS.READ_MORE : CONSTANTS.SHOW_LESS}
          </span>
        </p> : <p className="text subtext">{about_company}</p>}
      </section>
    </div>
  );
};

IPODetails.propTypes = propTypes;

export default IPODetails;
