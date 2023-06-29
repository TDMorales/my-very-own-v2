import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  firebase_login,
  get_user_story,
  get_profile_images,
  get_gallery_images,
  get_gallery_videos,
  get_user_data,
  set_user_story,
} from "../../config/firebase/firebaseActions";

const initialState = {
  status: null,
  isUserLoggedIn: false,
  uid: null,
  displayName: null,
  galleryPhotos: null,
  galleryVideos: null,
  profilePhotos: null,
  user_story: null,
  user_data: null,
};

export const firebaseLogin = createAsyncThunk(
  "profile/firebaseLogin",
  async (action, dispatch, getState) => {
    return await firebase_login(action.email, action.password);
  }
);

export const getProfileImgs = createAsyncThunk(
  "profile/getProfileImages",
  async (uid, dispatch, getState) => {
    return await get_profile_images(uid);
  }
);

export const getGalleryImgs = createAsyncThunk(
  "profile/getGalleryImgs",
  async (uid, dispatch, getState) => {
    return await get_gallery_images(uid);
  }
);

export const getGalleryVids = createAsyncThunk(
  "profile/getGalleryVids",
  async (uid, dispatch, getState) => {
    return await get_gallery_videos(uid);
  }
);

export const getUserStory = createAsyncThunk(
  "profile/getUserStory",
  async (uid, dispatch, getState) => {
    const res = get_user_story(uid);
    return res;
  }
);

export const getUserData = createAsyncThunk(
  "profile/getUserData",
  async (uid) => {
    console.log(uid);
    return await get_user_data(uid);
  }
);

export const setUserStory = createAsyncThunk(
  "profile/setUserStory",
  async (action) => {
    return await set_user_story(action.uid, action.story);
  }
);

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.uid = action.payload.uid.toString();
      state.displayName = action.payload.displayName;
      state.isUserLoggedIn = true;
    },
    logout: (state) => {
      state.uid = null;
      state.isUserLoggedIn = false;
      state.displayName = null;
      state.status = null;
      state.galleryPhotos = null;
      state.galleryVideos = null;
      state.profilePhotos = null;
      state.user_story = null;
      state.user_data = null;
    },
  },
  extraReducers: {
    // USER DATA
    [getUserData.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUserData.fulfilled]: (state, action) => {
      state.status = "success";
      state.user_data = action.payload;
    },
    [getUserData.rejected]: (state, action) => {
      state.status = "failed";
      console.log(action.error);
    },
    // SET USER STORY
    [setUserStory.pending]: (state, action) => {
      state.status = "loading";
    },
    [setUserStory.fulfilled]: (state, action) => {
      state.status = "success";
      state.user_story = action.payload;
    },
    [setUserStory.rejected]: (state, action) => {
      state.status = "failed";
      console.log(action.error);
    },
    // USER STORY
    [getUserStory.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUserStory.fulfilled]: (state, action) => {
      state.status = "success";
      state.user_story = action.payload;
    },
    [getUserStory.rejected]: (state, action) => {
      state.status = "failed";
      console.log(action.error);
    },
    // PROFILE PHOTOS
    [getProfileImgs.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProfileImgs.fulfilled]: (state, action) => {
      state.status = "success";
      state.profilePhotos = action.payload;
    },
    [getProfileImgs.rejected]: (state, action) => {
      state.status = "failed";
    },
    // GALLERY PHOTOS
    [getGalleryImgs.pending]: (state, action) => {
      state.status = "loading";
    },
    [getGalleryImgs.fulfilled]: (state, action) => {
      state.status = "success";
      state.galleryPhotos = action.payload;
    },
    [getGalleryImgs.rejected]: (state, action) => {
      state.status = "failed";
    },
    // GALLERY VIDEOS
    [getGalleryVids.pending]: (state, action) => {
      state.status = "loading";
    },
    [getGalleryVids.fulfilled]: (state, action) => {
      state.status = "success";
      state.galleryVideos = action.payload;
    },
    [getGalleryVids.rejected]: (state, action) => {
      state.status = "failed";
    },
    // FIREBASE AUTH USER LOGIN
    [firebaseLogin.pending]: (state, action) => {
      state.status = "user loading";
    },
    [firebaseLogin.fulfilled]: (state, action) => {
      state.status = "user success";
      login(action);
    },
    [firebaseLogin.rejected]: (state, action) => {
      state.status = "user failed";
    },
  },
});

export const { login, logout } = auth.actions;

export const selectUser = (state) => state.auth;

export default auth.reducer;
