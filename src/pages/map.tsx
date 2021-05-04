import { useEffect } from "react";
import Maap from "./mapa";
import Head from "next/Head";

function App() {
  // useEffect(() => {

  //   function loadStyle(url) {
  //     let index  = window.document.getElementsByTagName("link")[0];
  //     let link = window.document.createElement("link");
  //     link.href = url;
  //     link.rel = 'stylesheet';
  //     index.parentNode.insertBefore(link, index);
  //   }
  //   loadStyle("https://api.mapbox.com/mapbox-gl-js/v1.3.0/mapbox-gl.css")

  // }, [])

  return (
    <>
      <Head>
        <script src="https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.js"></script>

        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />

        <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.0/mapbox-gl-geocoder.min.js"></script>
        <link
          rel="stylesheet"
          href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.0/mapbox-gl-geocoder.css"
          type="text/css"
        />

        <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>



        <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.js"></script>
        <link
          rel="stylesheet"
          href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.css"
          type="text/css"
        ></link>
      </Head>

      <div>
        <Maap />
      </div>
    </>
  );
}

export default App;