'use client';

import { property } from '@/content/property';

export default function TechnicalDetailsSection() {
  return (
    <section id="ficha-tecnica" className="py-8 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card p-6 sm:p-8">
          <h3 className="text-xl font-bold font-display text-primary mb-6 text-center">
            Ficha Técnica
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {property.details.map((d, i) => (
              <div key={i} className="text-center p-3">
                <p className="text-sm text-text-light mb-1">{d.label}</p>
                <p className="text-lg font-bold text-primary">{d.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
