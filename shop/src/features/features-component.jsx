import React from 'react';
import { FeaturesWrapper } from './features-style';
import { Truck, ShieldCheck, Lock, Phone } from 'lucide-react';

const Features = () => {
  const features = [
    { icon: <Truck size={32} strokeWidth={1.5} />, title: 'Free Shipping', desc: 'Order above $200' },
    { icon: <ShieldCheck size={32} strokeWidth={1.5} />, title: 'Money-back', desc: '30 days guarantee' },
    { icon: <Lock size={32} strokeWidth={1.5} />, title: 'Secure Payments', desc: 'Secured by Stripe' },
    { icon: <Phone size={32} strokeWidth={1.5} />, title: '24/7 Support', desc: 'Phone and Email support' },
  ];

  return (
    <FeaturesWrapper>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </FeaturesWrapper>
  );
};

export default Features;
