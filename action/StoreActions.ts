import { DESTROY_SESSION } from '../types/StoreTypes';

export const resetStore = () => {
    return { type: DESTROY_SESSION };
};