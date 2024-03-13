import React from "react";
import "./Event.css";
import { Menu } from "./Menu";
import { Menu2 } from "./Menu2";

const Event = () => {
  return (
    <>
      <section className="featured background">
        <h1>Event Details</h1>
        <h3>Technical Events</h3>
        <div className="container">
          <div className="grid5" style={{ marginTop: "2rem" }}>
            {Menu.map((items, index) => (
              <div
                className="box"
                key={index}
                onClick={() => window.location.assign(items?.link)}
              >
                <img src={items.cover} alt="" />
                <h4 className="lab-h4">{items.name}</h4>
                <label>{items.total}</label>
              </div>
            ))}
          </div>
        </div>

        <h3>Non-Technical Events</h3>
        <div className="container">
          <div className="grid5" style={{ marginTop: "2rem" }}>
            {Menu2.map((items, index) => (
              <div
                className="box"
                key={index}
                onClick={() => window.location.assign(items?.link)}
              >
                <img src={items.cover} alt="" />
                <h4 className="lab-h4">{items.name}</h4>
                <label>{items.total}</label>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Event;
