"use client";
import { useState } from 'react';
import Image from 'next/image';
import React from 'react'
import { CarProps } from '@/types';

interface CarCardProps{
    car: CarProps;
}

const CarCard = ({car}: CarCardProps) => {
    const {city_mpg, year, make, model, transmission, drive} = car;
  return (
    <div className='car-card group'>
     
    </div>
  )
}

export default CarCard
