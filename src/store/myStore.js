import { configureStore } from '@reduxjs/toolkit';
import leftDrpActive from './features/isHeaderActive/isLeftDrpActive';
import rightDrpActive  from './features/isHeaderActive/isRightDrpActive';
import loginHandler  from './features/loginValue/loginValue';
import selectedItem from './features/selectedItem/selectedItem'; 
import parsePage  from './features/sectionPageUrl/sectionPageUrl';

export const store = configureStore({
    reducer: {
        login: loginHandler,
        selected: selectedItem,
        isRightActive: rightDrpActive,
        isLeftActive: leftDrpActive ,
        pageUrl: parsePage
    },
})