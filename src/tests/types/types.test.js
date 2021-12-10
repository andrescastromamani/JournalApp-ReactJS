import { types } from '../../types/types';

describe('Test in the types', () => {
    test('should return the object', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',

            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',

            uiStartLoading: '[UI] Start Loading',
            uiFinishLoading: '[UI] Finish Loading',

            notesAddNew: '[Notes] New Note',
            notesActive: '[Notes] Set Active Note',
            notesLoad: '[Notes] Load Notes',
            notesUpdated: '[Notes] Update Note',
            notesDeleted: '[Notes] Delete Note',
            notesFileUrl: '[Notes] File Url',
            notesLogoutClean: '[Notes] Logout Clean',
        });
    });
})