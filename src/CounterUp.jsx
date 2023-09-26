import React, { useState } from 'react'
import CountUp from 'react-countup';

import ScrollTrigger from 'react-scroll-trigger';
const CounterUp = () => {

  const [CounterOn, SetCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => SetCounterOn(true)}
      onExit={() => SetCounterOn(false)}
    >
      <div>
        <div className="counters grid grid-cols-1 justify-items-center">
          <div className="counter1 py-[20px] border-gray-50 border-[1px] px-[36px]">
            <p className="sm:text-[40px] lg:text-[60px] text-[#E24413]">
              +
              {CounterOn && (
                <CountUp start={0} end={23} duration={2} delay={0} />
              )}
            </p>
            <p className="text-gray-400">Yılların Tecrübesi</p>
          </div>

          <div className="counter1 py-[20px] border-gray-50 border-[1px] px-[32px]">
            <p className="sm:text-[40px] lg:text-[50px] text-[#E24413]">
              {CounterOn && (
                <CountUp start={0} end={3} duration={2} delay={0} />
              )}
              Kıta
            </p>
            <p className="text-gray-400">15 Ülke</p>
          </div>

          <div className="counter1 pt-[20px] pb-[60px] border-gray-50 border-[1px] px-[25px]">
            <p className="sm:text-[40px] text-[60px] text-[#E24413]">
              %
              {CounterOn && (
                <CountUp start={0} end={80} duration={2} delay={0} />
              )}
            </p>
            <p className="text-gray-400">Uluslararası Projeler</p>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
  
}

export default CounterUp;