export const denormalizeUsers = data => data.map(user => ({
  address: `${user.address.street} ${user.address.suite}, ${user.address.city}`,
  company: user.company.name,
  email: user.email,
  id: user.id,
  name: user.name,
  phone: user.phone,
  username: user.username,
}));
