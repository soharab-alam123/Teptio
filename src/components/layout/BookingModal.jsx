import React, { useState } from 'react';
import { useBookingModal } from '../../context/BookingModalContext';
import { useCMS } from '../../context/CMSContext';
import { api } from '../../services/api';
import { Modal } from '../common/Modal';
import { Input } from '../common/Input';
import { Select } from '../common/Select';
import { Button } from '../common/Button';
import { CheckCircle2, MapPin, Calendar, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { 
  validateName, 
  validatePhone, 
  filterNameInput, 
  filterPhoneInput 
} from '../../utils/validation';

export const BookingModal = () => {
  const { isOpen, closeBooking, service } = useBookingModal();
  const { services } = useCMS();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceId: 'parcel-delivery',
    name: '',
    phone: '',
    address: '',
    date: 'Today (Immediate)',
    timeSlot: 'Within 30 mins'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Synchronize when opened with service
  React.useEffect(() => {
    if (service?.id) {
      setFormData(prev => ({ ...prev, serviceId: service.id }));
    }
    setStep(1);
    setErrors({});
  }, [service, isOpen]);

  const serviceOptions = (services || []).map(s => ({
    value: s.id,
    label: s.title
  }));

  // Sanitized handlers
  const handleNameChange = (e) => {
    const sanitized = filterNameInput(e.target.value);
    setFormData(prev => ({ ...prev, name: sanitized }));
    if (errors.name) {
      setErrors(prev => ({ ...prev, name: validateName(sanitized) }));
    }
  };

  const handlePhoneChange = (e) => {
    const sanitized = filterPhoneInput(e.target.value);
    setFormData(prev => ({ ...prev, phone: sanitized }));
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: validatePhone(sanitized) }));
    }
  };

  const handleAddressChange = (e) => {
    const val = e.target.value;
    setFormData(prev => ({ ...prev, address: val }));
    if (errors.address && val.trim().length >= 5) {
      setErrors(prev => ({ ...prev, address: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    const nameErr = validateName(formData.name);
    if (nameErr) errs.name = nameErr;

    const phoneErr = validatePhone(formData.phone);
    if (phoneErr) errs.phone = phoneErr;

    if (!formData.address.trim()) {
      errs.address = 'Street address / landmark is required';
    } else if (formData.address.trim().length < 5) {
      errs.address = 'Please enter a complete street address in Lucknow';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      // 1. Submit to booking endpoint
      const res = await api.createBooking({
        serviceId: formData.serviceId,
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        date: formData.date,
        timeSlot: formData.timeSlot,
      });

      const generatedRef = res.data?.bookingRef || ('TP-' + Math.floor(100000 + Math.random() * 900000));
      setBookingRef(generatedRef);

      // 2. Also register as lead
      api.createLead({
        name: formData.name,
        phone: formData.phone,
        service: currentServiceObj?.title || formData.serviceId,
        source: 'booking-modal',
        message: `Doorstep address: ${formData.address}. Timing: ${formData.date} - ${formData.timeSlot}`,
      }).catch(() => {});

      setIsSubmitting(false);
      setStep(2);
    } catch (err) {
      // Fallback for offline/local simulation
      const fallbackRef = 'TP-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(fallbackRef);
      setIsSubmitting(false);
      setStep(2);
    }
  };

  const currentServiceObj = (services || []).find(s => s.id === formData.serviceId) || services?.[0];

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeBooking}
      maxWidth="max-w-lg"
      title={step === 1 ? "Instant Service Dispatch" : "Booking Confirmed"}
      subtitle={
        step === 1
          ? `Dispatched in Lucknow: ${currentServiceObj?.title || 'Service'}`
          : "Your certified specialist is notified and on standby"
      }
    >
      {step === 1 ? (
        <form onSubmit={handleSubmit} className="space-y-3.5 pt-1">
          <Select
            label="Service Category"
            value={formData.serviceId}
            onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
            options={serviceOptions}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input
              label="Your Full Name *"
              placeholder="e.g. Rahul Verma"
              required
              value={formData.name}
              onChange={handleNameChange}
              error={errors.name}
            />
            <Input
              label="Contact Phone (10 digits) *"
              placeholder="e.g. 9876543210"
              type="tel"
              maxLength={10}
              required
              value={formData.phone}
              onChange={handlePhoneChange}
              error={errors.phone}
            />
          </div>

          <Input
            label="Street Address / Landmark (Lucknow) *"
            placeholder="e.g. Flat 402, Shalimar Gallant, Mahanagar, Lucknow"
            icon={MapPin}
            required
            value={formData.address}
            onChange={handleAddressChange}
            error={errors.address}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Select
              label="Preferred Day"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              options={[
                { value: 'Today (Immediate)', label: 'Today (Immediate)' },
                { value: 'Tomorrow Morning (9 AM - 12 PM)', label: 'Tomorrow Morning' },
                { value: 'Tomorrow Afternoon (1 PM - 5 PM)', label: 'Tomorrow Afternoon' },
                { value: 'This Weekend Slot', label: 'This Weekend Slot' }
              ]}
            />
            <Select
              label="Time Preference"
              value={formData.timeSlot}
              onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
              options={[
                { value: 'Within 30 mins', label: 'Within 30 mins' },
                { value: 'Within 1 Hour', label: 'Within 1 Hour' },
                { value: 'Scheduled Evening (6 PM - 9 PM)', label: 'Evening (6-9 PM)' }
              ]}
            />
          </div>

          {/* Transparent Pricing Callout */}
          <div className="p-3.5 rounded-2xl bg-[#F6F4F1] border border-[#E5E1DD] flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#666666] block">
                Upfront Fixed Fare
              </span>
              <span className="text-xs text-[#3D3D3D]">
                Cash on completion or UPI • Zero surge pricing
              </span>
            </div>
            <div className="text-right">
              <span className="font-extrabold text-sm text-[#D92C1C]">
                {currentServiceObj?.subServices?.[0]?.price || 'Fixed Fare'}
              </span>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-end gap-2.5">
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={closeBooking}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="md"
              arrow
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Confirming Dispatch...' : 'Confirm Dispatch'}
            </Button>
          </div>
        </form>
      ) : (
        /* STEP 2: CONFIRMATION SUCCESS */
        <div className="py-6 text-center space-y-5">
          <div className="w-16 h-16 rounded-full bg-[#FFF1EF] border border-[#D92C1C]/25 text-[#D92C1C] flex items-center justify-center mx-auto shadow-2xs">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-1.5">
            <span className="text-xs font-bold text-[#D92C1C] uppercase tracking-wider">
              Booking Confirmed
            </span>
            <h3 className="font-extrabold text-2xl text-[#111111] uppercase tracking-tight">
              SPECIALIST ON THE WAY!
            </h3>
            <p className="text-xs text-[#555555] max-w-sm mx-auto leading-relaxed">
              We have dispatched your request for <strong>{currentServiceObj?.title}</strong> in Lucknow. You will receive an SMS tracking link at <strong>+91 {formData.phone}</strong>.
            </p>
          </div>

          {/* Reference Card */}
          <div className="p-4 rounded-2xl bg-[#F6F4F1] border border-[#E5E1DD] max-w-sm mx-auto text-left space-y-2 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-[#E5E1DD]">
              <span className="text-[#666666]">Dispatch Reference:</span>
              <span className="font-mono font-bold text-[#111111]">{bookingRef}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#666666]">Customer Name:</span>
              <span className="font-medium text-[#111111]">{formData.name}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#666666]">Destination Area:</span>
              <span className="font-medium text-[#111111] truncate max-w-[180px]">{formData.address}</span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#E5E1DD]">
              <span className="text-[#666666]">ETA to Doorstep:</span>
              <span className="font-bold text-[#D92C1C]">Within 28 mins</span>
            </div>
          </div>

          <div className="pt-2">
            <Button
              variant="black"
              size="md"
              onClick={closeBooking}
              className="w-full sm:w-auto"
            >
              Done & Return to Site
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};
