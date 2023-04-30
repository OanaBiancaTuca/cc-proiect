// js/components/MainPage.jsx
import { useEffect, useState } from "react";



export default function MainPage() {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		try {
			fetch('/api/records', {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecords(json.data));

		}

		catch (error) {
			console.log(error);
		}
	}, []);

	const deleteRecord = (event) => {
		event.preventDefault();
		const id = event.target.id;
		try {
			fetch(`/api/records?id=${id}`, {
				method: 'DELETE',
			})
				.then(response => response.json())
				.then(json => {
					setRecords(records.filter(record => record._id !== id));
				});
		}
		catch (error) {
			console.log(error);
		}
	}

	const viewRecord = (event) => {
		event.preventDefault();
		const id = event.target.id;
		try {
			fetch(`/api/records?id=${id}`, {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => {
					setRecords(records.filter(record => record._id == id));
				});
		}
		catch (error) {
			console.log(error);
		}

	}

	return (
		<section className="bg-white dark:bg-gray-900">

			<div className="container px-6 py-10 mx-auto" >
				<p className="w-[1500px] mx-auto text-center mt-2 text-xl">
					Welcome to our food recipe app, where you can discover and create delicious meals that suit your taste and lifestyle. </p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
					{records.map(record => (
					
						<div class="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  hover:bg-gray-200 hover:max-w-sm">
							<a href="#">

								<img className="w-full h-64" src={record.image ? record.image : "https://www.svgheart.com/wp-content/uploads/2020/07/cook-kitchen-free-svg-file.png"} alt={"Image for recipe"} />
							</a>
							
							<div class="px-5 pb-5">
								<a href="#">
									<h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">{record.name}</h5>
								</a>
								<div class="flex items-center mt-2.5 mb-5 ">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" id="mainIconPathAttribute" fill="#ff006a"></path> </svg>
									<span class="bg-blue-100 text-rose-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{record.time} minutes </span>
								</div>
								<div class="flex items-center ">
									<span class="text-xl  text-gray-900 dark:text-white">Ingredients: {record.ingredients}</span>
								</div>

							</div>
							<div className={"flex justify-center mt-4"}>
								<button type="button"
									id={record._id}
									onClick={deleteRecord}
									className="focus:outline-none text-white bg-white-700 hover:bg-red-800 focus:ring-4 
									focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 
									dark:focus:ring-red-900">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" height="28" width="28"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" id="mainIconPathAttribute" fill="#000000"></path></svg>
								</button>


							</div>
	
						</div>
						
					))}
				</div>
			</div>


		</section>
	)
}