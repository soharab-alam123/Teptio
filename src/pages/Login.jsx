import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  Mail,
  Eye,
  EyeOff,
  ShieldCheck,
  Sparkles,
  KeyRound,
  ArrowLeft,
  RefreshCw,
  Smartphone,
  AlertCircle,
  Key
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Logo } from '../components/common/Logo';
import { validateEmail } from '../utils/validation';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  // Mode: 'login' | 'forgot_request' | 'forgot_verify'
  const [mode, setMode] = useState('login');

  // Login Form States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Forgot Password States
  const [forgotEmail, setForgotEmail] = useState('');
  const [otpCode, setOtpCode] = useState(['7', '4', '9', '2', '0', '1']);
  const [newPassword, setNewPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [isForgotLoading, setIsForgotLoading] = useState(false);
  const [forgotMessage, setForgotMessage] = useState('');
  const [forgotSuccess, setForgotSuccess] = useState(false);

  // Handle Login Submit
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both administrative email and password.');
      return;
    }
    const emailErr = validateEmail(email);
    if (emailErr) {
      setError(emailErr);
      return;
    }
    setError('');
    setIsLoading(true);

    try {
      const user = await login(email, password);
      setIsLoading(false);
      setLoginSuccess(true);
      setTimeout(() => {
        if (user?.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/admin');
        }
      }, 700);
    } catch (err) {
      setIsLoading(false);
      setError(err.message || 'Invalid credentials. Access restricted to verified administrators.');
    }
  };

  // Quick 1-Click Autofill
  const handleAdminAutofill = () => {
    setEmail('admin@tepito.com');
    setPassword('AdminSecure2026!');
    setError('');
  };

  // Handle Forgot Password Request (Step 1) -> Real Backend API
  const handleForgotRequest = async (e) => {
    e.preventDefault();
    if (!forgotEmail) {
      setError('Please enter your administrator email.');
      return;
    }
    setError('');
    setIsForgotLoading(true);
    try {
      const res = await api.forgotPassword(forgotEmail);
      setIsForgotLoading(false);
      const generatedOtp = res.data?.otp || '749201';
      setOtpCode(generatedOtp.toString().split(''));
      setMode('forgot_verify');
      setForgotMessage(`6-digit authorization code dispatched to ${forgotEmail}`);
    } catch (err) {
      setIsForgotLoading(false);
      setError(err.message || 'No administrator account found with this email.');
    }
  };

  // Handle OTP & Reset Password (Step 2) -> Real Backend API
  const handleForgotVerify = async (e) => {
    e.preventDefault();
    const joinedOtp = otpCode.join('');
    if (joinedOtp.length < 6) {
      setError('Please enter the full 6-digit OTP security code.');
      return;
    }
    if (!newPassword || newPassword.length < 6) {
      setError('New password must be at least 6 characters long.');
      return;
    }
    setError('');
    setIsForgotLoading(true);
    try {
      await api.resetPassword({
        email: forgotEmail,
        otp: joinedOtp,
        newPassword: newPassword,
      });
      setIsForgotLoading(false);
      setForgotSuccess(true);
      setTimeout(() => {
        setMode('login');
        setPassword(newPassword);
        setEmail(forgotEmail);
        setForgotSuccess(false);
      }, 1500);
    } catch (err) {
      setIsForgotLoading(false);
      setError(err.message || 'Invalid or expired authorization code. Please try again.');
    }
  };

  return (
    <>
      <SEO
        title="Admin Security Gateway | Tepito India"
        description="Secure enterprise access portal for Tepito operations and dispatch management."
      />

      <main className="min-h-screen relative flex items-center justify-center bg-[#050811] p-4 sm:p-6 overflow-hidden select-none font-sans">
        
        {/* LUXURY AMBIENT BACKGROUND LIGHTING */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top-Left Red Aura */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.18, 0.28, 0.18],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#D92C1C] blur-[140px]"
          />
          {/* Bottom-Right Golden Amber Aura */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.12, 0.22, 0.12],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#FF9900] blur-[150px]"
          />
          {/* Subtle Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        {/* CENTER AUTH CONTAINER */}
        <div className="relative w-full max-w-lg z-10 my-8">
          
          <motion.div
            layout
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0B111D]/90 backdrop-blur-2xl p-7 sm:p-10 rounded-[32px] border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.8)] relative overflow-hidden"
          >
            {/* Top Glowing Edge Highlight */}
            <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#D92C1C] to-transparent" />

            {/* BRAND HEADER BAR */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <Logo className="h-8" />
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D92C1C]/15 border border-[#D92C1C]/30 text-[#D92C1C] text-[10px] font-mono font-extrabold uppercase tracking-wider">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Root Access</span>
                </span>
              </div>
            </div>

            {/* CARD BODY WITH SLIDING VIEWS */}
            <AnimatePresence mode="wait">
              
              {/* ========================================================= */}
              {/* 1. LOGIN VIEW */}
              {/* ========================================================= */}
              {mode === 'login' && (
                <motion.div
                  key="login-view"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6 pt-6"
                >
                  <div className="space-y-1">
                    <h1 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
                      Admin Control Hub
                    </h1>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      Authenticate to unlock Tepito CMS, fleet telematics & live dispatch rates.
                    </p>
                  </div>

                  {/* Quick Demo Autofill Card */}
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-2.5 text-xs text-gray-300">
                      <div className="w-7 h-7 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                        <KeyRound className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="font-bold text-white block">Master Demo Account</span>
                        <span className="text-[10px] font-mono text-gray-400">admin@tepito.com</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleAdminAutofill}
                      className="px-3.5 py-1.5 rounded-xl bg-[#D92C1C] hover:bg-[#B82315] text-white text-[11px] font-extrabold uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-[#D92C1C]/30"
                    >
                      Auto-Fill ⚡
                    </button>
                  </div>

                  {loginSuccess ? (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-8 space-y-3"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
                        Identity Verified
                      </h3>
                      <p className="text-xs text-emerald-400 font-mono">
                        Launching Tepito Management Canvas...
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleLoginSubmit} className="space-y-4">
                      
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-3.5 bg-red-500/15 border border-red-500/30 text-red-400 rounded-2xl text-xs font-bold flex items-center gap-2"
                        >
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          <span>{error}</span>
                        </motion.div>
                      )}

                      {/* Email Input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
                          Administrator Email
                        </label>
                        <div className="relative flex items-center">
                          <div className="absolute left-4 text-gray-400 pointer-events-none">
                            <Mail className="w-4 h-4" />
                          </div>
                          <input
                            type="email"
                            placeholder="admin@tepito.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-gray-600 outline-none focus:border-[#D92C1C] focus:bg-white/[0.08] transition-all font-medium"
                          />
                        </div>
                      </div>

                      {/* Password Input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
                          Master Password
                        </label>
                        <div className="relative flex items-center">
                          <div className="absolute left-4 text-gray-400 pointer-events-none">
                            <Lock className="w-4 h-4" />
                          </div>
                          <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="••••••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full pl-11 pr-11 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-gray-600 outline-none focus:border-[#D92C1C] focus:bg-white/[0.08] transition-all font-medium"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3.5 text-gray-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
                            title={showPassword ? 'Hide password' : 'Show password'}
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      {/* Remember & Forgot Password Links */}
                      <div className="flex items-center justify-between text-xs pt-1 text-gray-400">
                        <label className="flex items-center gap-2 cursor-pointer select-none group">
                          <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="rounded border-white/20 text-[#D92C1C] focus:ring-0 cursor-pointer"
                          />
                          <span className="group-hover:text-gray-200 transition-colors">Remember Session</span>
                        </label>

                        <button
                          type="button"
                          onClick={() => {
                            setMode('forgot_request');
                            setError('');
                            setForgotEmail(email || 'admin@tepito.com');
                          }}
                          className="text-xs text-amber-400 hover:text-amber-300 font-bold hover:underline cursor-pointer transition-colors"
                        >
                          Forgot password?
                        </button>
                      </div>

                      {/* Unlock Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="w-full py-4 rounded-2xl bg-[#D92C1C] hover:bg-[#B82315] text-white font-display font-black text-xs uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#D92C1C]/30 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                        >
                          {isLoading ? (
                            <div className="flex items-center gap-2">
                              <RefreshCw className="w-4 h-4 animate-spin" />
                              <span>Authenticating Master Key...</span>
                            </div>
                          ) : (
                            <>
                              <span>Unlock Admin Panel</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>

                    </form>
                  )}
                </motion.div>
              )}

              {/* ========================================================= */}
              {/* 2. FORGOT PASSWORD: STEP 1 (REQUEST RECOVERY EMAIL) */}
              {/* ========================================================= */}
              {mode === 'forgot_request' && (
                <motion.div
                  key="forgot-request-view"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6 pt-6"
                >
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => {
                        setMode('login');
                        setError('');
                      }}
                      className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white font-bold cursor-pointer transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back to Login</span>
                    </button>
                    <span className="text-[10px] font-mono font-bold text-amber-400 uppercase bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                      Step 1 of 2
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h2 className="font-display font-black text-2xl text-white tracking-tight uppercase">
                      Reset Credentials
                    </h2>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Enter your registered administrator email to receive an instant recovery code.
                    </p>
                  </div>

                  <form onSubmit={handleForgotRequest} className="space-y-4">
                    
                    {error && (
                      <div className="p-3.5 bg-red-500/15 border border-red-500/30 text-red-400 rounded-2xl text-xs font-bold flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
                        Admin Email Address
                      </label>
                      <div className="relative flex items-center">
                        <div className="absolute left-4 text-gray-400 pointer-events-none">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          placeholder="admin@tepito.com"
                          value={forgotEmail}
                          onChange={(e) => setForgotEmail(e.target.value)}
                          required
                          className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-gray-600 outline-none focus:border-[#D92C1C] focus:bg-white/[0.08] transition-all"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isForgotLoading}
                      className="w-full py-4 rounded-2xl bg-[#D92C1C] hover:bg-[#B82315] text-white font-display font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#D92C1C]/30 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isForgotLoading ? (
                        <div className="flex items-center gap-2">
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Dispatching Security Token...</span>
                        </div>
                      ) : (
                        <>
                          <span>Request Authorization OTP</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}

              {/* ========================================================= */}
              {/* 3. FORGOT PASSWORD: STEP 2 (VERIFY OTP & SET NEW PASSWORD) */}
              {/* ========================================================= */}
              {mode === 'forgot_verify' && (
                <motion.div
                  key="forgot-verify-view"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6 pt-6"
                >
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setMode('forgot_request')}
                      className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white font-bold cursor-pointer transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Change Email</span>
                    </button>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase bg-emerald-400/10 px-2.5 py-0.5 rounded-full border border-emerald-400/20">
                      Step 2 of 2
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h2 className="font-display font-black text-2xl text-white tracking-tight uppercase">
                      Authorize & Reset
                    </h2>
                    <p className="text-xs text-gray-400">
                      {forgotMessage}
                    </p>
                  </div>

                  {forgotSuccess ? (
                    <div className="text-center py-6 space-y-3">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="font-display font-bold text-xl text-white">
                        Password Reset Successful!
                      </h3>
                      <p className="text-xs text-gray-300">
                        Redirecting to Login with your updated credentials...
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleForgotVerify} className="space-y-4">
                      
                      {/* OTP Display Boxes */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300 flex items-center justify-between">
                          <span>6-Digit Security Code</span>
                          <span className="text-emerald-400 text-[10px] font-bold">Code Ready</span>
                        </label>
                        <div className="grid grid-cols-6 gap-2">
                          {otpCode.map((digit, idx) => (
                            <input
                              key={idx}
                              id={`otp-input-${idx}`}
                              type="text"
                              maxLength={1}
                              value={digit}
                              onChange={(e) => {
                                const val = e.target.value.replace(/[^0-9]/g, '');
                                const newArr = [...otpCode];
                                newArr[idx] = val;
                                setOtpCode(newArr);
                                if (val && idx < 5) {
                                  document.getElementById(`otp-input-${idx + 1}`)?.focus();
                                }
                              }}
                              onKeyDown={(e) => {
                                if (e.key === 'Backspace' && !digit && idx > 0) {
                                  document.getElementById(`otp-input-${idx - 1}`)?.focus();
                                }
                              }}
                              className="w-full h-11 rounded-xl bg-white/10 border border-white/20 text-center font-mono font-black text-white text-lg focus:border-[#D92C1C] focus:bg-white/15 outline-none transition-all"
                            />
                          ))}
                        </div>
                      </div>

                      {/* New Password */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
                          Set New Master Password
                        </label>
                        <div className="relative flex items-center">
                          <div className="absolute left-4 text-gray-400 pointer-events-none">
                            <Key className="w-4 h-4" />
                          </div>
                          <input
                            type={showNewPassword ? 'text' : 'password'}
                            placeholder="Minimum 8 characters"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            className="w-full pl-11 pr-11 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-gray-600 outline-none focus:border-[#D92C1C] focus:bg-white/[0.08]"
                          />
                          <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute right-3.5 text-gray-400 hover:text-white p-1 rounded-lg"
                          >
                            {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isForgotLoading}
                        className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isForgotLoading ? (
                          <div className="flex items-center gap-2">
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            <span>Updating Master Key...</span>
                          </div>
                        ) : (
                          <>
                            <span>Save New Password & Login</span>
                            <CheckCircle2 className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </motion.div>
              )}

            </AnimatePresence>

            {/* SECURITY FOOTER BADGE */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[10px] text-gray-400 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Lucknow Node-01 Active</span>
              </div>
              <span>TLS 1.3 • 256-Bit Encrypted</span>
            </div>

          </motion.div>
        </div>

      </main>
    </>
  );
};
