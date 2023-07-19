import React, { useEffect } from 'react';
import './Linkdein.css';
function LinkedInBadge() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);
    return (
      <div className="linkedin-profile-badge-container">
      <div
        className="LI-profile-badge"
        data-version="v1"
        data-size="medium"
        data-locale="en_US"
        data-type="horizontal"
        data-theme="light"
        data-vanity="lochanacharya13"
      >
        <a
          className="LI-simple-link"
          href="https://www.linkedin.com/in/lochanacharya13"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </div>
      </div>
    );
  }
  
  export default LinkedInBadge;
  