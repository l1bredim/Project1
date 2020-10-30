const greedChilds = [62,4,5,7,10,15]
      cookies = [4,3,10]
const sortChilds = greedChilds.sort(function(a,b){
  return a - b
})

const sortCookies = cookies.sort(function(a,b){
  return a - b
})

const ln1 = greedChilds.length
const ln2 = sortCookies.length
let countChilds = 0;

function childrens(sortChild,sortCookies) {
  let i = 0; 
  while (i == 0) {
      
    if (sortChild[i]==sortCookies[i]) {
      countChilds++
      i++
    }
  }
  return countChilds
}