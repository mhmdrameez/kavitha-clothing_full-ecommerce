import React from 'react';
import './Logo.scss';

export default function Logo() {
  return (
    <div className="logo">
      <a href="/" className="logo-icon">
        Kavitha clothing
      </a>
    </div>
  );
}

export const layout = {
  areaId: 'header',
  sortOrder: 1
};

