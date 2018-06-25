const formatDate = (timestamp, type = '') => {
  if (!timestamp) return '';
  const date = new Date(+timestamp);
  const day = date
    .toLocaleDateString()
    .split('/')
    .map(i => (i.length === 1 ? `0${i}` : i))
    .join('-');
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  const zero = i => (i < 10 ? `0${i}` : i);
  return type === 'day' ? day : `${day} ${zero(h)}:${zero(m)}:${zero(s)}`;
};

export default formatDate;
