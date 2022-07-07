var jpure = {
  "version": "v0.1",
  docs: {
    'chapterI': "\"minimise\" and \"maximise\" explained.\nMinimise and maximise both originate from StackOverflow,\nhttps:\/\/stackoverflow.com\/a\/56867045",
    'readdoc': function(doc) { console.log(doc); }
  },
  "minimise": function(binary) {
    return String.fromCharCode(
      ...binary.split(' ').map(bin => parseInt(bin, 2))
    );
  },
  "maximise": function(string) {
    // Minimise and maximise functions explained is on line 5 and so on.
    return str.split('') // split in single chars
      .map(c => c.charCodeAt(0) // get the UTF-16 code (10 base)
                 .toString(2)) // transform it back to a string (2 base)
      .join(' ') // make single string from array
  },

  "binaryGarbage": function(garbageLen) {
    var randNum = 8 + Math.floor(Math.random() * (8+1));
    str binaryGarbage = "";
    for(int i = 0; i < garbageLen; i++){
      for(int i = 0; i < randNum; i++) {
        binaryGarbage += Math.floor(Math.random() * (1+1)).toString();
      }
      binaryGarbage += " ";
    }
  }
};
window.jpure = jpure; // give all access to variable
