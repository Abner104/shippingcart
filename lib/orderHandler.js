export const createOrder = async ({
  name,
  phone,
  direccion,
  total,
  PaymentMethod,
}) => {
  const res = await fetch('/api/order', {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      phone: phone,
      direccion,
      direccion,
      total: parseFloat(total),
      method: PaymentMethod,
      status: 1,
    }),
  });
  const id = await res.json();
  return id;
};
