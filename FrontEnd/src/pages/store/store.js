import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/combineReducer";
import thunk from "redux-thunk";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

// TO CREATE REDUX

// 1-Install redux react-redux
// 2-Create store folder inside src folder
// 3-Create actions / reducers folders and store file
// 4-Create action file inside actions folder with feature name [ actions/language.js ]
// 5-Inside action file -> Create function that takes payload and return object -> type , payload
// 6-Create reducer file inside reducers folder with feature name [reducers/language.js]
// 7-Create initial state with the keys and initial value [INITIAL_STATE]
// 8-Create reducer function that takes [ state , action ] and pass initial state as default value to state [ state = INITIAL_VALUE ]
// 9-Compare based on action type [ Switch Case ] and return the updated value from action.payload
// 10-Don't forget to add default case for reducer to return state
// 11-Create file combineReducers inside reducers folder
// 12-Add combineReducer function to the file and pass the all reducers as a key and value object
// 13-Inside store file -> createStore and pass -> combineReducers file as a first value
// 14-Redux devTools -> install package -> and pass composeWithDevTools() as a second value to createStore in store file.
// 15-Add provider wrapper to App component in index.js and pass store attribute value [ <Provider store={store}> ]

// TO READ AND WRITE STORE VALUES IN FUNCTIONAL COMPONENTS

// 16- useSelector to return state values => Read values
// 17- useDispatch to change state values => Write values

// TO USE MIDDLEWARE

// 18- Install to middleware -> npm install redux-thunk
// 19- add applyMiddleware to createstore -> store.js
// 20- Create async action that returns function with the dispatched value from api
