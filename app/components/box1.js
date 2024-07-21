'use client'
import { useEffect, useState } from "react";

export default function Box1({ salary }) {
  const [funds, setFunds] = useState(false)
  const [insurance, setInsurance] = useState(false)
  const [oldMomDad, setOldMomDad] = useState(false)
  const [charity, setCharity] = useState(false)
  const [reduction, setReduction] = useState(0)

  useEffect(() => {
    let newreduction = 0
    if (funds) {
      newreduction += 5000
    }
    if (insurance) {
      newreduction += 5000
    }
    if (oldMomDad) {
      newreduction += 2000
    }
    if (charity) {
      newreduction += 2000
    }
    setReduction(newreduction)
  }, [funds, insurance, oldMomDad, charity])

  return (
    <div>
      <p className="font-bold">Salary : {salary}</p>
      <div><input type="checkbox" Checked={funds} onChange={() => { setFunds(!funds) }} /> Funds</div>
      <div><input type="checkbox" Checked={insurance} onChange={() => { setInsurance(!insurance) }} /> Insurance</div>
      <div><input type="checkbox" Checked={oldMomDad} onChange={() => { setOldMomDad(!oldMomDad) }} /> OldMomDad</div>
      <div><input type="checkbox" Checked={charity} onChange={() => { setCharity(!charity) }} /> Charity</div>
      <p className="font-bold">reduction : {reduction}</p>
    </div>
  );
}
