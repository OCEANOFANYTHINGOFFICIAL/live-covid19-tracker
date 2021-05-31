import React, { useEffect, useState } from "react";
import './covid.css';
const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div className="bg-black">
      <h1>&#128308;<p className="rgb">LIVE</p> </h1>
      <h2>LIVE Covid-19 Corona Virus Tracker By Oceanofanything</h2>

        <ul>
          <li className="card bg-green">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name"> <span>Our</span> Country </p>
                <p className="card__total card__small">India</p>
              </div>
            </div>
          </li>

          <li className="card bg-yellow">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name"> <span>Total</span> Recovered </p>
                <p className="card__total card__small">{data.recovered}</p>
              </div>
            </div>
          </li>

          <li className="card bg-blue">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name"> <span>Total</span> Confirmed </p>
                <p className="card__total card__small">{data.confirmed}</p>
              </div>
            </div>
          </li>
          </ul>
          <ul>
        <li className="card bg-red">
          <div className="card__main">
            <div className="card__inner">
              <p className="card__name"> <span>Total</span> Death </p>
              <p className="card__total card__small">{data.deaths}</p>
            </div>
          </div>
        </li>

        <li className="card bg-violate">
          <div className="card__main">
            <div className="card__inner">
              <p className="card__name"> <span>Total</span> Active </p>
              <p className="card__total card__small">{data.active}</p>
            </div>
          </div>
        </li>

        <li className="card bg-brown">
          <div className="card__main">
            <div className="card__inner">
              <p className="card__name"> <span>Last</span> Updated </p>
              <p className="card__total card__small">{data.lastupdatedtime}</p>
            </div>
          </div>
        </li>

      </ul>
    </div>
  );
};

export default Covid;
