const Order = require('../models/orderModel');

// Create new order
exports.createOrder = async (req, res) => {
  const { subject, type, pages, deadline, details } = req.body;
  try {
    const newOrder = new Order({
      user: req.user.id,
      subject,
      type,
      pages,
      deadline,
      details,
    });

    const order = await newOrder.save();
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all orders for a user
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({ date: -1 });
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
