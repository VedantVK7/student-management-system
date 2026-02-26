const login = (user) => {
  switch(user.role) {
    case "student":
      return "Student Dashboard";
    case "admin":
      return "Admin Dashboard";
    default:
      return "Unauthorized";
  }
};
module.exports = login;
