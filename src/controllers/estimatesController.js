import mongoose from "mongoose";
import { EstimateSchema } from "../models/estimatesModel.js";

const Estimate = mongoose.model("estimate", EstimateSchema);

export const addNewEstimate = (req, res) => {
  let newEstimate = new Estimate(req.body);

  newEstimate.save((err, estimate) => {
    if (err) {
      res.send(err);
    }
    res.json(estimate);
  });
};

export const getEstimates = (req, res) => {
  Estimate.find({}, (err, estimate) => {
    if (err) {
      res.send(err);
    }
    res.json(estimate);
  });
};

export const getEstimateWithID = (req, res) => {
  Estimate.findById(req.params.estimateID, (err, estimate) => {
    if (err) {
      res.send(err);
    }
    res.json(estimate);
  });
};

export const updateEstimate = (req, res) => {
  Estimate.findOneAndUpdate(
    { _id: req.params.estimateID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, estimate) => {
      if (err) {
        res.send(err);
      }
      res.json(estimate);
    }
  );
};

export const deleteEstimate = (req, res) => {
  Estimate.remove({ _id: req.params.estimateID }, (err, estimate) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "successfuly deleted Estimate" });
  });
};
