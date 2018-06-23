const requireAll = requireContext => requireContext.keys().map(x => requireContext(x));
const req = require.context('./svg', false, /\.svg$/);

requireAll(req);
