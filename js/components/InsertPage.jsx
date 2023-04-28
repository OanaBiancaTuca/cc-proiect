// js/components/InsertPage.jsx
export default function InsertPage() {
	const insertRecord = (event) => {
		event.preventDefault();
		const name = document.getElementById("name").value;
		const time = document.getElementById("time").value;
		const ingredients = document.getElementById("ingredients").value;
		const instructions =  document.getElementById("instructions").value;
		const image = document.getElementById("image").value;
		const data = {name, time,ingredients,instructions,image};
		fetch("/api/records", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then(() => {
			console.log("New record inserted");
			document.getElementById("name").value = "";
			document.getElementById("time").value = "";
			document.getElementById("ingredients").value="";
			document.getElementById("instructions").value = "";
			document.getElementById("image").value = "";
		});
	}

	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="container px-6 py-10 mx-auto">
				<h1 className="w-[500px] mx-auto text-center text-6xl">Food Recipe app</h1>
				<p className="w-[1000px] mx-auto text-center mt-4 text-3xl">Welcome to our food recipe app, where you can discover and create delicious meals that suit your taste and lifestyle. </p>

				<form>
					<div className="mb-6">
						<label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recipe name</label>
						<input type="text" id="name"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="Pancakes" required/>
					</div>
					<div className="mb-6">
						<label htmlFor="time"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Receipe preparation time</label>
						<input type="number" id="time"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       required/>
					</div>
					<div className="mb-6">
						<label htmlFor="ingredients"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Receipe ingredients</label>
						<textarea id="ingredients"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       required/>
					</div>
					<div className="mb-6">
						<label htmlFor="instructions"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preparation instructions: </label>
						<textarea id="instructions"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       required/>
					</div>
					<div className="mb-6">
						<label htmlFor="image"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Receipe image</label>
						<input type="text" id="image"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       required/>
					</div>
					<button type="submit"
					        onClick={ insertRecord }
					        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
					</button>
				</form>
			</div>
		</section>
	)
}