let data = [
	[		`Project Brief`,		[			[`Project Documents`],			[				`Project Goals`,
				[
					`Design brand identity`,
					`Design mobile app`,
					`Design web app`,
					`Design marketing website`
				],
				`checkbox`
			],




			[
				`Success Metrics`,
				[
					`The brand would be distinctive and easily recognizable by potential users`,
					`The web/mobile applications would be user friendly and easy to navigate`,
					`The website would provide all information needed for the user to get started`,
					`The business objectives for the platform would be reached`
				],
				`checkbox`
			],
		]
	],
	[
		`Brand Identity`,
		[
			[`Strategy Document`],
			[
				`Design Deliverables`,
				[
					`Logo`,
					`Typeface`,
					`Colour`
				],
				`radio`
			],
			[
				`Brand Guidelines`
			],
		]
	],
	[
		`Product Design`,
		[
			[
				`User Research`,
				`A preliminary research stage to discover the user goals and business objectives, analyze competitors, and define the product solution clearly.`
			],
			[
				`Information Architecture`,
				`This is used to determine the number of views to design and how the user can navigate through the platform.`
			],
			[
				`Wireframes`,
				`Preliminary sketches to determine the structure of content on each section of the platform.`
			],
		]
	],
	[
		`Marketing Website`,
		[
			[`Sitemap`],
			[`Wireframes`],
			[`Visual Design`]
		]
	]
];



function renderCards(data){ 
	let cards = data.map(function(card){ 
		
			let cardTitle = card[0], // Project Brief, Brand Identity, Product Design, Marketing Website
				cardTasks = card[1]; // Массив с тасками/задачами в карточке
			let renderTasks = cardTasks.map(function(task, index){ // Массив задач
					
				let typedCards = [];

					if (!Array.isArray(task[1]) && task[1] !== undefined) {
								return `<li class="list-group-item d-flex justify-content-between align-items-start">
							    <div class="ms-2 me-auto">
							      <div class="fw-bold">${task[0]}</div>
							      <span>${task[1]}</span>
							</li>`;
							} else if (Array.isArray(task[1])) {
								typedCards.push(`<li class="list-group-item d-flex justify-content-between align-items-start">
							    <div class="ms-2 me-auto">
							      <div class="fw-bold">${task[0]}</div>
							     `)

					let temp = task[1]
				 					.map(function (item, index){
					
					return `  <div class="form-check">
						            	<input class="form-check-input" type="${task[2]}" name="${task[0].replace(' ', '_').toLowerCase()}" 
						            	id="${task[0].replace(' ', '_').toLowerCase()+`-`+[index]}">
						            	<label class="form-check-label" for="${task[0].replace(' ', '_').toLowerCase()+`-`+[index]}">
						           	${item}
						         		         
							   </label>
							   </div>
    						    `
						})
				 					.join("")
				 					return typedCards+temp+`</div><span class="badge bg-primary rounded-pill">${task[1].length}</span></li>`
				 					
				 				}

						    else {
						   return  `<li class="list-group-item d-flex justify-content-between align-items-start">
							    <div class="ms-2 me-auto">
							      <div class="fw-bold">${task[0]}</div>
							
						       							    </div>
						    </li>` 	
						    }
				})
				.join('')

			return `<div class="col-sm-12 col-md-6 col-lg-3 p-3">
				<div class="card">
					<img src="images/${cardTitle.replaceAll(' ','')}.jpeg" class="card-img-top" alt="${cardTitle}">
				  	<div class="card-body">
				    	<h5 class="card-title">${cardTitle}</h5>
				    	<ol class="list-group list-group-numbered">
					    	${renderTasks}
					    </ol>
			    	</div>
			    </div>
		   </div>`;
		})
		.join('');

	return cards;
}

function renderList(data){
	document.write(`<div class="container">
			<div class="row">
				${renderCards(data)}
			</div>
		</div>`)
}

renderList(data);


