import React from 'react';

export default function Workshop() {
  return (
    <div className="pt-24 min-h-[80vh] flex items-center justify-center bg-brand-offwhite">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-4xl font-bold text-brand-navy mb-4">Workshop Agenda</h1>
        <p className="text-xl text-gray-600 mb-8">Detailed view of the 60-minute interactive session.</p>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <p className="text-gray-500">Please see the interactive timeline on the Home page.</p>
        </div>
      </div>
    </div>
  );
}
