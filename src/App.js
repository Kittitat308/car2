// App.js
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import TopBar from './TopBar';
import SearchBar from './SearchBar';
import CarDetailsPage from './CarDetailsPage';
import BookingPage from './BookingPage';
import PaymentPage from './PaymentPage';
import ConfirmationPage from './ConfirmationPage';  // เพิ่มการ import นี้ที่ด้านบนไฟล์
import './App.css';

function CarItem({ name, price, seats, image, rentalStartDate, rentalEndDate }) {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/details', { state: { car: { name, price, seats, image }, rentalStartDate, rentalEndDate } });
  };

  return (
    <div className="car-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: {price} THB/day</p>
      <p>Seats: {seats}</p>
      <button onClick={handleBookNow}>เลือก</button>
    </div>
  );
}

function App() {
  const [rentalStartDate, setRentalStartDate] = useState(new Date());
  const [rentalEndDate, setRentalEndDate] = useState(new Date());

  const cars = [
    {
      name: "Toyota Yaris",
      price: 558,
      seats: "2",
      image: "https://content.r9cdn.net/rimg/car-images/generic/02_economy_red.png?width=120&height=80",
    },
    {
      name: "Nissan Almera",
      price: 605,
      seats: "4",
      image: "https://content.r9cdn.net/rimg/car-images/generic/02_economy_white.png?width=120&height=80",
    },
    {
      name: "Honda Civic",
      price: 1125,
      seats: "5",
      image: "https://content.r9cdn.net/rimg/car-images/generic/02_economy_coolgrey.png?width=120&height=80"
    },
    {
      name: "Class Standard Car",
      price: 897,
      seats: "5",
      image: "https://content.r9cdn.net/rimg/car-images/generic/03_standard_black.png?width=120&height=80"
    },
    {
      name: "Mitsubishi Xpandar",
      price: 1071,
      seats: "5",
      image: "https://content.r9cdn.net/rimg/car-images/generic/11_van_white.png?width=120&height=80"
    },
    {
      name: "Toyota Fortuner",
      price: 1202,
      seats: "5",
      image: "https://content.r9cdn.net/rimg/car-images/generic/07_suv-large_white.png?width=120&height=80"
    },
    {
      name: "Class Mini Car",
      price: 815,
      seats: "2",
      image: "https://content.r9cdn.net/rimg/car-images/generic/01_mini_darkblue.png?width=120&height=80"
    },
    {
      name: "Class Compact Van",
      price: 1095,
      seats: "5",
      image: "https://content.r9cdn.net/rimg/car-images/generic/11_van_grey.png?width=120&height=80"
    },
    {
      name: "Class Intermediate SUV",
      price: 1528,
      seats: "5",
      image: "https://content.r9cdn.net/rimg/car-images/generic/05_suv-small_black.png?width=120&height=80"
    },
    {
      name: "lamborghini huracan",
      price: 100000,
      seats: "2",
      image: "https://purepng.com/public/uploads/large/purepng.com-white-lamborghini-huracan-carcarvehicletransportlamborghini-9615246466125cdzx.png"
    },
  ];

  return (
    <div className="App">
      <TopBar
        rentalStartDate={rentalStartDate}
        setRentalStartDate={setRentalStartDate}
        rentalEndDate={rentalEndDate}
        setRentalEndDate={setRentalEndDate}
      />
      <div className="main-content">
        <SearchBar />
        <div className="car-list">
          {cars.map((car) => (
            <CarItem
              key={car.name}
              name={car.name}
              price={car.price}
              seats={car.seats}
              image={car.image}
              rentalStartDate={rentalStartDate ? rentalStartDate.toISOString().split('T')[0] : ''}
              rentalEndDate={rentalEndDate ? rentalEndDate.toISOString().split('T')[0] : ''}
            />
          ))}
        </div>
      </div>

      {/* เพิ่มส่วนข้อความด้านล่าง */}
      <div className="additional-info">
        <h2>ทำไมต้องจองรถเช่ากับเรา?</h2>
        <div className="icon-benefits">
          <div>
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/05/14/1526299345537-5d57c269f121ecb9ae60be83d7688d53.svg?tr=q-75" alt="ประหยัดเวลา" />
            <p>ประหยัดเวลา</p>
            <p>เช่ารถง่าย ที่ไหน เมื่อไหร่ก็ได้ แค่ปลายนิ้ว พร้อมทั้งเปรียบเทียบราคารถเช่าจากพาร์ทเนอร์ที่เราไว้วางใจได้ในที่เดียว</p>
          </div>
          <div>
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/05/14/1526299395599-27c9f8d3b8b182673dc9768a31eaa1d7.svg?tr=q-75" alt="บริการคุณภาพ" />
            <p>บริการคุณภาพ</p>
            <p>บริการคุณภาพจากพาร์ทเนอร์รถเช่าชั้นนำของเรา ทำให้ทริปของคุณปลอดภัย สะดวกสบาย และน่าจดจำ</p>
          </div>
          <div>
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/05/14/1526299435281-ee34f2ae4efa6a2e73ebf5a810d5874a.svg?tr=q-75" alt="รีวิวจากผู้ใช้จริง" />
            <p>รีวิวจากผู้ใช้จริง</p>
            <p>เลือกรถเช่าที่เหมาะสำหรับคุณมากที่สุด ด้วยรีวิวจากผู้ใช้จริงจากผู้เช่ารถ ทำให้ไม่มีการตัดสินใจผิดอีกต่อไป</p>
          </div>
        </div>
      </div>

      <div className="service-info">
        <h2>บริการเช่ารถเชียงใหม่ และรถเช่าเชียงใหม่</h2>
        <p>
          "เชียงใหม่" จังหวัดหนึ่งที่ตั้งอยู่ในภาคเหนือของประเทศไทยต่างก็เป็นจุดหมายปลายทางยอดนิยมของทั้งนักท่องเที่ยวชาวไทย
          และต่างชาติ เพราะปฎิเสธไม่ได้เลยว่าเชียงใหม่ มีบรรยากาศดี รายล้อมไปด้วยความเป็นธรรมชาติ มีที่เที่ยวครบ
          ทั้งที่เที่ยวเชียงใหม่ในตัวเมืองและที่เที่ยวเชียงใหม่ธรรมชาติ หากใครที่อยากเที่ยวเชียงใหม่ด้วยตัวคุณเอง
          หรือจัดทริปแบบ RoadTrip ร้านบริการเช่ารถเชียงใหม่ยินดีให้บริการ
        </p>
      </div>
    </div>
  );
}

export default function MainApp() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/details" element={<CarDetailsPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
    </Routes>
  );
}
