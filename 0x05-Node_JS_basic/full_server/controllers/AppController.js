/**
 * AppController class
 * @class AppController - Contains methods for handling requests
 * @author EL Abassi Abderrazaq - https://github.com/Abdoelabassi
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
