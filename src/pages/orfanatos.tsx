import React from 'react';
import maker from '../images/map-marker.svg';

import {Link} from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import Leaflet from 'leaflet';

import '../styles/pages/orfanatos.css';
import 'leaflet/dist/leaflet.css';

const mapIcon = Leaflet.icon({
    iconUrl: maker,
    iconSize: [58,68],
    iconAnchor:[29,68],
    popupAnchor: [178,2]
});

function orfanatos() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={maker} alt= "Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Santiago</strong>
                    <p>Praia, Lém cachorro</p>
                </footer>
            </aside>
            <Map 
                center={[14.9319424,-23.5136155]}
                zoom={15}
                style={{ width:'100%', height: '100%' }}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                /> 

                <Marker
                    icon={mapIcon}
                    position={[14.9319424,-23.5136155]}
                >
                
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup"> 
                        lar das meninas
                        <Link to="/orfanato/1">
                            <FiArrowRight size={20} color="#fff"/>
                        </Link>
                    </Popup>
                </Marker>               
            </Map>

            <Link to="/orfanatos/criar" className="create-orfanato">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}

export default orfanatos;