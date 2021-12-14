import { User } from '../models';
import catchAsync from '../utils/catchAsync';

const userController = {
  createUser: catchAsync(async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        data: {
          user,
        },
      },
    });
  }),

  getUser: catchAsync(async (req, res) => {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  }),

  updateUser: catchAsync(async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        data: user,
      },
    });
  }),

  getAllUsers: catchAsync(async (req, res) => {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      users: users.length,
      data: {
        data: users,
      },
    });
  }),

  deleteUser: catchAsync(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  }),
};

export default userController;
