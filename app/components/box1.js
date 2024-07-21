'use client'
import { useEffect, useState } from "react";

export default function Box1({ salary }) {
  const [funds, setFunds] = useState(false)
  const [insurance, setInsurance] = useState(false)
  const [government, setGovernment] = useState(false)
  const [charity, setCharity] = useState(false)
  const [health, setHealth] = useState(false)
  const [home, setHome] = useState(false)
  const [taxbase, setTaxbase] = useState(false)
  const [long, setLong] = useState(false)
  const [reduction, setReduction] = useState(0)

  useEffect(() => {
    let newreduction = 0
    if (funds) {
      newreduction += 5000
    }
    if (insurance) {
      newreduction += 5000
    }
    if (government) {
      newreduction += 2000
    }
    if (charity) {
      newreduction += 2000
    }
    if (health) {
      newreduction += 2000
    }
    if (home) {
      newreduction += 2000
    }
    if (taxbase) {
      newreduction += 2000
    }
    if (long) {
      newreduction += 2000
    }
    setReduction(newreduction)
  }, [funds, insurance, government, charity])

  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <p className="font-bold">Salary : {salary}</p>
      <div className="flex gap-9">
      <div>
        <div><input type="checkbox" Checked={funds} onChange={() => { setFunds(!funds) }} /> การลงทุน RMF</div>
        <div><input type="checkbox" Checked={insurance} onChange={() => { setHealth(!health) }} /> ประกันสุขภาพ</div>
        <div><input type="checkbox" Checked={government} onChange={() => { setInsurance(!insurance) }} /> ประกันชีวิต</div>
        <div><input type="checkbox" Checked={charity} onChange={() => { setCharity(!charity) }} /> บริจาค</div>
      </div>
      <div>
        <div><input type="checkbox" Checked={home} onChange={() => { setHome(!home) }} /> ดอกเบี้ยบ้าน</div>
        <div><input type="checkbox" Checked={taxbase} onChange={() => { setTaxbase(!taxbase) }} /> ฐานภาษี</div>
        <div><input type="checkbox" Checked={long} onChange={() => { setLong(!long) }} /> กองทุนรวมหุ้นระยะยาว</div>
        <div><input type="checkbox" Checked={government} onChange={() => { setGovernment(!government) }} /> ใช้สิทธิตามมาตรการกระตึ้นเศรษฐกิจของรัฐ</div>
      </div>
      </div>
      <p className="font-bold">reduction : {reduction}</p>
    </div>
  );
}
