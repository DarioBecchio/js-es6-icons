//Milestone 1
//Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.


const elements= [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];
const containerEl = document.getElementById('icon');

elements.forEach((element) => {
    console.log(element);
    console.log(element.name); 
    containerEl.innerHTML += 
	`
	<div class="card col-3 p-1 my-1 d-flex align-items-center align-middle text-center dimension"> 
    <h3>${element.name} </h3> 
    <i class = "${element.family} ${element.prefix}solid ${element.prefix}${element.name} ${element.color}"></i> 
    </div>
	
	`
})

//Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

document.getElementById('selected').addEventListener('change', function() {
	//console.log('You selected: ', );
	let selectedOption = this.value;
	console.log(selectedOption);
	let selectedElement = elements
		
	
	if (selectedOption !== 'all'){
		
		selectedElement = elements.filter((el) => el.type === selectedOption);	
		console.log(selectedElement);					
	}	

	const htmlFilteredElements = selectedElement.map(el=>{
		return `
		<div class="card col-3 p-1 my-1 d-flex align-items-center align-self-center text-center dimension"> 
		<h3>${el.name} </h3> 
		<i class = "${el.family} ${el.prefix}solid ${el.prefix}${el.name} ${el.color}"></i> 
		</div>		
		`
	})
	containerEl.innerHTML = '';
	htmlFilteredElements.forEach((el)=>{
		containerEl.innerHTML += el;
	})
});


//1 - modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.