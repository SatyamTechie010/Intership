// let fetchdata = async () => {
//   // make request
//   // https://meowfacts.herokuapp.com/
//   //   fetch is a built in method used to make an API  Call.
//   let response = await fetch("https://meowfacts.herokuapp.com/");
//   let finalresponse = await response.json();
//   let fact = finalresponse.data[0];
//   document.getElementById("container").innerText = fact;
// };

const fetchSpells = async () => {
  const res = await fetch("https://potterapi-fedeperin.vercel.app/en/books");
  let finalresponse = await res.json();
  finalresponse.map((n) => {
    return document.getElementById("container").innerHTML+= `<li>${ n.title}</li> `;
  });

};


