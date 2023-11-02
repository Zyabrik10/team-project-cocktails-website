import { nanoid } from 'nanoid';

function ingredientFieldReducer(state, action) {
  switch (action.type) {
    case 'selected_ingredient': {
      const index = state.findIndex(obj => obj.id === action.id);
      const newObj = {
        ...state[index],
        ingredient: action.nextIngredient,
        ingredientId: action.nextingredientId,
      };

      state[index] = newObj;
      return state;
    }
    case 'changed_amound': {
      const index = state.findIndex(obj => obj.id === action.id);
      const newObj = { ...state[index], amound: action.nextAmound };
      state[index] = newObj;
      return state;
    }
    case 'add_element': {
      const newState = [...state];
      newState.push({
        id: nanoid(),
        ingredientId: '',
        ingredient: '',
        amound: '',
      });
      return newState;
    }
    case 'remove_element': {
      const newState = [...state];
      newState.pop();
      return newState;
    }
    case 'remove_by_id': {
      const newState = [...state];
      const index = newState.findIndex(obj => obj.id === action.id);
      newState.splice(index, 1);
      return newState;
    }
    default:
      return;
  }
}

export default ingredientFieldReducer;
