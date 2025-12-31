import './TopBanner.css';

const TopBanner = () => {
  return (
    <div className="TopBanner">
      <div className="TopBanner-inner">
        <span className="TopBanner-text">
          Call Us Today!{' '}
          <a href="tel:8017045604" className="TopBanner-link">801-704-5604</a>
          {' | '}
          <a href="mailto:rob@excelaccessconsultant.com" className="TopBanner-link">
            rob@excelaccessconsultant.com
          </a>
        </span>
      </div>
    </div>
  );
};

export default TopBanner;

