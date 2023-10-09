////////////////////////////////// TASK 1 //////////////////////////
function createTable(m, n) {
	let tagTable = document.createElement('table');
	for (let i = 0; i < m; i++) {
	let tagTr = document.createElement('tr');
	
	for (let j = 0; j < n; j++) {
	let tagTd = document.createElement('td'); 
	tagTr.appendChild(tagTd);
	}
	tagTable.appendChild(tagTr);
	}
	return tagTable;
}
	document.body.appendChild(createTable(7, 7));

	////////////////////////////////// TASK 2 //////////////////////////
	const accordionData = [
		{
		  title: "Заголовок 1",
		  content: "Вміст 1"
		},
		{
		  title: "Заголовок 2",
		  content: "Вміст 2"
		},
		{
		  title: "Заголовок 3",
		  content: "Вміст 3"
		}
	  ];

	  const accordion = document.createElement("div");
	  accordion.classList.add("accordion");
     
	  accordionData.forEach(elem =>{
		const acordionItem = document.createElement("div");
		acordionItem.classList.add("accordionItem");

		const accordionTitle = document.createElement("div");
		accordionTitle.classList.add("accordionTitle");
		accordionTitle.textContent = elem.title;
		accordionTitle.addEventListener('click', function(){
			if (accordionContent.style.maxHeight) {
				accordionContent.style.maxHeight = null; 
			 } else {
				accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"; 
			 }
		});
		const accordionContent = document.createElement("div");
		accordionContent.classList.add("accordionContent");
		accordionContent.textContent = elem.content;
		accordion.appendChild(acordionItem);
		acordionItem.appendChild(accordionTitle);
		acordionItem.appendChild(accordionContent);
	  });
	  document.body.appendChild(accordion)

 ////////////////////////////////// TASK 3 //////////////////////////
// function createForm() {
// 	const formDiv = document.createElement("div");
// 	document.body.appendChild(formDiv);
// 	const formSections = [
// 		 {
// 			  label: '',
// 			  fields: [
// 					{ type: "text", labelText: "Логін:", name: "login" },
// 					{ type: "text", labelText: "Пароль:", name: "password" },
// 					{ type: "text", labelText: "Повторіть пароль:", name: "confirmPassword" },
// 			  ]
// 		 },
// 		 {
// 			  label: 'Стать:',
// 			  fields: [
// 					{ type: "checkbox", labelText: "чоловік", name: "men" },
// 					{ type: "checkbox", labelText: "жінка", name: "women" },
// 			  ]
// 		 },
// 		 {
// 			  label: 'Інтереси:',
// 			  fields: [
// 					{ type: "checkbox", labelText: "футбол", name: "football" },
// 					{ type: "checkbox", labelText: "шахи", name: "chess" },
// 					{ type: "checkbox", labelText: "малювання", name: "painting" },
// 					{ type: "checkbox", labelText: "музика", name: "music" },
// 			  ]
// 		 }
// 	];
// 	const buttonsData = [
// 		{ textContent: "Очистити", type: "reset" },
// 		{ textContent: "Відправити", type: "submit" },
//   ];
//   const cities = ["Житомир", "Київ", "Львів"];
// 	formSections.forEach(section => {
// 		 const sectionLabel = document.createElement("label");
// 		 sectionLabel.textContent = section.label;
// 		 formDiv.appendChild(sectionLabel);
	

// 		 section.fields.forEach(field => {
// 			  const input = document.createElement('input');
// 			  input.type = field.type;
// 			  input.name = field.name;
// 			  const label = document.createElement('label');
// 			  label.textContent = field.labelText;
// 			  formDiv.appendChild(label);
// 			  formDiv.appendChild(input);
// 		 });
// 	});
// 	let cityLabel = document.createElement("label");
// 	cityLabel.textContent = "Вкажіть місто:";
// 	let citySelect = document.createElement("select");
// 	cities.forEach(city => {
// 		 let option = document.createElement("option");
// 		 option.value = city;
// 		 option.textContent = city;
// 		 citySelect.appendChild(option);
// 		 formDiv.appendChild(cityLabel);
// 	    formDiv.appendChild(citySelect);
// 	});
//   buttonsData.forEach(elem => {
// 		let button = document.createElement("button");
// 		button.textContent = elem.textContent;
// 		button.type = elem.type;
// 		formDiv.appendChild(button);
//   });
// }
// createForm();

function createForm() {
	const form = document.createElement("form"); // Створення елемента <form>
  form.classList.add("form"); // Додати клас для стилізації форми
  document.body.appendChild(form);
 
	const personalData = [
	  { type: "text", labelText: "Логін:", name: "login" },
	  { type: "text", labelText: "Пароль:", name: "password" },
	  { type: "text", labelText: "Повторіть пароль:", name: "confirmPassword" },
	];
 
	const genderData = [
	  { type: "checkbox", labelText: "чоловік", name: "men" },
	  { type: "checkbox", labelText: "жінка", name: "women" },
	];
 
	const interestsData = [
	  { type: "checkbox", labelText: "футбол", name: "football" },
	  { type: "checkbox", labelText: "шахи", name: "chess" },
	  { type: "checkbox", labelText: "малювання", name: "painting" },
	  { type: "checkbox", labelText: "музика", name: "music" },
	];
 
	const buttonsData = [
	  { textContent: "Очистити", type: "reset" },
	  { textContent: "Відправити", type: "submit" },
	];
 
	const cities = ["Житомир", "Київ", "Львів"];
 
	personalData.forEach(field => {
	  const input = document.createElement('input');
	  input.type = field.type;
	  input.name = field.name;
	  const label = document.createElement('label');
	  label.textContent = field.labelText;
	  form.appendChild(label);
	  form.appendChild(input);
	});
 
	const genderSection = document.createElement("div");
	genderSection.classList.add("gendersection");
	const labelGen = document.createElement('label');
	labelGen.textContent = "Стать:";
	genderSection.appendChild(labelGen);
	genderData.forEach(field => {
	  const input = document.createElement('input');
	  input.type = field.type;
	  input.name = field.name;
	  const label = document.createElement('label');
	  label.textContent = field.labelText;
	  genderSection.appendChild(input);
	  genderSection.appendChild(label);
	});
	form.appendChild(genderSection);
 
	const prefSection = document.createElement("div");
	prefSection.classList.add("prefsection");
	const labelPref = document.createElement('label');
	labelPref.textContent = "Інтереси:";
	prefSection.appendChild(labelPref);
 
	interestsData.forEach(field => {
	  const input = document.createElement('input');
	  input.type = field.type;
	  input.name = field.name;
	  const label = document.createElement('label');
	  label.textContent = field.labelText;
	  prefSection.appendChild(input);
	  prefSection.appendChild(label);
	});
	form.appendChild(prefSection);
 
	let cityLabel = document.createElement("label");
	cityLabel.textContent = "Вкажіть місто:";
	let citySelect = document.createElement("select");
	cities.forEach(city => {
	  let option = document.createElement("option");
	  option.value = city;
	  option.textContent = city;
	  citySelect.appendChild(option);
	  form.appendChild(cityLabel);
	  form.appendChild(citySelect);
	});
 
	buttonsData.forEach(elem => {
	  let button = document.createElement("button");
	  button.textContent = elem.textContent;
	  button.type = elem.type;
	  form.appendChild(button);
	  
	  if (elem.type === "reset") {
      button.addEventListener("click", () => {
			form.reset();
      });
    }
	});
 }
 
 createForm();
