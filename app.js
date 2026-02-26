const studentLogin = (user) => {
  if (user.type === "student") {
    return "Student Portal Access";
  }
  if (user.type === "admin") {
    return "Admin Portal Access";
  }
  return "Access Denied";
}
module.exports = login;
