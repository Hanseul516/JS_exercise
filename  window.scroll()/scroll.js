const spans = document.querySelectorAll("span");  //쿼리셀렉터 '올'은 배열형태로 빈환함.
const contents = document.querySelectorAll(".content");
const firstTop = contents[0].offsetTop // 해당부분의 맨위부분
const secondTop = contents[1].offsetTop //secondTop의 offsetTop은 500 (css에서 설정했기 떄문)
const thirdTop = contents[2].offsetTop //thirdTop의 offsetTop은 1000

spans[0].onclick = function(){
    window.scroll({top:firstTop, behavior: 'smooth'})
}
spans[1].onclick = function(){
    window.scroll({top:secondTop, behavior: 'smooth'})
}
spans[2].onclick = function(){
    window.scroll({top:thirdTop, behavior: 'smooth'})
}