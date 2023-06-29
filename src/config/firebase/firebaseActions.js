import { ref } from "firebase/storage";
import {
  db,
  doc,
  auth,
  storage,
  listAll,
  getDoc,
  setDoc,
  // onSnapshot,
  getDownloadURL,
  signInWithEmailAndPassword,
} from "./firebase";

export const firebase_login = (email, password) => {
  let user = signInWithEmailAndPassword(auth, email, password)
    .then((userAuth) => {
      // store the user's information in the redux state
      return userAuth.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorCode + ": " + errorMessage);
    });

  return user;
};

export const get_profile_images = (uid) => {
  let imageRefs = [];
  let imgUrlPromise = [];
  let imgURLS = null;
  let firebaseIMG = [];

  const galleryRef = ref(storage, `${uid}/profile-photos`);

  //GRAB ALL OF THE IMAGE REFERENCES
  let all = listAll(galleryRef)
    .then((res) => {
      res.items.map((itemRef) => {
        imageRefs.push(itemRef._location.path_);
        return imageRefs;
      });
      return imageRefs;
    })
    .then((res) => {
      imgUrlPromise = res.map(async (path) => {
        let resp = await getUrl(storage, path);
        return resp;
      });
      return imgUrlPromise;
    })
    .then((res) => {
      let finalPromise = Promise.all(res).then((imageArr) => {
        imageArr.map((url) => {
          firebaseIMG.push({ url: url });
          return null;
        });
        return firebaseIMG;
      });
      return finalPromise;
    });

  //HELPER FUNCTION TO GET THE URL AND PUSH IT TO ARRAY
  const getUrl = async (storage, itemPath) => {
    imgURLS = await getDownloadURL(ref(storage, itemPath))
      .then((url) => {
        return url;
      })
      .catch((error) => {
        console.log(error);
      });
    return imgURLS;
  };

  let imgs = Promise.resolve(all);

  // console.log("PROFILE IMAGES : ", imgs);
  return imgs;
};

export const get_gallery_images = (uid) => {
  let imageRefs = [];
  let imgUrlPromise = [];
  let imgURLS = null;
  let firebaseIMG = [];

  const galleryRef = ref(storage, `${uid}/gallery-photos`);

  //GRAB ALL OF THE IMAGE REFERENCES
  let all = listAll(galleryRef)
    .then((res) => {
      res.items.map((itemRef) => {
        imageRefs.push(itemRef._location.path_);
        return imageRefs;
      });
      return imageRefs;
    })
    .then((res) => {
      imgUrlPromise = res.map(async (path) => {
        let resp = await getUrl(storage, path);
        return resp;
      });
      return imgUrlPromise;
    })
    .then((res) => {
      let finalPromise = Promise.all(res).then((imageArr) => {
        imageArr.map((url) => {
          firebaseIMG.push({ url: url });
          return null;
        });
        return firebaseIMG;
      });
      return finalPromise;
    });

  //HELPER FUNCTION TO GET THE URL AND PUSH IT TO ARRAY
  const getUrl = async (storage, itemPath) => {
    imgURLS = await getDownloadURL(ref(storage, itemPath))
      .then((url) => {
        return url;
      })
      .catch((error) => {
        console.log(error);
      });
    return imgURLS;
  };

  let imgs = Promise.resolve(all);
  // console.log("GALLERY IMAGES : ", imgs);
  return imgs;
};

export const get_gallery_videos = (uid) => {
  let imageRefs = [];
  let imgUrlPromise = [];
  let imgURLS = null;
  let firebaseIMG = [];

  const galleryRef = ref(storage, `${uid}/gallery-videos`);
  //GRAB ALL OF THE IMAGE REFERENCES
  let all = listAll(galleryRef)
    .then((res) => {
      res.items.map((itemRef) => {
        imageRefs.push(itemRef._location.path_);
        return imageRefs;
      });
      return imageRefs;
    })
    .then((res) => {
      imgUrlPromise = res.map(async (path) => {
        let resp = await getUrl(storage, path);
        return resp;
      });
      return imgUrlPromise;
    })
    .then((res) => {
      let finalPromise = Promise.all(res).then((imageArr) => {
        imageArr.map((url) => {
          firebaseIMG.push({ url: url });
          return null;
        });
        return firebaseIMG;
      });
      return finalPromise;
    });

  //HELPER FUNCTION TO GET THE URL AND PUSH IT TO ARRAY
  const getUrl = async (storage, itemPath) => {
    imgURLS = await getDownloadURL(ref(storage, itemPath))
      .then((url) => {
        return url;
      })
      .catch((error) => {
        console.log(error);
      });
    return imgURLS;
  };

  let imgs = Promise.resolve(all);
  // console.log("GALLERY VIDEOS : ", imgs);
  return imgs;
};

export const get_user_story = (uid) => {
  const storyRef = doc(db, "obituaries", uid);
  const response = (async () => {
    return await getDoc(storyRef);
  })();

  let all = response.then((res) => {
    return res.data();
  });

  let story = Promise.resolve(all);

  // REALTIME UPDATE
  // onSnapshot(storyRef, (doc) => {
  //   // console.log(doc);
  //   story = doc.data();
  //   console.log(story.obituary);
  //   // return res;
  // });

  return story;
};

export const set_user_story = (uid, story) => {
  console.log("user uid is ", uid);
  console.log("calling set user story", story);

  const storyRef = doc(db, "obituaries", uid);
  setDoc(storyRef, { obituary: story });

  const response = (async () => {
    return await getDoc(storyRef);
  })();

  let all = response.then((res) => {
    return res.data();
  });

  let new_story = Promise.resolve(all);

  return new_story;
};

export const get_user_data = (uid) => {
  const userRef = doc(db, "users", uid);
  const response = (async () => {
    return await getDoc(userRef);
  })();

  let all = response.then((res) => {
    return res.data();
  });

  let user_data = Promise.resolve(all);
  return user_data;
};
