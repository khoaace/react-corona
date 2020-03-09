class Auth {

  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(token, user) {
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
  }

      /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
      if(localStorage.getItem('token') !== null && localStorage.getItem('user') !== null)
          return true;
      else
          return false;
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static getToken() {
      return localStorage.getItem('token');
  }

   /**
   * Get user value.
   *
   * @returns {object}
   */

  static getUser() {
      try {
          if(localStorage.getItem('user') === null || localStorage.getItem('user') === undefined){
              return {};
          }
          else {
              let user = JSON.parse(localStorage.getItem('user'));
              return user;
          }
      }catch(err){
          //Force logout
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          window.location.href= '/login';
      }
      
  }

}

export default Auth;
