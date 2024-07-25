//TMDB API
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWVjZTQ3MTM4YTljNjA0ZDJjNTQxZDM0MTUyOWZlMyIsIm5iZiI6MTcyMTg4OTgwOS4xNzU3NzksInN1YiI6IjY2YTBkYzFkY2M0MmFlNzJhMjJlOWUyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ZZylqV5cbkWoZT80Pr5A2hfturA9hwxnkLR1f9jW0w",
  },
};

fetch(
  "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// 모든 카드 요소를 선택합니다. ID값 호출
const cards = document.querySelectorAll(".card");

// 각 카드에 클릭 이벤트를 추가합니다.
cards.forEach((card) => {
  card.addEventListener("click", function () {
    // 클릭한 카드의 id 값을 가져와서 알람 창으로 표시합니다.
    alert("클릭한 카드의 ID는 " + this.id + " 입니다.");
  });
});
