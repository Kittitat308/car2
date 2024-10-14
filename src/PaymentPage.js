import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // เพิ่ม useNavigate
import './PaymentPage.css';

function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate(); // ใช้ useNavigate เพื่อเปลี่ยนเส้นทาง

  const { car, rentalStartDate, rentalEndDate, totalPrice, totalDays } = location.state || {
    car: { name: '', price: 0, seats: '', image: '' },
    rentalStartDate: '',
    rentalEndDate: '',
    totalPrice: 0,
    totalDays: 0,
  };

  // สร้าง state สำหรับเก็บค่าของฟอร์ม
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePayment = () => {
    // ตรวจสอบว่ากรอกข้อมูลครบทุกช่อง
    if (!cardholderName || !cardNumber || !expirationDate || !cvv) {
      setErrorMessage('กรุณากรอกข้อมูลให้ครบทุกช่อง');
    } else {
      setErrorMessage('');
      // เปลี่ยนเส้นทางไปยังหน้า ConfirmationPage หลังจากการจ่ายเงินสำเร็จ
      navigate('/confirmation', {
        state: {
          car,
          rentalStartDate,
          rentalEndDate,
          totalPrice,
          totalDays,
        },
      });
    }
  };

  return (
    <div className="payment-page">
      <h1>Payment for {car.name}</h1>
      <img src={car.image} alt={car.name} className="car-image" />
      <p>Rental Dates: {rentalStartDate} to {rentalEndDate}</p>
      <p>Total Days: {totalDays}</p>
      <p>Total Price: {totalPrice} THB</p>

      <div className="payment-form">
        <label>Cardholder Name:</label>
        <input
          type="text"
          placeholder="Name on card"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
        />
        
        <label>Card Number:</label>
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        
        <label>Expiration Date:</label>
        <input
          type="text"
          placeholder="MM/YY"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
        />
        
        <label>CVV:</label>
        <input
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
        
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        
        <button onClick={handlePayment}>Pay Now</button> {/* เรียกฟังก์ชัน handlePayment */}
      </div>
    </div>
  );
}

export default PaymentPage;
