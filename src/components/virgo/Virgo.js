import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./VIrgo.css";

const Virgo = (props) => {
  const { title, firstImage, price } = props.item;

  console.log(props.item);

  const [show, setShow] = useState(true);

  if (show) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="sss">
      {show && (
        <div className="ssss">
          <div className="ss" onClick={() => setShow(!show)}>
            <div className="carts" onClick={() => setShow(!show)}>
              <FontAwesomeIcon icon={faXmark} size="xs" />
            </div>
            <div class="card">
              
                <img src={firstImage} class="card-img-top" />
                <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{price}</p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Virgo;
