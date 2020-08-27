const initState = {
  projects: [
    {
      id: "1",
      title: "here i am ",
      content: "This is cool app",
    },
    { id: "2", title: "go to heven ", content: "come to my place" },
    { id: "3", title: "i love you ", content: "lets go somewhere" },
  ],
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
