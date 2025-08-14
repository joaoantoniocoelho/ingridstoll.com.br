"use client"

import React from 'react';

const LazyScrollIndicator = () => {
  return (
    <div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in"
      style={{ animationDelay: '0.8s' }}
      aria-hidden="true"
    >
      <span className="text-sm text-neutral-700 mb-2">Role para descobrir</span>
      <div className="w-6 h-10 border-2 border-neutral-500 rounded-full flex justify-center p-1">
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce-gentle" />
      </div>
    </div>
  );
};

export default LazyScrollIndicator;
