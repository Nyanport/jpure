var jpure = {
  "version": "v0.1.1",
  docs: {
    'chapterI': ["CHAPTER 1, the first few functions", "\"minimise\" and \"maximise\" explained.\nMinimise and maximise both originate from StackOverflow,\nhttps:\/\/stackoverflow.com\/a\/56867045.\nNow I take a even bigger step, writing some very interesting code.\nI called the piece of code \"binaryGarbage\" because it generated random 1s and 0s.\nI love to push some of the output into a minimise function.\nSee the text with \"binaryGarbage\" in it.\nThe last of the first few functions was mindblowing."], // CHAPTER 1, the first few functions
    'readdoc': function(doc) { console.log(`${doc[0]}\n\n\n${doc[1]}`); }
  },
  "minimise": function(binary) {
    return String.fromCharCode(
      ...binary.split(' ').map(bin => parseInt(bin, 2))
    );
  },
  "maximise": function(string) {
    // Minimise and maximise functions explained is on line 5 and so on.
    return string.split('') // split in single chars
      .map(c => c.charCodeAt(0) // get the UTF-16 code (10 base)
                 .toString(2)) // transform it back to a string (2 base)
      .join(' ') // make single string from array
  },

  "binaryGarbage": function(garbageLen) {
    var randNum = 8 + Math.floor(Math.random() * (8+1));
    var binaryGarbage = "";
    for(let i = 0; i < garbageLen; i++){
      for(let i = 0; i < randNum; i++) {
        binaryGarbage += Math.floor(Math.random() * (1+1)).toString();
      }
      binaryGarbage += " ";
    }
    return binaryGarbage;
  }
};
window.jpure = jpure; // give all access to variable
