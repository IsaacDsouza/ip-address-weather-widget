import React from "react";
import "./ipadrs.css";

import { useState, useEffect } from 'react';

function IpAddressDisplay() {
  const [ipAddress, setIpAddress] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIpAddress = () => {
      fetch('https://api.ipify.org')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch IP address');
          }
          return response.text();
        })
        .then(data => {
          setIpAddress(data);
        })
        .catch(error => {
          setError(error.message);
        });
    };

    fetchIpAddress();

    // Clean up function
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div><div className="title">My IP Address</div>
    <div className="daily-item">
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <p>My current IP address is {ipAddress}</p>
      )}
      </div>
    </div>
  );
}

export default IpAddressDisplay;
