'use client'
import { useEffect, useState } from "react";

export default function Box1() {
  const [funds, setFunds] = useState(false)
  const [insurance, setInsurance] = useState(false)
  const [government, setGovernment] = useState(false)
  const [charity, setCharity] = useState(false)
  const [health, setHealth] = useState(false)
  const [home, setHome] = useState(false)
  const [taxbase, setTaxbase] = useState(false)
  const [long, setLong] = useState(false)
  const [reduction, setReduction] = useState(0)
  const [tax,setTax] = useState(0)
  const [salary,setSalary] = useState(250000)

  useEffect(() => {
    let newreduction = 0
    if (funds) {
      newreduction += 2000
    }
    if (insurance) {
      newreduction += 2000
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
  }, [funds, insurance, government, charity,health,home,taxbase,long])

  useEffect(()=>{
    if (salary <= 150000)
    {
      setTax(0)
    }
    else if(salary <= 300000)
    {
      setTax(salary * 5/100)
    }
    else if(salary <= 500000)
    {
      setTax(7500 + ((salary-300000) * 10/100))
    }
    else if(salary <= 750000)
    {
      setTax(27500 + ((salary-500000) * 15/100))
    }
    else if(salary <= 1000000)
    {
      setTax(65000 + ((salary-750000) * 20/100))
    }
    else if(salary <= 2000000)
    {
      setTax(115000 + ((salary-1000000) * 25/100))
    }
    else if(salary <= 4000000)
    {
      setTax(365000 + ((salary-2000000) * 30/100))
    }else {
      setTax(965000 + ((salary-2000000) * 35/100))
    }
  },[salary])

  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <p className="font-bold">รายได้สิทธิ : <input type="number" onChange={(e) => {setSalary(e.target.value)}} defaultValue={salary} className="bg-transparent outline-none"/></p>
      <div className="flex gap-9">
      <div>
        <div><input type="checkbox" checked={funds} onChange={() => { setFunds(!funds) }} /> การลงทุน RMF</div>
        <div><input type="checkbox" checked={health} onChange={() => { setHealth(!health) }} /> ประกันสุขภาพ</div>
        <div><input type="checkbox" checked={insurance} onChange={() => { setInsurance(!insurance) }} /> ประกันชีวิต</div>
        <div><input type="checkbox" checked={charity} onChange={() => { setCharity(!charity) }} /> บริจาค</div>
      </div>
      <div>
        <div><input type="checkbox" checked={home} onChange={() => { setHome(!home) }} /> ดอกเบี้ยบ้าน</div>
        <div><input type="checkbox" checked={taxbase} onChange={() => { setTaxbase(!taxbase) }} /> ฐานภาษี</div>
        <div><input type="checkbox" checked={long} onChange={() => { setLong(!long) }} /> กองทุนรวมหุ้นระยะยาว</div>
        <div><input type="checkbox" checked={government} onChange={() => { setGovernment(!government) }} /> ใช้สิทธิตามมาตรการกระตุ้นเศรษฐกิจของรัฐ</div>
      </div>
      </div>
      <p className="font-bold">ภาษี : {tax - reduction <= 0 ? 0: tax - reduction }</p>
    </div>
  );
}
