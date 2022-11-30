const { executeQuery } = require("../config/db.config");
class User {
  static async registerUsers(firstName, lastName, email, password) {
    try {
      await executeQuery(
        "INSERT INTO users (firstName,lastName,emailId,password) VALUES (?,?,?,?)",
        [firstName, lastName, email, password]
      );
    } catch (error) {
      console.log({ error });
    }
  }
  static async verifyLoginDetails(email, password) {
    try {
      const results = await executeQuery(
        "SELECT id FROM users WHERE emailId  = (?) && password = (?) LIMIT 1",
        [email, password]
      );
      if (results.length > 0) {
        return true;
      }
      return false;
    } catch (error) {
      console.log({ error });
    }
  }
}

module.exports = { User };
