import { signUpReducer, initialState } from './sign-up.reducer';

describe('SignUp Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = signUpReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
