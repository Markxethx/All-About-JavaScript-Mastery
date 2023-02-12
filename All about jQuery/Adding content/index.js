var tweet = "<div> some text here </div>";

//append means adding a new element after the target
$("tweet-section div").append(tweet)

//prefpnd is the reverse of the append, element will be added before the target elemen
$("tweet-section div").prepend(tweet)

//before and after are almost the same with append and prepend
$("tweet-section div p").before(tweet)
$("tweet-section div p").after(tweet)
