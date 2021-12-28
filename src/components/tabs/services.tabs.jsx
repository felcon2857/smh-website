import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { services } from "../../data/service.data";

export default function ServicesTabs() {
  const data = services;
  const [activeID, setActiveID] = React.useState("001");
  return (
    <div className="container">
      <div className="px-5">
        <section className="tabs-grp">
          {data.map((services, i) => (
            <>
              <div
                className={
                  activeID == services.id
                    ? "tabs tabs-active mx-3"
                    : "tabs mx-3"
                }
                key={i}
                onClick={() => setActiveID(services.id)}
              >
                <div className="tabs-icon"></div>
                <div className="tabs-text">{services.package}</div>
              </div>
            </>
          ))}
        </section>
        <section className="tabs-content pt-5">
          {data
            .filter((item) => {
              return item.id == activeID;
            })
            .map((listItem) => {
              return (
                <ul>
                  {listItem.list.map((arrayItem, i) => (
                    <li
                      key={i}
                      className="tab-card-colored-hover d-flex align-items-center my-2"
                    >
                      <FontAwesomeIcon
                        icon={faStethoscope}
                        color="#00AF43"
                        size="sm"
                      />
                      <div className="tab-card-colored-hover-text px-2">
                        {arrayItem}
                      </div>
                    </li>
                  ))}
                </ul>
              );
            })}
        </section>
      </div>
    </div>
  );
}
