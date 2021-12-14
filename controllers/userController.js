import { User } from '../models';
import factoryMethod from './factoryMethod';

const userController = {
  createUser: factoryMethod.createDocument(User),

  getUser: factoryMethod.getDocument(User),

  updateUser: factoryMethod.updateDocument(User),

  getAllUsers: factoryMethod.getAllDocument(User),

  deleteUser: factoryMethod.deleteDocument(User),
};

export default userController;
