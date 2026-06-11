'use client';

import Link from 'next/link';
import { useState } from 'react';
import { trackCalculatorUse } from '../../utils/analytics';
import Button from '../ui/Button/Button';

export default function ROICalculator({ hideHeader = false }) {
  const [hoursPerWeek, setHoursPerWeek] = useState('6');
  const [hourlyCost, setHourlyCost] = useState('50');
  const [submitted, setSubmitted] = useState(false);

  const hours = parseFloat(hoursPerWeek) || 0;
  const rate = parseFloat(hourlyCost) || 0;
  const annualWaste = Math.round(hours * rate * 52);

  const handleCalculate = (e) => {
    e.preventDefault();
    setSubmitted(true);
    trackCalculatorUse(annualWaste);
  };

  return (
    <section className='roi-calculator'>
      <div className='container'>
        {!hideHeader && (
          <div className='roi-calculator__header'>
            <h2 className='roi-calculator__title'>Manual Work ROI Calculator</h2>
            <p className='roi-calculator__subtitle'>
              Plug in the hours your team spends on manual reports, data entry, or spreadsheet fixes
              , see what that work costs per year before you automate it.
            </p>
          </div>
        )}
        <form onSubmit={handleCalculate} className='roi-calculator__form'>
          <div className='roi-calculator__fields'>
            <div className='form-group'>
              <label htmlFor='roi-hours' className='form-label'>
                Hours per week on manual work
              </label>
              <input
                id='roi-hours'
                type='number'
                min='0'
                step='0.5'
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(e.target.value)}
                className='input-field'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='roi-rate' className='form-label'>
                Loaded hourly cost ($)
              </label>
              <input
                id='roi-rate'
                type='number'
                min='0'
                step='1'
                value={hourlyCost}
                onChange={(e) => setHourlyCost(e.target.value)}
                className='input-field'
              />
            </div>
          </div>
          <Button type='submit' variant='primary' size='large' className='roi-calculator__submit'>
            Calculate Annual Cost
          </Button>
          {submitted && (
            <div className='roi-calculator__result'>
              <p className='roi-calculator__result-label'>Estimated annual cost of manual work</p>
              <p className='roi-calculator__result-value'>${annualWaste.toLocaleString()}</p>
              <p className='roi-calculator__result-note'>
                At ${annualWaste.toLocaleString()}/year in manual work, most automation projects pay
                back within 3–6 months.
              </p>
              <Button
                variant='secondary'
                size='medium'
                as={Link}
                href='/contact'
                className='roi-calculator__result-cta'
              >
                Book Free Consultation
              </Button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
