var tweet = "<div> some text here </div>";

//append means adding a new element after the target
$("tweet-section div").append(tweet)

//prefpnd is the reverse of the append, element will be added before the target elemen
$("tweet-section div").prepend(tweet)

//before and after are almost the same with append and prepend
$("tweet-section div p").before(tweet)
$("tweet-section div p").after(tweet)

//html and text
//html means you are trying to change the whole content of your target, text means you just want to change the text inside of an element
//note that even the element will be written in the text

$("tweet-section div").html(tweet)
//now if we gonna use text we need to clear the tweet variable with no element
$("tweet-section div p").text(tweet)
