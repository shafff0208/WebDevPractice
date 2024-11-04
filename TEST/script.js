// Function to add a new order item section
function addOrderItem() {
    const container = document.getElementById('orderItemsContainer');
    const newItem = document.createElement('div');
    newItem.classList.add('order-item');
    newItem.innerHTML = `
        <div class="form-group">
            <label>Material No.:</label>
            <input type="text" name="materialNo[]" required>
        </div>
        <div class="form-group">
            <label>Material Description:</label>
            <input type="text" name="materialDescription[]" required>
        </div>
        <div class="form-group">
            <label>Quantity:</label>
            <input type="number" name="quantity[]" required>
        </div>
        <div class="form-group">
            <label>Project Number:</label>
            <input type="text" name="projectNumber[]" required>
        </div>
        <div class="form-group">
            <label>LO Store:</label>
            <input type="text" name="loStore[]" required>
        </div>
        <div class="form-group">
            <label>Plant:</label>
            <input type="text" name="plant[]" required>
        </div>
        <div class="form-group">
            <label>SLOC:</label>
            <input type="text" name="sloc[]" required>
        </div>
        <div class="form-group">
            <label>Contractor:</label>
            <input type="text" name="contractor[]" required>
        </div>
    `;
    container.appendChild(newItem);
}

// Function to clear the form
function clearForm() {
    document.getElementById('orderForm').reset();
    const container = document.getElementById('orderItemsContainer');

    // Remove all dynamically added order items except the first one
    while (container.children.length > 1) {
        container.removeChild(container.lastChild);
    }
}

// Function to export form data to Excel
function exportToExcel() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Gather order items data
    const materialNos = Array.from(document.querySelectorAll('input[name="materialNo[]"]')).map(input => input.value);
    const materialDescriptions = Array.from(document.querySelectorAll('input[name="materialDescription[]"]')).map(input => input.value);
    const quantities = Array.from(document.querySelectorAll('input[name="quantity[]"]')).map(input => input.value);
    const projectNumbers = Array.from(document.querySelectorAll('input[name="projectNumber[]"]')).map(input => input.value);
    const loStores = Array.from(document.querySelectorAll('input[name="loStore[]"]')).map(input => input.value);
    const plants = Array.from(document.querySelectorAll('input[name="plant[]"]')).map(input => input.value);
    const slocs = Array.from(document.querySelectorAll('input[name="sloc[]"]')).map(input => input.value);
    const contractors = Array.from(document.querySelectorAll('input[name="contractor[]"]')).map(input => input.value);

    // Prepare data for Excel
    const data = [];
    for (let i = 0; i < materialNos.length; i++) {
        data.push({
            "Customer Name": name,
            "Email": email,
            "Phone": phone,
            "Material No.": materialNos[i],
            "Material Description": materialDescriptions[i],
            "Quantity": quantities[i],
            "Project Number": projectNumbers[i],
            "LO Store": loStores[i],
            "Plant": plants[i],
            "SLOC": slocs[i],
            "Contractor": contractors[i]
        });
    }

    // Convert data to worksheet
    const ws = XLSX.utils.json_to_sheet(data);

    // Create a new workbook and add the worksheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Order Data");

    // Export workbook to Excel file
    XLSX.writeFile(wb, "MaterialOrderData.xlsx");
}
