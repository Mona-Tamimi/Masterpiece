function showQuizResult(score) {
    if (score >= 70) {
        window.location.href = "success.html"; // Redirect to Success Page
    } else {
        window.location.href = "failure.html"; // Redirect to Failure Page
    }
}