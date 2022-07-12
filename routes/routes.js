const authRoutes = require("../components/auth/auth.routes");


module.exports = (app) => {
  app.use("/api/auth", authRoutes);
};
