function login(user) {
  if (user.role === "student") {
    return "Welcome Student";
  }
  if (user.role === "admin") {
    return "Welcome Admin";
  }
  return "Access Denied";
}
module.exports = login;
