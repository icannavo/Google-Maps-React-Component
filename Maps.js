import React from "react";
import "./ComponenteCSS/Maps.css";

function Maps() {
  return (
    <body-map>
    <div className="container-fluid map-col">
      <div className="col-md-12">
          <div className="google-maps">
            <div className="map-wrap">
              <div className="map-aspect-ratio">
                <iframe
                  title="google-maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0018672613874!2d-46.6623229257871!3d-23.568372561847703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c52296b9b3%3A0xf4e6c4bd81adbf36!2sAv.%20Nove%20de%20Julho%2C%203229%20-%2011%C2%B0%20andar%2C%20conj.1104%20-%20Jardim%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001407-000!5e0!3m2!1spt-BR!2sbr!4v1719262447650!5m2!1spt-BR!2sbr" 
                  className="map"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{
                    border: "0",
                    width: "300px",
                    height: "300px",
                    margin: "auto",
                    display: "block",
                  }}
                ></iframe>
              </div>
            </div>
          </div>
      </div>
    </div>
    </body-map>
  );
}

export default Maps;
