import { createSlice, current } from '@reduxjs/toolkit';

const tabSlice = createSlice({
    name: "tabSlice",
    initialState: {
        selectedTabId: 0,
        prevSelectedTabId: 0,
        tabs: [{
            tabIcon: "system-home",
            tabTitle: "Home",
            tabURI: "/",
            state: {
                modal: {
                    type: null,
                    isOpen: false,
                    data: {}
                },
                drawer: {
                    type: null,
                    isOpen: false,
                    data: {}
                },
                page: {}
            }
        }]
    },
    reducers: {
        initializeTabs: (state, action) => {
            
        },

        removeTab: (state, action) => {
            if(state.tabs.length !== 1) {
                const current_tabs = [...state.tabs];
                current_tabs.splice(action.payload, 1);
                state.tabs = current_tabs;
            }
        },

        addTab: (state, action) => {
            const current_tabs = [...state.tabs];
            current_tabs.push({
                tabIcon: "system-home",
                tabTitle: "Home",
                tabURI: "/",
                state: {
                    modal: {
                        type: null,
                        isOpen: false,
                        data: {}
                    },
                    drawer: {
                        type: null,
                        isOpen: false,
                        data: {}
                    },
                    page: {}
                }
            });
            state.selectedTabId = current_tabs.length - 1;
            state.tabs = current_tabs;
        },

        updateTabInfo: (state, action) => {
            const current_tabs = [...state.tabs];
            current_tabs[state.selectedTabId].tabIcon = (action.payload.tabIcon) ? action.payload.tabIcon : current_tabs[state.selectedTabId].tabIcon;
            current_tabs[state.selectedTabId].tabTitle = (action.payload.tabTitle) ? action.payload.tabTitle : current_tabs[state.selectedTabId].tabTitle;
            current_tabs[state.selectedTabId].tabURI = (action.payload.tabURI) ? action.payload.tabURI : current_tabs[state.selectedTabId].tabURI;
            state.tabs = current_tabs;
        },

        selectTab: (state, action) => {
            state.prevSelectedTabId = state.selectedTabId;
            state.selectedTabId = action.payload;
        },

        setModalState: (state, action) => {
            const current_tabs = [...state.tabs];
            const selectedTabId = state.selectedTabId;
            current_tabs[selectedTabId].state.modal = { ...action.payload };
            state.tabs = current_tabs;
        },

        setDrawerState: (state, action) => {
            const current_tabs = [...state.tabs];
            const selectedTabId = state.selectedTabId;
            current_tabs[selectedTabId].state.drawer = { ...action.payload };
            state.tabs = current_tabs;
        },

        setPageState: (state, action) => {
            const current_tabs = [...state.tabs];
            const selectedTabId = state.selectedTabId;
            current_tabs[selectedTabId].state.page = { ...action.payload };
            state.tabs = current_tabs;
        }
    }
});

export const {
    initializeTabs,
    removeTab,
    addTab,
    updateTabInfo,
    selectTab,
    setDrawerState,
    setModalState
} = tabSlice.actions;

export default tabSlice;