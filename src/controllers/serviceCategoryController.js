import mongoose from "mongoose";
import { ServiceCategorySchema } from "../models/serviceCategoryModel.js";

const ServiceCategory = mongoose.model(
  "serviceCategory",
  ServiceCategorySchema
);

export const addNewServiceCategory = (req, res) => {
  let newServiceCategory = new ServiceCategory(req.body);

  newServiceCategory.save((err, serviceCategory) => {
    if (err) {
      res.send(err);
    }
    res.json(serviceCategory);
  });
};

export const getServiceCategories = (req, res) => {
  ServiceCategory.find({}, (err, serviceCategory) => {
    if (err) {
      res.send(err);
    }
    res.json(serviceCategory);
  });
};

export const getServiceCategoryWithID = (req, res) => {
  ServiceCategory.findById(
    req.params.serviceCategoryID,
    (err, serviceCategory) => {
      if (err) {
        res.send(err);
      }
      res.json(serviceCategory);
    }
  );
};

export const updateServiceCategory = (req, res) => {
  ServiceCategory.findOneAndUpdate(
    { _id: req.params.serviceCategoryID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, serviceCategory) => {
      if (err) {
        res.send(err);
      }
      res.json(serviceCategory);
    }
  );
};

export const deleteServiceCategory = (req, res) => {
  ServiceCategory.remove(
    { _id: req.params.serviceCategoryID },
    (err, serviceCategory) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "successfully deleted serviceCategory" });
    }
  );
};
