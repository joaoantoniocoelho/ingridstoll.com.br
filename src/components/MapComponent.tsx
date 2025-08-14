"use client"

import React, { useState } from 'react';

const MapComponent = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  
  const address = "Av. Cristóvão Colombo, 580 - Floresta, Porto Alegre - RS, 90560-000";
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.3023370511194!2d-51.20744732375172!3d-30.02459277496933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979a6b5cd496f%3A0x6d7a1fc8a1c87026!2sAv.%20Crist%C3%B3v%C3%A3o%20Colombo%2C%20580%20-%20Floresta%2C%20Porto%20Alegre%20-%20RS%2C%2090560-000!5e0!3m2!1spt-BR!2sbr!4v1692723154350!5m2!1spt-BR!2sbr";

  const loadMap = () => {
    // Use requestIdleCallback for better performance
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => setMapLoaded(true));
    } else {
      setTimeout(() => setMapLoaded(true), 0);
    }
  };

  const openInGoogleMaps = () => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank', 'noopener,noreferrer');
  };

  if (!mapLoaded) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 h-72 relative">
        <div className="w-full h-full bg-neutral-100 rounded flex flex-col items-center justify-center">
          {/* Ícone de localização */}
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          
          <h4 className="text-lg font-semibold text-neutral-800 mb-2 text-center">Localização do Consultório</h4>
          <p className="text-sm text-neutral-600 text-center mb-4 px-4">{address}</p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={loadMap}
              className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition-all duration-200 hover:scale-105 active:scale-95 flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Ver Mapa
            </button>
            
            <button
              onClick={openInGoogleMaps}
              className="bg-white border border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-50 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Abrir no Google Maps
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-72">
      <iframe 
        src={googleMapsUrl}
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        loading="lazy" 
        referrerPolicy="no-referrer"
        sandbox="allow-scripts allow-same-origin allow-forms"
        title="Localização do consultório - Av. Cristóvão Colombo, 580, Porto Alegre"
        className="rounded"
        aria-label="Mapa do Google mostrando a localização do consultório"
      />
    </div>
  );
};

export default MapComponent; 