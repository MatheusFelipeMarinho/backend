import UserToken from '../infra/typeorm/entities/UserToken';

export default interface IUserTokensrepository {
  generate(user_id: string): Promise<UserToken>;
}
