import firebase from "services/firebase";

const AuthService = {
  login: async (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  register: async (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },
  logout: async () => {
    return firebase.auth().signOut();
  },
};

export default AuthService;
