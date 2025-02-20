let wasmInstance;
let records = [];

// Load WASM
async function loadWASM() {
    try {
        const response = await fetch("/static/student_record.wasm");
        const bytes = await response.arrayBuffer();
        const { instance } = await WebAssembly.instantiate(bytes);
        wasmInstance = instance.exports;
        console.log("✅ WebAssembly Loaded Successfully");
    } catch (err) {
        console.error("❌ Error loading WASM:", err);
    }
}

// Add Student Record
function addRecord() {
    const roll = parseInt(document.getElementById("roll").value);
    const name = document.getElementById("name").value;
    const marks = parseInt(document.getElementById("marks").value);

    if (!roll || !name || !marks) {
        alert("Please fill all fields!");
        return;
    }

    records.push({ roll, name, marks });
    alert("✅ Record Added Successfully!");
    clearInputs();
}

// Display All Records
function displayRecords() {
    const output = document.getElementById("output");
    output.textContent = "";

    if (records.length === 0) {
        output.textContent = "No records available.";
        return;
    }

    records.forEach((record, index) => {
        output.textContent += `#${index + 1}\n`;
        output.textContent += `Roll No: ${record.roll}\n`;
        output.textContent += `Name: ${record.name}\n`;
        output.textContent += `Marks: ${record.marks}\n\n`;
    });
}

// Clear Input Fields
function clearInputs() {
    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";
}

// Load WASM when the page loads
window.onload = loadWASM;
