import { createAction } from '@reduxjs/toolkit';
import { CharacterModel } from '../models/character';
import { actionTypes } from './action.types';

export const loadCharacterAction = createAction<Array<CharacterModel>>(
  actionTypes['character@load'].toLocaleString()
);

export const addCharacterAction = createAction<CharacterModel>(
  actionTypes['character@add'].toLocaleString()
);

export const updateCharacterAction = createAction<CharacterModel>(
  actionTypes['character@update'].toLocaleString()
);

export const deleteCharacterAction = createAction<CharacterModel>(
  actionTypes['character@delete'].toLocaleString()
);
