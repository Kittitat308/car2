import React from 'react';
import GoogleMapReact from 'google-map-react';

const carsData = [
  {
    name: "Toyota Yaris",
    price: "฿4,210",
    passengers: 5,
    doors: 4,
    transmission: "Automatic",
    features: ["A/C", "Free cancellation", "Unlimited mileage"],
    img: "https://content.r9cdn.net/rimg/car-images/generic/02_economy_red.png?width=120&height=80",
  },
  // ข้อมูลรถเช่าเพิ่มเติมที่นี่
];

const CarCard = ({ car }) => (
  <div className="car-card">
    <img src={car.img} alt={car.name} />
    <h3>{car.name}</h3>
    <p>Price: {car.price}</p>
    <p>Passengers: {car.passengers}</p>
    <p>Doors: {car.doors}</p>
    <p>Transmission: {car.transmission}</p>
    <ul>
      {car.features.map((feature, idx) => (
        <li key={idx}>{feature}</li>
      ))}
    </ul>
    <button>View Deal</button>
  </div>
);

const SearchResultPage = () => {
  return (
    <div className="search-result-page">
      <div className="content">
        <div className="car-list">
          {carsData.map((car, idx) => (
            <CarCard key={idx} car={car} />
          ))}
        </div>
        <div className="map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'API_KEY' }} // ใส่ Google Maps API Key ของคุณที่นี่
            defaultCenter={{ lat: 18.787747, lng: 98.993128 }}
            defaultZoom={12}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;
