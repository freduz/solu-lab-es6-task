/* eslint-disable implicit-arrow-linebreak */

import catchAsync from '../utils/catchAsync';

const factoryMethod = {
  createDocument: (Model) =>
    catchAsync(async (req, res) => {
      const doc = await Model.create(req.body);
      res.status(201).json({
        status: 'success',
        data: {
          data: doc,
        },
      });
    }),

  deleteDocument: (Model) =>
    catchAsync(async (req, res) => {
      await Model.findByIdAndDelete(req.params.id);
      res.status(204).json({
        status: 'success',
        data: null,
      });
    }),

  updateDocument: (Model) =>
    catchAsync(async (req, res) => {
      const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      res.status(200).json({
        status: 'success',
        data: {
          data: doc,
        },
      });
    }),

  getAllDocument: (Model) =>
    catchAsync(async (req, res) => {
      const docs = await Model.find();
      res.status(200).json({
        status: 'success',
        docs: docs.length,
        data: {
          data: docs,
        },
      });
    }),

  getDocument: (Model) =>
    catchAsync(async (req, res) => {
      const doc = await Model.findById(req.params.id);
      res.status(200).json({
        status: 'success',
        data: doc,
      });
    }),
};

export default factoryMethod;
