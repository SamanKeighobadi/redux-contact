const initState = [
  {
    id: 1,
    name: "saman keighobadi",
    email: "saman.keighobadi@gmail.com",
    phone: "0191283",
  },
  {
    id: 1,
    name: "soheil keighobadi",
    email: "soheil.keighobadi@gmail.com",
    phone: "0190000",
  },
];

export const contactsReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...action.payload];
    case "DELETE_CONTACT":
      return [...action.payload];
    case "UPDATE_CONTACT":
      return [...action.payload];
    default:
      return state;
  }
};
