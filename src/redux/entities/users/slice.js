import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./getUsers.js";
import {
  REQUEST_STATUS_FULFILLED,
  REQUEST_STATUS_IDLE,
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED
} from "../../constants.js";

const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
  name: "users",
  initialState: entityAdapter.getInitialState({
    getUsersRequestStatus: REQUEST_STATUS_IDLE,
  }),
  selectors: {
    selectGetUsersRequestStatus: (state) => state.getUsersRequestStatus,
  },
  extraReducers: (builder) =>
    builder.addCase(getUsers.pending, (state) => {
      state.getUsersRequestStatus = REQUEST_STATUS_PENDING;
      })
      .addCase(getUsers.rejected, (state) => {
        state.getUsersRequestStatus = REQUEST_STATUS_REJECTED;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.getUsersRequestStatus = REQUEST_STATUS_FULFILLED;
      }),
});

const selectUsersSlice = (state) => state.users;

export const {
  selectById: selectUserById,
  selectTotal: selectTotalUsers
} = entityAdapter.getSelectors(selectUsersSlice);

export const { selectGetUsersRequestStatus } = usersSlice.selectors;

