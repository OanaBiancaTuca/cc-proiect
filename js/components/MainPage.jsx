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
		<section className="bg-white dark:bg-gray-900 flex items-stretch bg-grey-lighter min-h-screen">

			<div className="container px-1 py-10 mx-auto divide-y divide-gray-200 dark:divide-gray-700 " >
				<p className="w-[1500px] mx-auto text-center mt-2 text-xl text-rose-600">
					Welcome to our food recipe app, where you can discover and create delicious meals that suit your taste and lifestyle. </p>
			    <br />
				<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1 lg:gap-4">
					{records.map(record => (
                    <div key={record._id} class="w-full hover:w-full" >
						<a href="#" 
						class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row
						 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
							<img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-l-lg" src={record.image ? record.image : "https://www.svgheart.com/wp-content/uploads/2020/07/cook-kitchen-free-svg-file.png"}  />
							<div class="flex flex-col p-10 leading-relaxed">
								<h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{record.name}</h5>
								<div class="flex items-center mt-2.5 mb-5 ">
						 			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" id="mainIconPathAttribute" fill="#ff006a"></path> </svg>
						 			<span class="bg-blue-100 text-rose-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{record.time} minutes </span>
						 		</div>
								 <div class="flex items-center ">
						 			<span class="text-xl font-bold text-gray-900 dark:text-white">Ingredients: {record.ingredients}</span>
						 		</div>
								<br></br>
								<p  class="mb-3 font-normal text-gray-700 dark:text-gray-400">{record.instructions}</p>

							<div className={"flex flex-col justify-end mt-10"}>
								<button type="button"
						 			id={record._id}
									onClick={deleteRecord}
						 			className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 
						 			focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 
						 			dark:focus:ring-red-900">DELETE
						 			
						 		</button>
						 	</div>

							</div>
						</a>
						</div>



					))}
				</div>
			</div>


		</section>
	)
}