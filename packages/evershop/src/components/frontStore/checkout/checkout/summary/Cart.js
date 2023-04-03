import PropTypes from 'prop-types';
import React from 'react';
import { Discount } from '@components/frontStore/checkout/checkout/summary/cart/Discount';
import { Shipping } from '@components/frontStore/checkout/checkout/summary//cart/Shipping';
import { Subtotal } from '@components/frontStore/checkout/checkout/summary//cart/Subtotal';
import { Tax } from '@components/frontStore/checkout/checkout/summary//cart/Tax';
import { Total } from '@components/frontStore/checkout/checkout/summary//cart/Total';

function CartSummary({
  totalQty,
  subTotal,
  grandTotal,
  discountAmount,
  taxAmount,
  shippingFeeExclTax,
  shippingMethod,
  coupon
}) {
  return (
    <div className="checkout-summary-block">
      <Subtotal count={totalQty} total={subTotal.text} />
      <Shipping method={shippingMethod} cost={shippingFeeExclTax.text} />
      <Tax taxClass="" amount={taxAmount.text} />
      <Discount code={coupon} discount={discountAmount.text} />
      <Total total={grandTotal.text} />
    </div>
  );
}

CartSummary.propTypes = {
  coupon: PropTypes.string,
  discountAmount: PropTypes.shape({
    text: PropTypes.string.isRequired
  }),
  grandTotal: PropTypes.shape({
    text: PropTypes.string.isRequired
  }),
  shippingFeeExclTax: PropTypes.shape({
    text: PropTypes.string.isRequired
  }),
  shippingMethod: PropTypes.string,
  subTotal: PropTypes.shape({
    text: PropTypes.string.isRequired
  }),
  taxAmount: PropTypes.shape({
    text: PropTypes.string.isRequired
  }),
  totalQty: PropTypes.string.isRequired
};

CartSummary.defaultProps = {
  coupon: '',
  discountAmount: {
    text: ''
  },
  grandTotal: {
    text: ''
  },
  shippingFeeExclTax: {
    text: ''
  },
  shippingMethod: '',
  subTotal: {
    text: ''
  },
  taxAmount: {
    text: ''
  }
};

export { CartSummary };
