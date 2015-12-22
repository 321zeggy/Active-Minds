<!DOCTYPE HTML PUBLIC
"-//W3C//DTD HTML 4.01 Transitional//EN"

"http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
	<meta http-equiv="content-type"content="text/html; charset=utf-8" />
	<title>Active Minds @ MIT | Contact Us</title>
	<script type="text/javascript" src="js/form.js"></script>
	<script type="text/javascript" src="js/jquery.js"></script>
	<link rel="stylesheet" type="text/css" href="css/accordion.css" />
	<script src="js/menu.js" type="text/javascript"></script>

<script type="text/javascript">
$(document).ready(function() {
    $(".content").css("display", "none");
    $(".content").fadeIn(1000);
    $('.menu').initMenu();

});
</script>
	<link rel="stylesheet" type="text/css" href="css/style.css" />
</head>
<body>

<div class="banner">
<p><a href="main.html"><img src="media/banner.jpg" alt="banner" style="border:2px solid black" /></a></p>
</div>

<div id="navbar">
<ul>
	<li><a href="main.html"><b>Home</b></a></li>
	<li><a href="speakyourmind.html" class="special"><b>Speak Your Mind!</b></a></li>
	<li><a href="events.html"><b>Events</b></a></li>
	<li><a href="exec.html"><b>Exec</b></a></li>
	<li><a href="sad.html"><b>SAD</b></a></li>
	<li><a href="resources.html"><b>Resources</b></a></li>
	<li><a href="about.html"><b>About Us</b></a></li>
	<li><a href="contact.html"><b>Contact Us</b></a></li>
</ul>
<script type="text/javascript">
var url = window.location.href;
url = url.substr(url.lastIndexOf("/") + 1);
$("#navbar").find("a[href='" + url + "']").addClass("current");
</script>
</div>

<div class="content">
<p>
<center><h2>Thanks!</h2></center>
<?php
echo "<h4>Thank you, ".$_POST["name"].", for contacting us!</h4>";
echo "<p><i>The message sent was:</i></p>";
echo "<hr color=\"black\">";
echo "<u>From:</u> ".$_POST["email"]."<br />";
echo "<u>To:</u> activeminds-exec@mit.edu<br />";
echo "<p><u>Subject:</u> ".$_POST["subject"]."</p>";
echo "<p><u>Message:</u><br />";
echo $_POST["message"]."</p>";
echo "<hr color=\"black\">";

$msg = "*************DO NOT REPLY TO THIS EMAIL****************<br />";
$msg .= "********REPLY TO THE EMAIL ADDRESS LISTED BELOW********<br />";
$msg .= "<p><b>Name:</b>    ".$_POST["name"]."</p>";
$msg .= "<p><b>E-Mail:</b>     ".$_POST["email"]."</p>";
$msg .= "<p><b>Message:</b></p><p>".$_POST["message"]."</p><br />";
$msg .= "**************END OF MESSAGE*******************";

$recipient = "activeminds-exec@mit.edu";
$subject = $_POST["subject"];
$mailheaders = "MIME-Version: 1.0\r\n";
$mailheaders .= "Content-type: text/html; charset=ISO-8859-1\r\n";
$mailheaders .= "From: Active Minds at MIT Website \n";
$mailheaders .= "Reply-To: ".$_POST["email"];

mail( $recipient, $subject, $msg, $mailheaders );
?>
</div>



<div id="footer">
&copy; 2013 Active Minds at MIT&nbsp;&nbsp;|&nbsp;&nbsp;Webmaster: <a href="mailto:rexsclam@mit.edu">
Rex Lam</a>&nbsp;&nbsp;|&nbsp;&nbsp;Last Updated: 3/4/13&nbsp;&nbsp;|&nbsp;&nbsp;  
<a href="http://www.facebook.com/pages/Active-Minds-at-MIT/221373231211323">
<img src="media/fblogo.png" align="absmiddle" width="20px" height="20px"></a>
</div>

</div>
</body>
</html>