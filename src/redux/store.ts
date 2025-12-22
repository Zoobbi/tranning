import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { badgeReducer } from "./badge-slice"; // ← обычный редьюсер

// 1. Оборачиваем ТОЛЬКО нужный слайс
const persistedBadgeReducer = persistReducer(
  {
    key: "badgeProgress",
    storage,
    // whitelist НЕ нужен — у нас один слайс
  },
  badgeReducer,
);

// 2. Корневой редьюсер — без persist!
const rootReducer = {
  badgeProgress: persistedBadgeReducer, // ← persisted-версия
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
