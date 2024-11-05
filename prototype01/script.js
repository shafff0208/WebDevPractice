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
            <label for="plantTest">Plant:</label>
                <select id="plantTest" name="plantTest[]">
                    <option value="V032">V032</option>
                    <option value="V051">V051</option>
                    <option value="V240">V240</option>
                    <option value="V370">V370</option>
                    <option value="V376">V376</option>
                    <option value="V384">V384</option>
                    <option value="V388">V388</option>
                    <option value="V404">V404</option>
                    <option value="V495">V495</option>
                    <option value="V496">V496</option>
                    <option value="V497">V497</option>
                    <option value="V526">V526</option>
                    <option value="V586">V586</option>
                    <option value="V648">V648</option>
                    <option value="V677">V677</option>

                </select>
        </div>

        <div class="form-group">
            <label for="slocTest">SLOC</label>
                <select id="slocTest" name="slocTest[]">
                        <option value="1A73">1A73</option>
                        <option value="KF03">KF03</option>
                        <option value="MY12">MY12</option>
                        <option value="NI11">NI11</option>
                        <option value="NI12">NI12</option>
                        <option value="NI13">NI13</option>
                        <option value="NI14">NI14</option>
                        <option value="TE11">TE11</option>
                        <option value="EP04">EP04</option>
                        <option value="EB01">EB01</option>
                        <option value="TG01">TG01</option>
                        <option value="EB02">EB02</option>
                        <option value="MJ01">MJ01</option>
                        <option value="SA11">SA11</option>
                        <option value="FC01">FC01</option>
                        <option value="KF01">KF01</option>
                        <option value="KS01">KS01</option>
                        <option value="MY11">MY11</option>
                        <option value="TP51">TP51</option>
                        <option value="2U72">2U72</option>
                        <option value="TE12">TE12</option>
                        <option value="2B72">2B72</option>
                    </select>
            </div>  
        
        <div class="form-group">
                    <label for="contractorTest">Contractor:</label>
                    <select id="contractorTest" name="contractorTest[]">
                        <option value="EP SINAR (M) SDN BHD">EP SINAR (M) SDN BHD</option>
                        <option value="EVOLUSI BERSATU SDN BHD">EVOLUSI BERSATU SDN BHD</option>
                        <option value="EXACT ENGINEERING SDN BHD">EXACT ENGINEERING SDN BHD</option>
                        <option value="FEMAC ENGINEERING SDN BHD">FEMAC ENGINEERING SDN BHD</option>
                        <option value="KHAUF ENGINEERING SDN BHD">KHAUF ENGINEERING SDN BHD</option>
                        <option value="KOMISO SDN BHD">KOMISO SDN BHD</option>
                        <option value="KONSORTIUM MYRCOM">KONSORTIUM MYRCOM</option>
                        <option value="MAJU R&A SDN BHD">MAJU R&A SDN BHD</option>
                        <option value="NINAZ TELCO">NINAZ TELCO</option>
                        <option value="SERI PANCAR">SERI PANCAR</option>
                        <option value="TAISAH TEGUH ENGINEERING SDN B">TAISAH TEGUH ENGINEERING SDN B</option>
                        <option value="TETAP PADU HOLDINGS SDN BHD">TETAP PADU HOLDINGS SDN BHD</option>
                        <option value="TETAP YAKIN">TETAP YAKIN</option>
                        <option value="USAHA KHIDMAT SDN BHD">USAHA KHIDMAT SDN BHD</option>
                        <option value="YAZA COMMUNICATION SDN BHD">YAZA COMMUNICATION SDN BHD</option>
                    </select>
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
    const name = Array.from(document.querySelectorAll('input[id="name"]')).map(input => input.value);
    const email = Array.from(document.querySelectorAll('input[id="email"]')).map(input => input.value);
    const phone = Array.from(document.querySelectorAll('input[id="phone"]')).map(input => input.value);

    // Gather order items data
    const materialNos = Array.from(document.querySelectorAll('input[name="materialNo[]"]')).map(input => input.value);
    const materialDescriptions = Array.from(document.querySelectorAll('input[name="materialDescription[]"]')).map(input => input.value);
    const quantities = Array.from(document.querySelectorAll('input[name="quantity[]"]')).map(input => input.value);
    const projectNumbers = Array.from(document.querySelectorAll('input[name="projectNumber[]"]')).map(input => input.value);
    const loStores = Array.from(document.querySelectorAll('input[name="loStore[]"]')).map(input => input.value);
    const plantTest = Array.from(document.querySelectorAll('select[id="plantTest"]')).map(select => select.value);
    const slocTest = Array.from(document.querySelectorAll('select[id="slocTest"]')).map(select => select.value);
    const contractorTest = Array.from(document.querySelectorAll('select[id="contractorTest"]')).map(select => select.value);
    const fixValue = 50;

    // Prepare data for Excel
    const data = [];
    for (let i = 0; i < fixValue; i++) {
        data.push({
            "Staff Detail": name[i],
            "Email": email[i],
            "Phone": phone[i],
            "Material No.": materialNos[i],
            "Material Description": materialDescriptions[i],
            "Quantity": quantities[i],
            "Project Number": projectNumbers[i],
            "LO Store": loStores[i],
            "Plant": plantTest[i],
            "SLOC": slocTest[i],
            "Contractor": contractorTest[i]
        });
    }

    // Convert data to worksheet
    const ws = XLSX.utils.json_to_sheet(data);

    // Create a new workbook and add the worksheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Order Data");

    // Export workbook to Excel file
    XLSX.writeFile(wb, "MaterialOrderData.xlsx");

    //Test
}
