const form = document.getElementById("slugForm");
const inputTitle = document.getElementById("inputTitle");
const outputURL = document.getElementById("outputURL");
const status = document.getElementById("status");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	generateSlug();
});

function generateSlug() {
	const title = inputTitle.value.trim();

	const slug = title
		.toLowerCase()
		.normalize("NFD") // remove accents (á -> a)
		.replace(/[\u0300-\u036f]/g, "") // strip diacritics
		.replace(/[^\w\s-]/g, "") // remove unwanted characters
		.replace(/\s+/g, "-") // spaces → hyphen
		.replace(/-+/g, "-"); // collapse hyphens

	outputURL.value = slug;

	copyToClipboard(slug);
}

function copyToClipboard(text) {
	navigator.clipboard
		.writeText(text)
		.then(() => {
			status.textContent = "Copied!";
		})
		.catch(() => {
			status.textContent = "Clipboard permission denied";
		});

	// clear after 2 seconds
	setTimeout(() => {
		status.textContent = "";
	}, 2000);
}
