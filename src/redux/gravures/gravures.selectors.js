import { createSelector } from 'reselect';

const selectGravures = (state) => state.gravures;

export const selectGravuresCollections = createSelector(
  [selectGravures],
  (gravures) => gravures.gravuresCollections,
);

export const selectCollectionsForPreview = createSelector(
  [selectGravuresCollections],
  (gravuresCollections) => Object.keys(gravuresCollections).map((key) => gravuresCollections[key]),
);

export const selectCollection = (collectionUrlParam) => createSelector(
  [selectGravuresCollections],
  (gravuresCollections) => gravuresCollections[collectionUrlParam],
);
