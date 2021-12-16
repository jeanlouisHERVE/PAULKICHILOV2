import { createSelector } from 'reselect';

const selectGravures = (state) => state.gravures;

export const selectCollections = createSelector(
  [selectGravures],
  (gravuresCollections) => gravuresCollections.collections,
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key]),
);

export const selectCollection = (collectionUrlParam) => createSelector(
  [selectCollections],
  (collections) => collections[collectionUrlParam],
);
