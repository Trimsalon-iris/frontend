export const EXAMPLE_ACTION = 'example_action';

export const exampleAction = modifier => ({
  type: EXAMPLE_ACTION,
  payload: modifier
});
