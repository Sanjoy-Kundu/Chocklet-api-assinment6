const foodSearch = () => {
	const foodInput = document.getElementById("food-input");
	const foodInputText = foodInput.value;
	//console.log(foodInputText);
	foodInput.value = "";


	//call api 
	const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${foodInputText}`;
	//	console.log(url);
	fetch(url)
		.then(res => res.json())
		.then(data => showDisplayResult(data.drinks))
}
foodSearch();
const showDisplayResult = showImages => {
	//console.log(showImage);
	const showImg = document.getElementById("show-image");
	showImages.forEach(Image => {
		//console.log(Image);
		const newDiv = document.createElement("div");
		newDiv.innerHTML = `

		<img src="${Image.strDrinkThumb}" class="card-img-top" alt="..." >
			<div class="card-body">
				<h5 class="card-title">'${Image.strCategory}'</h5>
				<p class="card-text">'${Image.strInstructions.slice(0, 200)}'</p>
				<button onclick="clickDetails('${Image.idDrink}')" id="onclick-button">More Info</button>
			</div>
		
		`;
		showImg.appendChild(newDiv);
	});
}

const clickDetails = chockletInfo => {
	//console.log(chockletInfo)
	const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${chockletInfo}`;
	//console.log(url);
	fetch(url)
		.then(res => res.json())
		.then(data => chockletOutput(data.drinks[0]))
}

const chockletOutput = output => {
	console.log(output);
	const drinkOutput = document.getElementById("output-result");
	//clear data
	drinkOutput.textContent = " ";
	const div = document.createElement("div");
	div.innerHTML = `
				<div class="row g-0">
					<div class="col-md-4">
						<img src="${output.strDrinkThumb}" class="img-fluid rounded-start" alt="...">
					</div>
					<div class="col-md-8">
						<div class="card-body">
							<h5 class="card-title">Drink Category is: ${output.strCategory}</h5>
							<p class="card-text">Drink instruction: ${output.strInstructions}</p>
							<p class="card-text">Drink System: ${output.strAlcoholic}</p>
						</div>
					</div>
				</div>
	`;
	drinkOutput.appendChild(div);
}