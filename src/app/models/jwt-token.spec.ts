import { JwtToken } from './jwt-token';

describe('JwtToken', () => {
  it('should create an instance', () => {
    expect(new JwtToken(null)).toBeTruthy();
  });
});
