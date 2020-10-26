var col =7;
var now = new Date()
var newdata = "";
function send_email() {
  var sst = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("template").getRange(1,1).getValue();
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("data");
  var lr = ss.getLastRow();
  var quota = MailApp.getRemainingDailyQuota();
  Logger.log(quota);

  for(var i=2;i<=lr;i++){
    var curEmail = ss.getRange(i,3).getValue();
    var curname = ss.getRange(i,1).getValue();
    var mofc = ss.getRange(i,4).getValue();
    var mwt = ss.getRange(i,5).getValue();
    if(mofc <75){
      percent = mofc;
      lecture = ss.getRange(1,4).getValue();
    } else if(mwt <75){
        percent = mwt;
        lecture = ss.getRange(1,5).getValue();
      }
    var body = sst.replace("{name}",curname).replace("{percent}",percent).replace("{lecture}",lecture);
    var subject = "Reminder!! Defaulter in " + lecture + " with attendance of " + percent + "%";
    //MailApp.sendEmail(curEmail, subject, body)
    Logger.log(subject);
    Logger.log(body);
    
  }
}
function newColumn() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('report');
  var date = Utilities.formatDate(now, "GMT+1", "dd/MM/yyyy");
  if(date != newdata){
    Logger.log(newdata);
    sheet.getRange(1, col).setValue(date);
    newdata = date;
    col++;
  }
}
function day(){
 day = now.getDay()
 var date = Utilities.formatDate(now, "GMT+1", "dd/MM/yyyy");
  Logger.log(day)
}
