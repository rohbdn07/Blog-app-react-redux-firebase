export const createProject = (project) => {
  //we use Thunk here, so that it accept function
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    // passing the user's input content to firebase database collection( name : projects)
    firestore
      .collection("projects")
      .add({
        ...project,
        authhorFirstName: "rohit",
        authorLastName: "bhandari",
        authorId: 1234,
        createdAt: new Date(),
      })
      //after storing the values to database,
      //(.then) fucntion runs to dispatch the CREATE_PROJECT to readucer
      //if comes Error, Catch() will throw error.

      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "CREATED_PROJECT_ERROR", err });
      });
  };
};
