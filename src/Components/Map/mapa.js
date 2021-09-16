import mapboxgl from 'mapbox-gl';
import React from 'react';
import { parseCookies } from '../../utils/parseCookies';
import styles from './styles.module.scss';

mapboxgl.accessToken =
    "pk.eyJ1Ijoia2FpcXVlZmoiLCJhIjoiY2tua2YwOXhyMDh4ZzJ3bnY2ZjdlN2IzZSJ9.97C392BQwdQRtRqvl_-YPw";

class Mapp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lng: -46.79167,
            lat: -23.62611,
            zoom: 12
        }
    }

    // Create map and lay over markers
    async componentDidMount(req) {

        //get token on cookies
        const { token } = parseCookies(req);

        // API connection
        const response = await fetch('http://localhost:3333/showHospital', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        const responseJSON = await response.json();

        // All Medicines
        const array = [];
        for (var i = 0; i < responseJSON.length; i++) {

            // Data to show
            array.push({
                'hospitalName': responseJSON[i].hospitalName,
                'phoneNumber': responseJSON[i].telefone,
                "coordinates": [responseJSON[i].latitude, responseJSON[i].longitude],
            })
        }

        const map = new mapboxgl.Map({
            container: "my-map",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [-46.791957, -23.625862],
            zoom: 12
        })

        //nav Control
        var nav = new mapboxgl.NavigationControl();
        map.addControl(nav, 'bottom-right');

        if (array.length > 0) {

            //put the markers in the map
            array.forEach((location) => {
                var marker = new mapboxgl.Marker({
                    color: 'var(--purple)',
                    background: 'none',
                    background: "url('https://image.flaticon.com/icons/png/512/504/504276.png') 100% 100%",                    
                })

                    .setLngLat(location.coordinates)
                    .setPopup(new mapboxgl.Popup({ offset: 25 })
                        .setHTML(
                            "<div id='popup'>" +
                            "<div>" +
                            `<p>${location.hospitalName}</p>` +
                            "</div>" +

                            `<p>${location.phoneNumber}</p>` +
                            "</div>"))
                    .addTo(map);
            })
        }
    }

    render() {

        return (
            <div id="my-map"
                className={styles.container}
            />
        )
    }
}


export default Mapp;