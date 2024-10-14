import React, { useState } from 'react'; // นำเข้า useState จาก react
import DatePicker from 'react-datepicker'; // นำเข้า DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // นำเข้าไฟล์ CSS ของ DatePicker

function TopBar() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const locations = [
    { value: 'เชียงใหม่', label: 'สนามบิน, เชียงใหม่' },
    { value: 'กรุงเทพ', label: 'มหาวิทยาลัยแม่โจ้, เชียงใหม่' },
  ];

  return (
    <div className="top-bar">
      <div className="location-select">
        <span>จุดรับและส่งคืนรถ</span>
        <select>
          {locations.map((loc, idx) => (
            <option key={idx} value={loc.value}>
              {loc.label}
            </option>
          ))}
        </select>
      </div>

      <div className="date-select">
        <span>วันที่รับรถ</span>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <span>วันที่คืนรถ</span>
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      </div>

      <button className="search-button">ยืนยัน</button>
    </div>
  );
}

export default TopBar;
