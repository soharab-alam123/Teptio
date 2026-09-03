import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Button } from '../common/Button';

export const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);

  const deliveryFee = cartTotal > 999 || cartTotal === 0 ? 0 : 79;
  const grandTotal = cartTotal + deliveryFee;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setIsOrdered(true);
      clearCart();
    }, 1200);
  };

  const handleClose = () => {
    setIsCartOpen(false);
    // Reset order state after exit animation
    setTimeout(() => setIsOrdered(false), 300);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Slide-over panel */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-bold text-xl text-primary">
                    Your Essentials Cart
                  </h3>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 bg-primary/5 rounded-full text-primary">
                    {cartItems.length}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  className="p-2 rounded-full text-muted hover:text-primary hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {isOrdered ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-accent/30 text-primary flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-display font-bold text-2xl text-primary">
                      Order Dispatched!
                    </h4>
                    <p className="text-sm text-muted max-w-xs">
                      Your curated lifestyle essentials have been routed to our nearest delivery hub. Estimated delivery in 58 mins.
                    </p>
                    <div className="pt-4">
                      <Button variant="primary" onClick={handleClose}>
                        Continue Shopping
                      </Button>
                    </div>
                  </div>
                ) : cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <h4 className="font-display font-semibold text-lg text-primary">
                      Your bag is empty
                    </h4>
                    <p className="text-sm text-muted max-w-xs">
                      Explore our curated lifestyle catalog for design-forward homeware, wellness elixirs, and daily essentials.
                    </p>
                    <div className="pt-2">
                      <Button
                        to="/services/lifestyle-products"
                        variant="primary"
                        size="sm"
                        onClick={handleClose}
                      >
                        Browse Lifestyle Goods
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 p-3 rounded-2xl border border-border/80 hover:border-border transition-colors bg-[#FCFCFA]"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div>
                            <h5 className="text-sm font-semibold text-primary leading-tight line-clamp-2">
                              {item.name}
                            </h5>
                            <span className="text-xs text-muted block mt-1">
                              ₹{item.price.toLocaleString('en-IN')}
                            </span>
                          </div>

                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center border border-border rounded-lg bg-white">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 hover:bg-gray-100 text-muted hover:text-primary transition-colors rounded-l-lg"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="px-2 text-xs font-semibold tabular-nums">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 hover:bg-gray-100 text-muted hover:text-primary transition-colors rounded-r-lg"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <button
                              type="button"
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors p-1"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer Summary */}
              {!isOrdered && cartItems.length > 0 && (
                <div className="p-6 border-t border-border bg-[#F7F7F3] space-y-4">
                  <div className="space-y-2 text-xs text-muted">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-semibold text-primary">₹{cartTotal.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Hyperlocal 90-Min Transit</span>
                      {deliveryFee === 0 ? (
                        <span className="text-emerald-600 font-bold uppercase text-[10px] bg-emerald-50 px-2 py-0.5 rounded">
                          Free Express
                        </span>
                      ) : (
                        <span className="font-semibold text-primary">₹{deliveryFee}</span>
                      )}
                    </div>
                    {deliveryFee > 0 && (
                      <p className="text-[11px] text-gray-500">
                        Add ₹{(1000 - cartTotal).toLocaleString('en-IN')} more for free instant delivery.
                      </p>
                    )}
                    <div className="flex justify-between text-sm font-bold text-primary pt-2 border-t border-border/80">
                      <span>Total Amount</span>
                      <span className="font-display text-base">₹{grandTotal.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    fullWidth
                    size="lg"
                    arrow
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                  >
                    {isCheckingOut ? 'Securing Hyperlocal Route...' : `Confirm & Pay ₹${grandTotal.toLocaleString('en-IN')}`}
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
