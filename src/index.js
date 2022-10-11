//form fields
// const form = document.querySelector('.form-data');
const username = document.querySelector('.username');
const searchButton = document.querySelector('.search-btn');

//form results
// const data = document.querySelector('.data');
const errors = document.querySelector('.errors');
const results = document.querySelector('.result-container');
const following = document.querySelector('.following');
const followers = document.querySelector('.followers');
const repository = document.querySelector('.repository');
// const image = document.querySelector('.avatar');

//eventlistener
// form.addEventListener('submit',(e) => handleSubmit(e));
searchButton.addEventListener("click", () =>{
	// handlesubmit (e) 
	const user = username.value

	fetch(`https://api.github.com/users/${user}`) 
.then(response => response.json())
.then(data=> {
	let image = document.createElement('img');
	image.src = data.avatar_url;

	results.insertBefore(image, results.firstChild);
	// results.appendChild(image);

	followers.textContent = data.followers;
	following.textContent = data.following;
	const repoUrl = data.repos_url;
	 fetch(repoUrl)
	 .then(response => response.json())
	 .then(data => {

		for(let i in data){
				let tag1 = document.createElement("p");
                let text1 = document.createTextNode(`Name: ${data[i].name}`);
				tag1.classList.add('tag1');
                tag1.appendChild(text1);
                // repository.appendChild(tag1);

                let tag = document.createElement("p");
                let text = document.createTextNode(`Description: ${data[i].description}`);
                tag.appendChild(text);

				let container = document.createElement('div');
				container.appendChild(tag1);
				container.appendChild(tag);
				container.classList.add('cont');


				repository.appendChild(container);

		}

		console.log(data)
	 })

}
)
.catch( error => console.error(error));
	
} );    






