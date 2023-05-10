// js/components/InsertPage.jsx
import { useEffect, useState } from "react"

export default function InsertPage() {
	const [ingredientList, setIngredientList] = useState([{ ingredient: "" }]);

	const handleIngredientChange = (e, index) => {
		const { name, value } = e.target;
		const list = [...ingredientList];
		list[index][name] = value;
		setIngredientList(list);
	};

	const handleIngredientRemove = (index) => {
		const list = [...ingredientList];
		list.splice(index, 1);
		setIngredientList(list);
	};

	const handleIngredientAdd = () => {
		setIngredientList([...ingredientList, { ingredient: "" }]);
	};

	const insertRecord = (event) => {
		event.preventDefault();


		const name = document.getElementById("name").value;
		const time = document.getElementById("time").value;
		var ingredients = document.getElementById("ingredient").value;;
		const instructions = document.getElementById("instructions").value;
		const image = document.getElementById("image").value;
		for (let i = 1; i < ingredientList.length; i++) {
			ingredients += "," + ingredientList[i].ingredient;
			console.log(ingredientList[i].ingredient)
		}
		const data = { name, time, ingredients, instructions, image };


		fetch("/api/records", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then(() => {
		   
			window.location.href = "/";
		});
	}



	return (


		<section className="bg-white dark:bg-gray-900 flex items-stretch bg-grey-lighter min-h-screen">
			<div className=" container px-8 py-10 mx-auto">
				<p className="w-[1500px] mx-auto text-center mt-2 text-xl text-rose-600">
					Add new Recipe </p>
				<br />
				<div className="w-full">
					<form className>
						<div className="mb-6">
							<label htmlFor="name" className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">Recipe name</label>
							<input type="text" id="name"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
							   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Pancakes" required />
						</div>
						<div className="mb-6">
							<label htmlFor="time"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preparation time</label>
							<input type="number" id="time"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required />
						</div>



						<div className="form-field">


							<div className="mb-6">
								<label htmlFor="ingredient" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingredient(s)</label>
								{ingredientList.map((singleIngredient, index) => (
									<div key={index} className="ingredients">
										<div className="second-division">
											{ingredientList.length > 1 && (
												<button
													type="button"
													onClick={() => handleIngredientRemove(index)}
													className="remove-btn"
												>
													<span>Remove</span>
												</button>
											)}
											
										</div>
										<div className="first-division">
											<input
												name="ingredient"
												type="text"
												id="ingredient"
												class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
				focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
				dark:focus:ring-blue-500 dark:focus:border-blue-500"
												value={singleIngredient.ingredient}
												onChange={(e) => handleIngredientChange(e, index)}
												required
											/>
											<br></br>

											{ingredientList.length - 1 === index && ingredientList.length < 10 && (
												<button
													type="button"
													onClick={handleIngredientAdd}
													className="h-7 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
												>
													<span class="relative px-2 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Add another Ingredient</span>
												</button>
											)}
										</div>

									</div>
								))}
							</div>

							<div className="3-division">
											{ingredientList.length > 1 && (
												<div class="bg-gray-200 rounded-md " id="allIngredients">
												<h2>All ingredients: </h2>
				
												{ingredientList &&
													ingredientList.map((singleIngredient, index) => (
														<div key={index}>
															{singleIngredient.ingredient}
														</div>
													))}
											</div>
											)}
											
										</div>
							{/* <div class="bg-gray-200 rounded-md " id="allIngredients">
								<h2>All ingredients: </h2>

								{ingredientList &&
									ingredientList.map((singleIngredient, index) => (
										<div key={index}>
											{singleIngredient.ingredient}
										</div>
									))}
							</div> */}
						</div>


						<div className="mb-6">
							<label htmlFor="instructions"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preparation instructions: </label>
							<textarea id="instructions"
								className="w-full block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required />
						</div>
						<div className="mb-6">
							<label htmlFor="image"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recipe image</label>
							<input type="text" id="image"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required />
						</div>
						<button type="submit"
							onClick={insertRecord}
							className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 
							focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 
							dark:focus:ring-red-900">Submit
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}