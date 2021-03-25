document.querySelector('button').addEventListener('click', getActName)

async function getActName(){
  const name = document.querySelector('input').value
  try{
    const res = await fetch(`http://localhost:8000/api/nickname/${name}`)
    const data = await res.json()
    console.log(data)
    document.querySelector('h2').innerText = data.actualName
  }catch(err){
    console.log(err)
  }
}
