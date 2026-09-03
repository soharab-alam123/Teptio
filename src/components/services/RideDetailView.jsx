import React, { useState } from 'react';
import { Car, Users, Shield, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import { useBookingModal } from '../../context/BookingModalContext';

export const RideDetailView = ({ service }) => {
  const { openBooking } = useBookingModal();
  const [selectedTier, setSelectedTier] = useState('premium');

  const tiers = service.tiers || [];

  return (
    <div className="space-y-16">
      {/* Tiers Selector */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted block mb-1">
            Choose Your Vehicle Class
          </span>
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-primary tracking-tight uppercase">
            RELIABLE TRANSIT FLEET
          </h3>
          <p className="text-sm text-muted mt-2">
            Upfront fixed fares, zero cancellation policy, and chauffeur-vetted drivers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => {
            const isSelected = selectedTier === tier.id;
            return (
              <div
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`rounded-3xl p-8 border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-primary shadow-elevated ring-2 ring-primary'
                    : 'bg-[#FCFCFA] border-border hover:border-gray-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-muted uppercase">
                      {tier.capacity}
                    </span>
                    {tier.popular && (
                      <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 bg-accent text-primary rounded-full">
                        Recommended
                      </span>
                    )}
                  </div>

                  <h4 className="font-display font-black text-2xl text-primary tracking-tight">
                    {tier.name}
                  </h4>
                  <p className="text-xs text-muted mt-1 mb-4">
                    {tier.tagline}
                  </p>

                  <div className="my-4 py-4 border-y border-border space-y-1">
                    <span className="text-xs text-muted block">Base Rate</span>
                    <span className="font-display font-extrabold text-3xl text-primary font-mono">
                      {tier.baseFare}
                    </span>
                    <span className="text-xs text-muted block">+ {tier.pricePerKm}</span>
                  </div>

                  <div className="space-y-2 pt-2">
                    {tier.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-primary font-medium">
                        <Check className="w-3.5 h-3.5 text-accent-dark flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6">
                  <Button
                    variant={isSelected ? 'primary' : 'secondary'}
                    fullWidth
                    size="md"
                    onClick={(e) => {
                      e.stopPropagation();
                      openBooking({ id: 'cab-ride', title: `Cab (${tier.name})` });
                    }}
                  >
                    Select {tier.name}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
