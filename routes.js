const express = require("express");
const Customer = require("./models/Customer");
const router = express.Router();

// Get all customer data
router.get("/customer/all", async (req, res) => {
  const customers = await Customer.find();
  res.send(customers);
});

// Insert new customer data
router.post("/customer", async (req, res) => {
  const customer = new Customer({
    rollNo: req.body.rollNo,
    name: req.body.name,
    amount: req.body.amount,
    date: req.body.date,
  });

  await customer.save();
  res.send(customer);
});

// Get by id
router.get("/customer/:id", async (req, res) => {
  try {
    const customer = await Customer.findOne({ _id: req.params.id });
    res.send(customer);
  } catch {
    res.status(404);
    res.send({ error: "Record does not exist" });
  }
});

// Edit customer data
router.patch("/customer/:id", async (req, res) => {
  try {
    const customer = await Customer.findOne({ _id: req.params.id });

    if (req.body.rollNo) {
      customer.rollNo = req.body.rollNo;
    }

    if (req.body.name) {
      customer.name = req.body.name;
    }

    if (req.body.amount) {
      customer.amount = req.body.amount;
    }

    if (req.body.date) {
      customer.date = req.body.date;
    }

    await customer.save();
    res.send(customer);
  } catch {
    res.status(404);
    res.send({ error: "Record does not exist" });
  }
});

// delete record
router.delete("/customer/:id", async (req, res) => {
  try {
    await Customer.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Record does not exist  " });
  }
});

module.exports = router;
