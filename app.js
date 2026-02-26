const login = (user) => {
  switch(user.role) {
    case "student":
      return "Student Dashboard";
    case "admin":
      return "Admin Dashboard";
    default:
      return "Unauthorized";
  }

  if (user.role === "admin") {
    return "Welcome Admin";
  }
  return "Access Denied";
}
module.exports = login;
