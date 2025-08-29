export default function errorHandler(err, req, res, next) { // eslint-disable-line
  console.error(err);
  res.status(500).json({ is_success: false, message: "Internal server error" });
}
