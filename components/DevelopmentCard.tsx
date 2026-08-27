
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Development, ModelData } from '../types';
import { MODEL_DATA_MAP } from '../data/developments';

interface Props {
  development: Development;
}

const DevelopmentCard: React.FC<Props> = ({ development }) => {
  const [open, setOpen] = useState(false);
  const hideExploreDetails = ['Sannera', 'Terraza', 'Terazza De Sto. Tomas'].includes(development.name);

  return (
    <>
      <div className="group bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
        <div className="relative overflow-hidden h-64">
          <img
            src={development.imageUrl}
            alt={development.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-800 shadow-sm">
            {development.status}
          </div>
          {!hideExploreDetails && (
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center">
              <button
                onClick={() => setOpen(true)}
                className="bg-white text-gray-900 px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-green-600 hover:text-white transition-colors"
              >
                Explore Details
              </button>
            </div>
          )}
        </div>

        <div className="p-6 md:p-8 flex flex-col grow">
          <div className="flex items-center text-green-600 text-xs font-semibold uppercase tracking-widest mb-2">
            <svg className="w-3 h-3 mr-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {development.mapUrl ? (
              <a
                href={development.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-green-800 transition-colors"
              >
                {development.location}
              </a>
            ) : (
              development.location
            )}
          </div>
          <h3 className="text-xl md:text-2xl text-gray-900 mb-3 group-hover:text-green-600 transition-colors">{development.name}</h3>
          {!hideExploreDetails && (
            <button
              onClick={() => setOpen(true)}
              className="md:hidden mt-auto w-full py-2 border border-green-600 text-green-600 text-xs font-bold uppercase tracking-widest hover:bg-green-600 hover:text-white transition-colors rounded-sm touch-manipulation"
            >
              Explore Details
            </button>
          )}
        </div>
      </div>

      {open && <Modal development={development} onClose={() => setOpen(false)} />}
    </>
  );
};

const Modal: React.FC<{ development: Development; onClose: () => void }> = ({ development, onClose }) => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const mapQuery = encodeURIComponent(`${development.name} ${development.location}`);
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const models = development.houseModels || [];

  const SpecTable: React.FC<{ specs: ModelData['specs'] }> = ({ specs }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-2 gap-y-4 sm:gap-6 md:gap-8 bg-gray-50 border border-gray-100 rounded-lg p-3 md:p-6 w-full text-xs md:text-xs">
      {[
        { label: 'Lot Area', value: specs.lotArea, unit: 'sqm' },
        { label: 'Floor Area', value: specs.floorArea, unit: 'sqm' },
        { label: 'Bedroom', value: specs.bedroom, unit: '–' },
        { label: 'Toilet & Bath', value: specs.toiletBath, unit: '–' },
        { label: 'Carport', value: specs.carport, unit: '–' },
      ].map((s) => (
        <div key={s.label} className="text-center">
          <div className="text-[11px] md:text-xs text-gray-500 whitespace-nowrap">{s.label}</div>
          <div className="font-semibold text-xs md:text-sm mt-1 whitespace-nowrap">{s.value}</div>
          <div className="text-[11px] text-gray-500 whitespace-nowrap">{s.unit}</div>
        </div>
      ))}
    </div>
  );

  if (!expandedImage) {
    return typeof document !== 'undefined' ? ReactDOM.createPortal(
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" onClick={onClose} />
        <div
          className="bg-white w-[95vw] md:w-[600px] lg:w-[750px] max-w-4xl max-h-[90vh] overflow-auto rounded-lg shadow-lg relative z-10 p-4 md:p-6 text-center"
        >
          <button onClick={onClose} className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full text-lg touch-manipulation">✕</button>
          {development.name === 'Santevi' && (
            <div className="flex justify-center mb-3">
              <img src="/santevi-logo.png" alt="Santevi Logo" className="h-16 object-contain" />
            </div>
          )}
          {development.name === 'Savana South' && (
            <div className="flex justify-center mb-3">
              <img src="/SavanaSouth-Logo.png" alt="Savana South Logo" className="h-16 object-contain" />
            </div>
          )}
          {development.name === 'Savana' && (
            <div className="flex justify-center mb-3">
              <img src="/Savana1.jpg" alt="Savana Logo" className="h-16 object-contain" />
            </div>
          )}
          {development.name === 'Caliya' && (
            <div className="flex justify-center mb-3">
              <img src="/Caliya-Logo.png" alt="Caliya Logo" className="h-14 object-contain" />
            </div>
          )}
          {development.name === 'Anara' && (
            <div className="flex justify-center mb-3">
              <img src="/Anara-Logo.png" alt="Anara Logo" className="h-24 object-contain" />
            </div>
          )}
          {development.name === 'Sannera' && (
            <div className="flex justify-center mb-3">
              <img src="/Sannera-Logo.webp" alt="Sannera Logo" className="h-24 object-contain" />
            </div>
          )}
          {development.name === 'Seriya' && (
            <div className="flex justify-center mb-3">
              <img src="/Seriya-Logo.png" alt="Seriya Logo" className="h-24 object-contain" />
            </div>
          )}
          {development.name === 'Sentro' && (
            <div className="flex justify-center mb-3">
              <img src="/Sentro-Logo.png" alt="Sentro Logo" className="h-24 object-contain" />
            </div>
          )}
          {development.name === 'Amirra' && (
            <div className="flex justify-center mb-3">
              <img src="/Amirra/Amirra Logo.png" alt="Amirra Logo" className="h-12 object-contain" />
            </div>
          )}
          {development.name !== 'Santevi' && development.name !== 'Savana South' && development.name !== 'Savana' && development.name !== 'Caliya' && development.name !== 'Anara' && development.name !== 'Sannera' && development.name !== 'Seriya' && development.name !== 'Sentro' && development.name !== 'Amirra' && (
            <h2 className="text-xl md:text-2xl font-bold mb-2 pr-8">{development.name}</h2>
          )}
          {development.description && <p className="text-gray-600 mb-4">{development.description}</p>}

          <div className="mb-8">
            <h3 className="font-semibold mb-6 uppercase tracking-widest text-sm">House Models</h3>
            <div className="flex flex-col gap-12">
              {models.map((m, i) => {
                const data = MODEL_DATA_MAP[m];
                const isOdd = i % 2 !== 0;
                if (!data) return <div key={m} className="text-gray-500 text-sm">{m}</div>;
                return (
                  <div key={m} className="group rounded-xl p-4 transition-all duration-300 hover:bg-gray-50 hover:shadow-md cursor-default">
                    {i > 0 && <hr className="border-gray-100 mb-12" />}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className={`flex flex-col px-4 ${isOdd ? 'md:order-2 items-start text-left' : 'items-center text-center'}`}>
                        <h4 className="text-xl font-bold mb-2 uppercase transition-colors duration-300 group-hover:text-green-600">{data.label}</h4>
                        <p className="text-gray-600 mb-4 max-w-xl">{data.description}</p>
                        <SpecTable specs={data.specs} />
                      </div>
                      <div className={`w-full flex justify-center items-center overflow-hidden rounded ${isOdd ? 'md:order-1' : ''}`}>
                        <img
                          src={development.houseModelImages?.[i] || development.imageUrl}
                          alt={`${development.name} - ${data.label}`}
                          onClick={() => setExpandedImage(development.houseModelImages?.[i] || development.imageUrl)}
                          className="w-full md:w-80 object-cover rounded shadow-sm transition-transform duration-500 group-hover:scale-105 cursor-pointer hover:opacity-90"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Google Map</h3>
            <div className="w-full md:w-3/4 mx-auto h-48 bg-gray-100">
              <iframe
                title={`map-${development.id}`}
                src={mapSrc}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Nearby Establishments</h3>
            <ul className="list-disc list-inside text-gray-700 text-left mx-auto max-w-xl">
              {(development.nearbyEstablishments || []).map((n, idx) => (
                <li key={idx}>{n}</li>
              ))}
            </ul>
          </div>

          {!['Sannera', 'Terraza', 'Terazza De Sto. Tomas'].includes(development.name) && (
            <div className="text-center">
              <a href="/our-ambassadors" className="inline-block bg-green-600 text-white px-6 py-2 rounded font-semibold text-[10px]">Book a viewing</a>
            </div>
          )}
        </div>
      </div>,
      document.body
    ) : null;
  }

  return typeof document !== 'undefined' ? ReactDOM.createPortal(
    <div className="fixed inset-0 z-60 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80" onClick={() => setExpandedImage(null)} />
      <div className="relative z-10 max-w-4xl w-full mx-auto px-4 py-4 flex items-center justify-center">
        <button
          onClick={() => setExpandedImage(null)}
          className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-white/90 hover:bg-white text-gray-800 rounded-full text-2xl shadow-lg transition-all"
          aria-label="Close"
        >
          ✕
        </button>
        <img
          src={expandedImage}
          alt="Expanded house model"
          className="max-h-[85vh] w-full object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>,
    document.body
  ) : null;
};
export default DevelopmentCard;
