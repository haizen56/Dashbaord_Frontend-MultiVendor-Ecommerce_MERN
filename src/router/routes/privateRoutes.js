

import { adminRoutes } from './adminRoutes';
import { sellerRoutes } from './sellerRoutes';

export const privateRoutes = [
    ...adminRoutes,
    ...sellerRoutes
];



// import { adminRoutes } from './adminRoutes';
// import { sellerRoutes } from './sellerRoutes';

// export const privateRoutes = adminRoutes.concat(sellerRoutes);
