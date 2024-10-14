import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { car, rentalStartDate, rentalEndDate, totalDays, totalPrice } = location.state;

  const BookingPage = () => {
    navigate('/confirmation', { 
      state: { 
        car, 
        rentalStartDate, 
        rentalEndDate, 
        totalDays, 
        totalPrice 
      } 
    });
  };

  return (
    <div className="booking-page">
      <h1>{car.name}</h1>
      <img src={car.image} alt={car.name} />
      <p>ที่นั่ง: {car.seats}</p>
      <p>ราคารวม: {totalPrice} บาท</p>
      <p>วันที่รับรถ: {rentalStartDate}</p>
      <p>วันที่คืนรถ: {rentalEndDate}</p>
      <button onClick={BookingPage}>ขั้นตอนถัดไป</button>
    </div>
  );
}

export default BookingPage;
