import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Input } from '../components/common/Input';
import { Button } from '../components/common/Button';
import { Logo } from '../components/common/Logo';
import { useAuth } from '../context/AuthContext';

import { 
  validateName, 
  validatePhone, 
  validateEmail, 
  filterNameInput, 
  filterPhoneInput 
} from '../utils/validation';

export const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleNameChange = (e) => {
    const sanitized = filterNameInput(e.target.value);
    setFormData(prev => ({ ...prev, fullName: sanitized }));
    if (errors.fullName) {
      setErrors(prev => ({ ...prev, fullName: validateName(sanitized) }));
    }
  };

  const handlePhoneChange = (e) => {
    const sanitized = filterPhoneInput(e.target.value);
    setFormData(prev => ({ ...prev, phone: sanitized }));
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: validatePhone(sanitized) }));
    }
  };

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setFormData(prev => ({ ...prev, email: val }));
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: validateEmail(val) }));
    }
  };

  const validate = () => {
    const errs = {};
    const nameErr = validateName(formData.fullName);
    if (nameErr) errs.fullName = nameErr;

    const emailErr = validateEmail(formData.email);
    if (emailErr) errs.email = emailErr;

    const phoneErr = validatePhone(formData.phone);
    if (phoneErr) errs.phone = phoneErr;

    if (!formData.password || formData.password.length < 6) errs.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) errs.confirmPassword = 'Passwords do not match';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setApiError('');
    setIsLoading(true);

    try {
      await register({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });
      setIsLoading(false);
      setSuccess(true);
      setTimeout(() => navigate('/'), 1200);
    } catch (err) {
      setIsLoading(false);
      setApiError(err.message || 'Registration failed. Please check your details.');
    }
  };

  return (
    <>
      <SEO
        title="Create an Account | Tepito"
        description="Join Tepito to unlock fast 1-tap bookings, live tracking, and personalized service preferences."
      />

      <main className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-background">
        
        {/* Left Editorial Brand Column */}
        <div className="hidden lg:flex lg:col-span-5 bg-primary text-white p-12 xl:p-16 flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-grid-dark opacity-30 pointer-events-none" />

          <div className="relative z-10">
            <Logo className="h-10" />
          </div>

          <div className="relative z-10 space-y-6 my-auto max-w-sm">
            <span className="text-accent text-xs font-mono font-bold uppercase tracking-widest block">
              Effortless Living
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight leading-[1.05]">
              JOIN THE STANDARD <br />
              IN URBAN CARE.
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Create your account once. Enjoy transparent pricing, priority dispatch, and guaranteed quality assurance shield coverage.
            </p>
          </div>

          <div className="relative z-10 text-xs text-gray-400 border-t border-white/10 pt-6">
            © {new Date().getFullYear()} Tepito Technologies Inc.
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7 flex items-center justify-center p-6 sm:p-12 md:p-16 pt-24 sm:pt-28 lg:pt-16">
          <div className="w-full max-w-md space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-border shadow-elevated">
            
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted">
                New Membership
              </span>
              <h1 className="font-display font-black text-3xl text-primary tracking-tight uppercase">
                CREATE ACCOUNT
              </h1>
              <p className="text-xs text-muted">
                Sign up in seconds to access all seven services.
              </p>
            </div>

            {success ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/30 text-primary flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-2xl text-primary">
                  Account Created!
                </h3>
                <p className="text-xs text-muted">
                  Logged in successfully! Redirecting to home...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {apiError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-medium">
                    {apiError}
                  </div>
                )}

                <Input
                  label="Full Name *"
                  placeholder="e.g. Rahul Varma"
                  icon={User}
                  required
                  value={formData.fullName}
                  onChange={handleNameChange}
                  error={errors.fullName}
                />

                <Input
                  label="Email Address *"
                  type="email"
                  placeholder="rahul@example.com"
                  icon={Mail}
                  required
                  value={formData.email}
                  onChange={handleEmailChange}
                  error={errors.email}
                />

                <Input
                  label="Phone Number (10 digits) *"
                  placeholder="e.g. 9876543210"
                  type="tel"
                  maxLength={10}
                  icon={Phone}
                  required
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  error={errors.phone}
                />

                <Input
                  label="Password *"
                  type="password"
                  placeholder="Minimum 6 characters"
                  icon={Lock}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  error={errors.password}
                />

                <Input
                  label="Confirm Password *"
                  type="password"
                  placeholder="Repeat your password"
                  icon={Lock}
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  error={errors.confirmPassword}
                />

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    size="lg"
                    arrow
                    disabled={isLoading}
                  >
                    {isLoading ? 'Creating Account...' : 'Create Account'}
                  </Button>
                </div>

                <div className="pt-3 text-center border-t border-border text-xs text-muted">
                  Already have an account?{' '}
                  <Link to="/login" className="font-bold text-primary hover:underline">
                    Log in here
                  </Link>
                </div>
              </form>
            )}

          </div>
        </div>

      </main>
    </>
  );
};
