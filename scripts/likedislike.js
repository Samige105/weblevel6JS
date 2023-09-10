//------------------------------------------------------------------------------------------------------
//VOTE: LIKE / DISLIKE
//Assume the current Votes are: 20 likes and 5 dislikes
let currentVotes = {like: 20, dislike: 5};

//Load the current votes to HTML page
document.getElementById("likeNumber").innerHTML = currentVotes.like;
document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;

//Variables to track the clicking status
//RULE: Allow to vote only one: UP or DOWN
let voteStatus = {like: false, dislike: false};

//Click Like button
function like() {
//Check current status of "like" button (has been clicked or not)
if (voteStatus.like == false) {
    //Increase a "Like": Increase the like number by 1
    document.getElementById("likeNumber").innerHTML = currentVotes.like + 1;
    //Change the background color of Like button to GREEN
    document.getElementById("likeButton").style.backgroundColor = "green";
    //Change the current status of "like" button: has been clicked
    voteStatus.like = true;//
    //Check "dislike" status - if dislike has been voted, down it by one & change status to False & change background color to white
    if (voteStatus.dislike == true) {
        document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;
        voteStatus.dislike = false;//
        document.getElementById("dislikeButton").style.backgroundColor = "white";    }   
    } else {
    //Keep the current number of like
    document.getElementById("likeNumber").innerHTML = currentVotes.like;
    //Change the background color of Like button to WHITE
    document.getElementById("likeButton").style.backgroundColor = "white";
    //Change the current status of "like" button
    voteStatus.like = false;//has been clicked  
  } 
} 
//Click Dislike button
function dislike() {
    //Check current status of "dislike" button (has been clicked or not)
    if (voteStatus.dislike == false) {
      //Increase a "disLike"  by 1
      document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike + 1;
      //Change the background color of Like button to GREEN
      document.getElementById("dislikeButton").style.backgroundColor = "green";
      //Change the current status of "dislike" button
      voteStatus.dislike = true;//has been clicked
      
      //Check "like" status - if like has been voted, down it by one & change status to False & change background color to white
      if (voteStatus.like == true) {
        document.getElementById("likeNumber").innerHTML = currentVotes.like;
        voteStatus.like = false;//
        document.getElementById("likeButton").style.backgroundColor = "white";
      }
      
    } else {
      //Keep the current number of of "dislike"
      document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;
      //Change the background color of disLike button to WHITE
      document.getElementById("dislikeButton").style.backgroundColor = "white";
      //Change the current status of "dislike" button
      voteStatus.dislike = false;//has been clicked 
    } 
  } 
  
