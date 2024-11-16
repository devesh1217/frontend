import React from 'react';
import { useLocation } from 'react-router-dom';
import './TimerPage.css';

const TimerPage = () => {
  const location = useLocation();
  const { data } = location.state || {};

  return (
    <div className="timer-container">
      <h2 className="heading">Traffic Signal Timer Dashboard</h2>

      {data ? (
        <>
          <div className="status-section">
            <h3>Status: <span className={data.status === 'Active' ? 'status-active' : 'status-inactive'}>{data.status}</span></h3>
          </div>

          <div className="timers-section">
            <h4 className="subheading">Adaptive Green Times (seconds):</h4>
            <ul className="list green-times-list">
              {Object.entries(data.adaptive_green_times).map(([direction, time]) => (
                <li key={direction} className="list-item">
                  <strong>{direction.charAt(0).toUpperCase() + direction.slice(1)}</strong>: {time}s
                </li>
              ))}
            </ul>
          </div>

          <div className="vehicle-counts-section">
            <h4 className="subheading">Average Vehicle Counts Per Frame:</h4>
            <ul className="list">
              {Object.entries(data.average_vehicle_counts_per_frame).map(([direction, count]) => (
                <li key={direction} className="list-item">
                  <strong>{direction.charAt(0).toUpperCase() + direction.slice(1)}</strong>: {count.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>

          <div className="vehicle-counts-total-section">
            <h4 className="subheading">Total Vehicle Counts:</h4>
            <ul className="list">
              {Object.entries(data.vehicle_counts).map(([direction, count]) => (
                <li key={direction} className="list-item">
                  <strong>{direction.charAt(0).toUpperCase() + direction.slice(1)}</strong>: {count}
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p className="no-data-message">No data available</p>
      )}
    </div>
  );
};

export default TimerPage;
