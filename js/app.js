const data = {
    'React': 185134,
    'Vue': 195514,
    'Angular': 80460,
    'Svelte': 57022,
    'Ember.js': 22165,
    'Backbone.js': 27862
};

	

	const newData = [{Beach:"Yes", ID:"ID_001", mountainType:"Medium", Country:"Brazil", Continent:"Latin America", Population:8382612.0, City:"Rio de Janiero"}, 
					 {Country:"Colombia", Beach:"No", City:"Cartagena", ID:"ID_002", Population:9699486.0, mountainType:"Large", Continent:"Latin America"}, 
					 {City:"Goa", Population:7755214.0, ID:"ID_003", Continent:"Asia", mountainType:"Large", Country:"India", Beach:"No"}]; 


	//  {Beach=Yes, ID=ID_004, Continent=Australasia, Population=6341211.0, Country=New Zealand, City=Auckland, mountainType=Medium}, 
	//  {Beach=No, Continent=Europe, City=Bratisalva, ID=ID_005, mountainType=Small, Country=Slovakia, Population=8602038.0}, 
	//  {Country=Canada, Beach=Yes, ID=ID_006, mountainType=Small, City=Montreal, Continent=North America, Population=9462124.0}, 
	//  {City=Tokyo, Country=Japan, mountainType=Medium, Population=9497113.0, Beach=Yes, Continent=Asia, ID=ID_007}, 
	//  {mountainType=Small, City=Tulum, Continent=Latin America, ID=ID_008, Population=8858659.0, Country=Mexico, Beach=Yes}, 
	//  {mountainType=Medium, Population=6464850.0, Country=Costa Rica, City=Limon, Continent=Latin America, ID=ID_009, Beach=Yes}, 
	//  {City=Nairobi, Country=Kenya, Population=8131403.0, mountainType=Large, Continent=Africa, Beach=No, ID=ID_010}, 
	//  {ID=ID_011, Population=9416804.0, Country=Norway, Continent=Europe, mountainType=Medium, City=Molde, Beach=Yes}, 
	//  {mountainType=Large, Country=Peru, City=Lima, Beach=Yes, Population=9150593.0, ID=ID_012, Continent=Latin America}, 
	//  {mountainType=Medium, Continent=Europe, Country=Scotland, Population=6964853.0, Beach=No, ID=ID_013, City=Glasgow}, 
	//  {Beach=Yes, Continent=Africa, Population=6741642.0, City=Cape Town, Country=South Africa, ID=ID_014, mountainType=Small}, 
	//  {Country=Ghana, Population=6729271.0, ID=ID_015, City=Accra, Continent=Africa, Beach=Yes, mountainType=Medium}, 
	//  {Population=7300306.0, City=Lisbon, Continent=Europe, Beach=Yes, Country=Portugal, mountainType=Small, ID=ID_016}, 
	//  {ID=ID_017, Beach=No, mountainType=Medium, City=Kathmundu, Continent=Asia, Population=5402214.0, Country=Nepal}];


		document.querySelector("#filter-1").addEventListener("change", function(event){
			const object = createObject(event);

			const ctx = document.getElementById('myChart').getContext('2d');
			
			const myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: Object.keys(object),
					datasets: [
						{
							label: 'Number of GitHub Stars',
							data: Object.values(object),
						},
					],
				},
				options: {
					indexAxis: 'y',
				}
			});
			
			// myChart.destroy();

			
		})

		// function 

		function createObject(e){
			const object = {};
			for(var i of newData){
				if(i["Continent"] === e.target.value){
					object[i["Country"]] = i["Population"];
				}
			}
			// console.log(object);
			return object;

		}


// const ctx = document.getElementById('myChart').getContext('2d');

// const myChart = new Chart(ctx, {
// 	type: 'bar',
// 	data: {
// 		labels: Object.keys(data),
// 		// labels: loop(),
// 		datasets: [
// 			{
// 				label: 'Number of GitHub Stars',
// 				data: Object.values(data),
// 			},
// 		],
// 	},
//     options: {
//         indexAxis: 'y',
//       }
// });
