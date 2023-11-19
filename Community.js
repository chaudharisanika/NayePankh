function submitReview() {
    var username = document.getElementById('username').value;
    var reviewText = document.getElementById('review').value;
    var platform = document.getElementById('platform').value;

    if (username && reviewText) {
      var reviewList = document.getElementById('reviewsList');
      var newReview = document.createElement('li');
      newReview.className = 'review';
      newReview.innerHTML = username + "  -  "+ reviewText; 
      reviewList.appendChild(newReview);

      // Clear the form after submission
      document.getElementById('reviewForm').reset();
    } else {
      alert('Please fill out both username and review fields.');
    }
  }