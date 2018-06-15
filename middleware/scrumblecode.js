module.exports = function() {
    var date = new Date();
    var string = Math.random().toString(36).substring(7);
    return date.getFullYear() + date.getMonth() + date.getDate() + string;
  }