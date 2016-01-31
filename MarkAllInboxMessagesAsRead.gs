// Mark all GMail inbox messages as read 
// Gerald Gale 

function doGet() {
  // GmailApp can only handle 100 threads/messages at a time. 
  // If you want to mark more messages, you'll have to put
  // this call in a loop of some kind.
  var threads = GmailApp.search('label:unread', 0, 99);
  GmailApp.markThreadsRead(threads);
  return HtmlService.createHtmlOutput('<br><br><br><center><b><h1>Success! Inbox has been marked read.</h1></b></center>');
};
