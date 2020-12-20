import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProviderService from './ListProviderService';

let fakeUsersRepository: FakeUsersRepository;
let listProviderService: ListProviderService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    listProviderService = new ListProviderService(fakeUsersRepository);
  });

  it('should be able list providers ', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'doe@example.com',
      password: '123456',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'John Tre',
      email: 'tre@example.com',
      password: '123456',
    });

    const user3 = await fakeUsersRepository.create({
      name: 'John Uno',
      email: 'uno@example.com',
      password: '123456',
    });

    const userlogged = await fakeUsersRepository.create({
      name: 'John qua',
      email: 'qua@example.com',
      password: '123456',
    });

    const providers = await listProviderService.execute({
      user_id: userlogged.id,
    });

    expect(providers).toEqual([user1, user2, user3]);
  });
});
