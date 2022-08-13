const fs = require("fs");
const path = require("path");
try {
	makeDirectory();
} catch (error) {
	console.log("Make sure that the curent directory dont have file named sorted files");
}

let filesnames = fs.readdirSync(__dirname);

filesnames.forEach((file) => {
	if (file === "sort.js") {
		console.log("");
	} else {
		console.log("file " + file + " extension " + path.extname(file));

		if (path.extname(file) === ".pdf") {
			console.log("moving to pdf");
			let source = path.join(__dirname, file);
			let destination = path.join(__dirname, "sorted files", "pdf files", file);
			move(source, destination);
		} else if (path.extname(file) === ".txt") {
			console.log("moving to text");
			let source = path.join(__dirname, file);
			let destination = path.join(__dirname, "sorted files", "text files", file);
			move(source, destination);
		} else if (path.extname(file) === ".jpg" || path.extname(file) === ".png") {
			console.log("Moving to image");
			let source = path.join(__dirname, file);
			let destination = path.join(__dirname, "sorted files", "images", file);
			move(source, destination);
		} else if (path.extname(file) === ".zip" || path.extname(file) === ".rar") {
			console.log("Moving to compressed");
			let source = path.join(__dirname, file);
			let destination = path.join(__dirname, "sorted files", "compressed files", file);
			move(source, destination);
		} else {
			console.log("Moving to miscellaneous file");
			let source = path.join(__dirname, file);
			let destination = path.join(__dirname, "sorted files", "miscellaneous files", file);
			move(source, destination);
		}
	}
});

function move(source, destination) {
	let currentPath = source;
	let destinationPath = destination;
	fs.rename(currentPath, destinationPath, () => {
		console.log("Successfully moved the file!");
	});
}

function makeDirectory() {
	let makingfiles = fs.mkdirSync(path.join(__dirname, "sorted files"), console.log("Files created"));
	let individualfiles = fs.mkdirSync(path.join(__dirname, "sorted files", "images"), console.log("image Files created"));
	let individualfiles1 = fs.mkdirSync(path.join(__dirname, "sorted files", "text files"), console.log("text Files created"));
	let individualfiles2 = fs.mkdirSync(path.join(__dirname, "sorted files", "pdf files"), console.log("pdf Files created"));
	let individualfiles3 = fs.mkdirSync(path.join(__dirname, "sorted files", "miscellaneous files"), console.log("  miscellaneous Files created"));
	let individualfiles4 = fs.mkdirSync(path.join(__dirname, "sorted files", "compressed files"), console.log(" compressed Files  created"));
}
