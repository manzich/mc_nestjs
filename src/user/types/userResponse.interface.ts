import { UserType } from './uses.type';
export interface UserResponseInterface {
  //эта запись мерджит все поля из созданного юзера и добавляет объект с токеном
  user: UserType & { token: string };
}
