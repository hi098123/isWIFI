/**
 * Detect wifi
 * @returns {number}
 * -1: undefined or can't find\
 * 0: cellular(mobile 3g, 4g, 5g, etc.)\
 * 1: saveData=true (cellular or wifi or PC) saveData is true (browser setting)\
 * 2: saveData=false (cellular or wifi or PC)\
 * 3: wifi
 */
function isWIFI() {
  var conn =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection ||
    0;
  if (!conn) return -1;
  if (typeof conn.type !== "undefined") {
    switch (conn.type) {
      case "wifi":
        return 3;
      case "cellular":
        return 0;
      default:
        return -1;
    }
  } else if (typeof conn.saveData !== "undefined") {
    if (conn.saveData) return 1;
    else return 2;
  } else {
    return -1;
  }
}
