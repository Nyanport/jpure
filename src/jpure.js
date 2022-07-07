var jpure = {
  "version": "v0.1",
  "minimise": function(binary) {
    return String.fromCharCode(
      ...binary.split(' ').map(bin => parseInt(bin, 2))
    );
  },
  "binaryGarbage": function() {
    
  }
};
window.jpure = jpure; // give all access to variable
