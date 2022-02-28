import {
  faChevronRight,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { services } from "../../data/service.data";

export default function ServicesTabs() {
  const data = services;
  const [activeID, setActiveID] = React.useState("001");
  return (
    // <div className="container">
    //   <div className="px-5">
    //     <section className="tabs-grp">
    //       {data.map((services, i) => (
    //         <>
    //           <div
    //             className={
    //               activeID === services.id
    //                 ? "tabs tabs-active mx-3"
    //                 : "tabs mx-3"
    //             }
    //             key={i}
    //             onClick={() => setActiveID(services.id)}
    //           >
    //             <div className="tabs-icon"></div>
    //             <div className="tabs-text">{services.package}</div>
    //           </div>
    //         </>
    //       ))}
    //     </section>
    //     <section className="tabs-content pt-5">
    //       {data
    //         .filter((item) => {
    //           return item.id === activeID;
    //         })
    //         .map((listItem) => {
    //           return (
    //             <ul>
    //               {listItem.list.map((arrayItem, i) => (
    //                 <li
    //                   key={i}
    //                   className="tab-card-colored-hover d-flex align-items-center my-2"
    //                 >
    //                   <FontAwesomeIcon
    //                     icon={faStethoscope}
    //                     color="#00AF43"
    //                     size="sm"
    //                   />
    //                   <div className="tab-card-colored-hover-text px-2">
    //                     {arrayItem}
    //                   </div>
    //                 </li>
    //               ))}
    //             </ul>
    //           );
    //         })}
    //     </section>
    //   </div>
    // </div>
    <div className="row">
      {data.map((services, i) => (
        <div className="col-lg-6 mb-3">
          <div className="card-tab card-colored-hover">
            <div className="d-flex">
              <div className="card-icon">
                <img src={services.images} alt="icon-kit" />
              </div>
              <div className="card-text-title">{services.package}</div>
            </div>
            <div className="card-text-prgh pt-3">
              {data
                .filter((item) => {
                  return item.id === services.id;
                })
                .map((listItem) => {
                  return (
                    <ul>
                      {listItem.list.map((arrayItem, i) => (
                        <li key={i} className="card-colored-item d-flex my-2">
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            color="#00AF43"
                            size="sm"
                          />
                          <div className="card-colored-item-text px-2">
                            {arrayItem}
                          </div>
                        </li>
                      ))}
                    </ul>
                  );
                })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
