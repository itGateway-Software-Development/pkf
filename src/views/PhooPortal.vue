<template>
  <div class="phoo-portal-page">
    <div class="container pt-3 pb-5">
      <!-- Header -->
      <div v-if="isLoggedIn" class="tool-header text-center mb-4">
        <h1 class="tool-title mb-2">Phoo's Ledger</h1>
        <p class="text-muted"></p>
      </div>

      <!-- Login Screen -->
      <div v-if="!isLoggedIn" class="row justify-content-center align-items-center" style="min-height: 60vh;">
        <div class="col-md-6 col-lg-5">
          <div class="login-card p-4 p-md-5">
            <div class="text-center mb-4">
              <img src="../assets/images/logo.png" alt="PKF Logo" class="login-logo mb-3" />
              <h4 class="text-dark fw-bold mb-1">Phoo's Ledger</h4>
              <p class="text-muted small">Authorized credential gate. Enter administrator login.</p>
            </div>

            <form @submit.prevent="handleLogin">
              <div class="mb-3">
                <label class="form-label small fw-bold text-muted">USERNAME</label>
                <div class="input-group">
                  <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-user text-muted"></i></span>
                  <input type="text" v-model="username" class="form-control border-start-0 cyber-input-field" placeholder="Enter username" required />
                </div>
              </div>

              <div class="mb-4">
                <label class="form-label small fw-bold text-muted">PASSWORD</label>
                <div class="input-group">
                  <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-lock text-muted"></i></span>
                  <input type="password" v-model="password" class="form-control border-start-0 cyber-input-field" placeholder="Enter password" required />
                </div>
              </div>

              <div v-if="loginError" class="alert alert-danger py-2 px-3 small border-danger-light bg-danger-light text-danger mb-4">
                <i class="fa-solid fa-triangle-exclamation me-2"></i>Invalid credentials. Access denied.
              </div>

              <button type="submit" class="btn btn-primary-custom w-100 py-2 fw-bold">
                <i class="fa-solid fa-key me-2"></i>Authenticate
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Main Workspace -->
      <div v-else class="row justify-content-center">
        <div class="col-lg-12">
          <div class="tool-card">
            <!-- Header bar -->
            <div class="card-header-tool d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <i class="fa-solid fa-folder-tree me-2 text-primary"></i>
                <span class="fw-bold text-dark">Phoo Ledger</span>
              </div>
              <button class="btn btn-sm btn-outline-secondary logout-btn" @click="handleLogout">
                <i class="fa-solid fa-right-from-bracket me-1"></i>Logout
              </button>
            </div>

            <div class="card-body-tool p-4">
              <!-- Upload Area -->
              <div v-if="!fileLoaded" class="upload-bay text-center p-5" 
                   @dragover.prevent="dragOver" 
                   @dragleave="dragLeave" 
                   @drop.prevent="handleFileDrop"
                   :class="{ 'drag-active': isDragging }">
                <input type="file" id="fileInput" ref="fileInput" accept=".xlsx, .xls, .csv" class="d-none" @change="handleFileSelect" />
                <div class="upload-icon-wrap mb-4">
                  <i class="fa-solid fa-file-excel text-primary fa-3x"></i>
                </div>
                <h4 class="text-dark text-center">Upload Ledger Spreadsheet to Categorize</h4>
                <p class="text-muted text-center">Supports .xlsx, .xls, and .csv formats</p>
                <button class="btn btn-primary-custom mt-3" @click="triggerFileInput">
                  <i class="fa-solid fa-folder-open me-2"></i>Browse Files
                </button>
              </div>

              <!-- Content when File is Loaded -->
              <div v-else>
                <!-- File Stats & Remove -->
                <div class="file-info-header d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                  <div>
                    <h5 class="text-dark mb-1"><i class="fa-solid fa-file-csv text-primary me-2"></i>{{ fileName }}</h5>
                    <span class="badge bg-secondary">{{ parsedRows.length }} Entries Loaded</span>
                  </div>
                  <button class="btn btn-outline-danger" @click="resetFile">
                    <i class="fa-solid fa-trash-can me-2"></i>Remove File
                  </button>
                </div>

                <!-- Column Settings for sorting -->
                <div class="column-selection-box p-4 mb-4">
                  <h6 class="text-dark fw-bold mb-3"><i class="fa-solid fa-sliders me-2"></i>Categorization Criteria Columns</h6>
                  <div class="row g-3">
                    <div class="col-md-12">
                      <label class="form-label small fw-bold text-muted">CATEGORY COLUMN (FOR DIVISION SORT)</label>
                      <select v-model="selectedCategoryCol" class="form-select border-slate" @change="processSorting">
                        <option value="">-- Choose Column --</option>
                        <option v-for="col in headers" :key="col" :value="col">{{ col }}</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Sorted Tables Output -->
                <div class="results-panel p-4">
                  <div class="results-summary d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                    <div>
                      <h6 class="text-dark fw-bold mb-1"><i class="fa-solid fa-table-list me-2"></i>Sorted Ledger Output</h6>
                      <span class="text-muted small" v-if="selectedCategoryCol">
                        Sorted by Default Date Column &amp; Category: {{ selectedCategoryCol }}
                      </span>
                      <span class="text-muted small" v-else>Please select the category column above</span>
                    </div>
                    <button v-if="hasSortedData" class="btn btn-success btn-sm d-flex align-items-center" @click="downloadMultiSheetExcel">
                      <i class="fa-solid fa-file-excel me-2"></i>Export Sorted Workbook (.xlsx)
                    </button>
                  </div>

                  <!-- Column warning -->
                  <div v-if="!selectedCategoryCol" class="text-center p-4 text-warning bg-warning-light border-warning-light">
                    <i class="fa-solid fa-circle-exclamation fa-2x mb-2 text-warning"></i>
                    <p class="mb-0 fw-bold">Select a Category column above to process and generate sorted tables.</p>
                  </div>

                  <!-- Empty output -->
                  <div v-else-if="!hasSortedData" class="text-center p-4 text-danger bg-danger-light border-danger-light">
                    <i class="fa-solid fa-circle-exclamation fa-2x mb-2 text-danger"></i>
                    <p class="mb-0 fw-bold">No valid entries found to process. Verify your date columns are formatted correctly.</p>
                  </div>

                  <!-- Sorted Accordions -->
                  <div v-else>
                    <div class="accordion" id="monthAccordion">
                      <div v-for="(monthData, monthName, mIdx) in sortedGroups" :key="monthName" class="accordion-item mb-3 border rounded shadow-sm">
                        <h2 class="accordion-header" :id="'heading' + mIdx">
                          <button class="accordion-button collapsed fw-bold py-3 text-dark bg-light rounded-top" type="button" 
                                  data-bs-toggle="collapse" 
                                  :data-bs-target="'#collapse' + mIdx" 
                                  aria-expanded="false" 
                                  :aria-controls="'collapse' + mIdx">
                            <i class="fa-solid fa-calendar-check text-primary me-2"></i>
                            {{ monthName }} 
                            <span class="badge bg-primary ms-3">{{ getMonthRowCount(monthData) }} Entries</span>
                          </button>
                        </h2>
                        
                        <div :id="'collapse' + mIdx" class="accordion-collapse collapse" :aria-labelledby="'heading' + mIdx" data-bs-parent="#monthAccordion">
                          <div class="accordion-body p-4 bg-white">
                            <!-- Inside the Month, loop through categories to render separate tables -->
                            <div v-for="(categoryRows, catName) in monthData" :key="catName" class="category-block mb-5">
                              <h5 class="category-header fw-bold pb-2 mb-3 d-flex align-items-center justify-content-between border-bottom">
                                <span class="text-primary"><i class="fa-solid fa-tags me-2"></i>{{ catName }}</span>
                                <span class="badge bg-secondary" style="font-size: 0.8rem;">{{ categoryRows.length }} Records</span>
                              </h5>

                              <!-- Separate table for each Category inside Month -->
                              <div class="table-responsive table-wrap">
                                <table class="table table-bordered table-hover mb-0">
                                  <thead class="table-light">
                                    <tr>
                                      <th scope="col" style="width: 100px;">Excel Row</th>
                                      <th v-for="col in headers" :key="col" scope="col" :class="{ 'fw-bold text-primary': col === selectedDateCol || col === selectedCategoryCol }">
                                        {{ col }}
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr v-for="(row, rIdx) in categoryRows" :key="rIdx">
                                      <td class="fw-bold text-secondary">Row {{ row._excelRowNum }}</td>
                                      <td v-for="col in headers" :key="col" :class="{ 'bg-light-blue fw-bold': col === selectedDateCol || col === selectedCategoryCol }">
                                        {{ row[col] }}
                                      </td>
                                    </tr>
                                    <!-- Total row -->
                                    <tr class="table-info fw-bold">
                                      <td class="text-dark">{{ getCategoryGrandTotal(categoryRows) }}</td>
                                      <td v-for="col in headers" :key="col">
                                        {{ getColumnTotal(categoryRows, col) }}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Back to Homepage -->
      <div class="text-center mt-4">
        <router-link to="/" class="btn btn-secondary-custom" @click="handleLogout">
          <i class="fa-solid fa-house-chimney me-2"></i>Return to Homepage
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import * as XLSX from 'xlsx'

export default {
  setup() {
    // Authentication
    const isLoggedIn = ref(false)
    const username = ref("")
    const password = ref("")
    const loginError = ref(false)

    // File loading
    const fileLoaded = ref(false)
    const isDragging = ref(false)
    const fileName = ref("")
    const headers = ref([])
    const parsedRows = ref([])

    // Column choices for categorization
    const selectedDateCol = ref("")
    const selectedCategoryCol = ref("")
    const sortedGroups = ref({})

    const handleLogin = () => {
      if (username.value === "phoo" && password.value === "phoo") {
        isLoggedIn.value = true
        loginError.value = false
        username.value = ""
        password.value = ""
      } else {
        loginError.value = true
      }
    }

    const handleLogout = () => {
      isLoggedIn.value = false
      resetFile()
    }

    // Drag-drop Excel processing
    const dragOver = () => {
      isDragging.value = true
    }
    
    const dragLeave = () => {
      isDragging.value = false
    }

    const triggerFileInput = () => {
      const el = document.getElementById("fileInput")
      if (el) el.click()
    }

    const handleFileSelect = (e) => {
      const files = e.target.files
      if (files.length > 0) {
        processFile(files[0])
      }
    }

    const handleFileDrop = (e) => {
      isDragging.value = false
      const files = e.dataTransfer.files
      if (files.length > 0) {
        processFile(files[0])
      }
    }

    const processFile = (file) => {
      fileName.value = file.name
      const reader = new FileReader()
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result)
        const workbook = XLSX.read(data, { type: 'array', cellNF: true, cellText: true })
        const firstSheetName = workbook.SheetNames[0]
        const worksheet = workbook.Sheets[firstSheetName]
        
        if (!worksheet || !worksheet['!ref']) {
          resetFile()
          return
        }

        const range = XLSX.utils.decode_range(worksheet['!ref'])
        const startRow = range.s.r
        const endRow = range.e.r
        const startCol = range.s.c
        const endCol = range.e.c

        // Parse headers
        const headerNames = []
        for (let C = startCol; C <= endCol; ++C) {
          const cellRef = XLSX.utils.encode_cell({ r: startRow, c: C })
          const cell = worksheet[cellRef]
          headerNames.push(cell && cell.w ? cell.w.trim() : (cell && cell.v ? String(cell.v).trim() : `Column_${C + 1}`))
        }
        headers.value = headerNames

        // Parse data rows (accounting for empty rows)
        const filtered = []
        for (let R = startRow + 1; R <= endRow; ++R) {
          const rowObj = {}
          let isRowEmpty = true

          for (let C = startCol; C <= endCol; ++C) {
            const cellRef = XLSX.utils.encode_cell({ r: R, c: C })
            const cell = worksheet[cellRef]
            const val = cell && cell.w !== undefined ? cell.w : (cell && cell.v !== undefined ? String(cell.v) : "")
            const header = headerNames[C - startCol]
            rowObj[header] = val
            
            if (String(val).trim() !== "") {
              isRowEmpty = false
            }
          }

          if (!isRowEmpty) {
            rowObj._excelRowNum = R + 1
            filtered.push(rowObj)
          }
        }

        if (filtered.length > 0) {
          parsedRows.value = filtered
          fileLoaded.value = true
          
          // Auto-detect columns
          const dateMatch = headers.value.find(col => /date|time/i.test(col))
          const catMatch = headers.value.find(col => /category|type|department|division|account|class/i.test(col))
          
          selectedDateCol.value = dateMatch || (headers.value.length > 0 ? headers.value[0] : "")
          selectedCategoryCol.value = catMatch || (headers.value.length > 1 ? headers.value[1] : "")
          
          processSorting()
        }
      }
      reader.readAsArrayBuffer(file)
    }

    const resetFile = () => {
      fileLoaded.value = false
      fileName.value = ""
      headers.value = []
      parsedRows.value = []
      selectedDateCol.value = ""
      selectedCategoryCol.value = ""
      sortedGroups.value = {}
    }

    // ── Grouping & Sorting Algorithm (Month first, Category second) ──
    const processSorting = () => {
      if (!selectedDateCol.value || !selectedCategoryCol.value || parsedRows.value.length === 0) {
        sortedGroups.value = {}
        return
      }

      const groups = {}

      parsedRows.value.forEach(row => {
        const rawDate = String(row[selectedDateCol.value]).trim()
        const rawCategory = String(row[selectedCategoryCol.value]).trim() || "Uncategorized"
        
        let monthName = "No Date / Invalid"
        
        // Parse date using our smart parseExcelDate helper
        const parseExcelDate = (val) => {
          const str = String(val).trim();
          if (!str) return null;

          // 1. Try standard JS parsing first
          let parsed = Date.parse(str);
          
          // 2. If it's a 2-digit year with dashes like "1-Jun-26", check and format it
          const dashMatch = str.match(/^(\d{1,2})[-/]([A-Za-z]{3,9})[-/](\d{2,4})$/);
          if (dashMatch) {
            const day = parseInt(dashMatch[1]);
            const monthStr = dashMatch[2];
            let year = parseInt(dashMatch[3]);
            if (year < 100) {
              year += 2000;
            }
            const date = new Date(`${monthStr} ${day}, ${year}`);
            if (!isNaN(date.getTime())) {
              return date;
            }
          }

          // 3. Match numeric date formats like "1/6/26" or "01-06-26"
          const numericMatch = str.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{2,4})$/);
          if (numericMatch) {
            const dayOrMonth1 = parseInt(numericMatch[1]);
            const monthOrDay2 = parseInt(numericMatch[2]);
            let year = parseInt(numericMatch[3]);
            if (year < 100) {
              year += 2000;
            }
            
            let date = new Date(year, monthOrDay2 - 1, dayOrMonth1);
            if (!isNaN(date.getTime())) {
              return date;
            }
          }

          if (!isNaN(parsed)) {
            let date = new Date(parsed);
            if (date.getFullYear() < 2000 && date.getFullYear() >= 1900 && str.includes("-26")) {
              date.setFullYear(date.getFullYear() + 100);
            }
            return date;
          }

          return null;
        };

        const dateObj = parseExcelDate(rawDate)
        if (dateObj) {
          const year = dateObj.getFullYear()
          const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
          monthName = `${months[dateObj.getMonth()]} ${year}`
        }

        // Initialize Month Group
        if (!groups[monthName]) {
          groups[monthName] = {}
        }

        // Initialize Category Group inside Month
        if (!groups[monthName][rawCategory]) {
          groups[monthName][rawCategory] = []
        }

        // Push Row to Group
        groups[monthName][rawCategory].push(row)
      })

      // Sort the month groups chronologically if possible
      const sortedKeys = Object.keys(groups).sort((a, b) => {
        if (a === "No Date / Invalid") return 1 // push invalid to end
        if (b === "No Date / Invalid") return -1
        
        const dateA = Date.parse(a)
        const dateB = Date.parse(b)
        
        if (isNaN(dateA) || isNaN(dateB)) return a.localeCompare(b)
        return dateA - dateB
      })

      const finalSorted = {}
      sortedKeys.forEach(monthKey => {
        // Also sort category keys alphabetically
        const catKeys = Object.keys(groups[monthKey]).sort()
        finalSorted[monthKey] = {}
        catKeys.forEach(catKey => {
          finalSorted[monthKey][catKey] = groups[monthKey][catKey]
        })
      })

      sortedGroups.value = finalSorted
    }

    const hasSortedData = computed(() => {
      return Object.keys(sortedGroups.value).length > 0
    })

    const getMonthRowCount = (monthData) => {
      let count = 0
      Object.keys(monthData).forEach(cat => {
        count += monthData[cat].length
      })
      return count
    }

    // ── Export Sorted sheets workbook ──
    const downloadMultiSheetExcel = () => {
      if (!hasSortedData.value) return

      const workbook = XLSX.utils.book_new()

      Object.keys(sortedGroups.value).forEach(monthName => {
        // Clean sheet name: SheetJS worksheets limit tab names to 31 chars and no specific symbols like : , ? * / \
        let sheetName = monthName.replace(/[\\/?*:[\]]/g, "").substring(0, 30)
        
        const sheetRows = []
        
        Object.keys(sortedGroups.value[monthName]).forEach(catName => {
          sortedGroups.value[monthName][catName].forEach(row => {
            const rowCopy = { ...row }
            const exportRow = {}
            headers.value.forEach(h => {
              exportRow[h] = rowCopy[h]
            })
            sheetRows.push(exportRow)
          })
        })

        const worksheet = XLSX.utils.json_to_sheet(sheetRows)
        XLSX.utils.book_append_sheet(workbook, worksheet, sheetName)
      })

      XLSX.writeFile(workbook, `Sorted_Ledger_Report.xlsx`)
    }
    const nonSummableColumns = ['date', 'account', 'person', 'description', 'ex rate', 'exrate', 'ex-rate', 'rate', 'id', 'sr', 'no', 's.no'];
    const shouldSumColumn = (col) => {
      const c = String(col).toLowerCase().trim();
      return !nonSummableColumns.some(ex => c.includes(ex) || ex.includes(c));
    };

    const getColumnTotal = (categoryRows, col) => {
      if (!shouldSumColumn(col)) return '';
      
      let hasNumber = false;
      let total = 0;
      for (const row of categoryRows) {
        const val = row[col];
        if (val !== undefined && val !== null && val !== '') {
          const parsed = parseFloat(String(val).replace(/,/g, ''));
          if (!isNaN(parsed)) {
            hasNumber = true;
            total += parsed;
          }
        }
      }
      
      if (!hasNumber) return '';
      return total.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });
    };

    const getCategoryGrandTotal = (categoryRows) => {
      let grandTotal = 0;
      let hasAmounts = false;
      
      const sumCols = headers.value.filter(col => shouldSumColumn(col));
      
      for (const row of categoryRows) {
        for (const col of sumCols) {
          const val = row[col];
          if (val !== undefined && val !== null && val !== '') {
            const parsed = parseFloat(String(val).replace(/,/g, ''));
            if (!isNaN(parsed)) {
              hasAmounts = true;
              grandTotal += parsed;
            }
          }
        }
      }
      
      if (!hasAmounts) return 'Total';
      return `Total (${grandTotal.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })})`;
    };

    return {
      getColumnTotal,
      getCategoryGrandTotal,
      isLoggedIn,
      username,
      password,
      loginError,
      handleLogin,
      handleLogout,
      fileLoaded,
      isDragging,
      fileName,
      headers,
      parsedRows,
      selectedDateCol,
      selectedCategoryCol,
      sortedGroups,
      dragOver,
      dragLeave,
      triggerFileInput,
      handleFileSelect,
      handleFileDrop,
      processSorting,
      hasSortedData,
      getMonthRowCount,
      downloadMultiSheetExcel
    }
  }
}
</script>

<style scoped>
.phoo-portal-page {
  background-color: #f8fafc;
  color: #334155;
  min-height: 70vh;
  padding: 30px 0;
  font-family: 'Outfit', sans-serif;
}

.tool-title {
  color: #0f172a;
  font-weight: 800;
  font-size: 2.2rem;
}

.tool-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
  overflow: hidden;
}

.card-header-tool {
  background: #f8fafc;
  padding: 16px 20px;
  border-bottom: 1px solid #e2e8f0;
}

.login-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02);
}

.login-logo {
  width: 90px;
  height: auto;
}

.input-group-text {
  border-color: #cbd5e1;
  color: #64748b;
}

.cyber-input-field {
  border-color: #cbd5e1;
  color: #0f172a;
  font-weight: 500;
}

.cyber-input-field:focus {
  border-color: #0045b6;
  box-shadow: 0 0 0 3px rgba(0, 69, 182, 0.15);
  color: #0f172a;
}

.input-group:focus-within .input-group-text {
  border-color: #0045b6;
  color: #0045b6;
}

.logout-btn {
  font-size: 0.8rem;
  font-weight: 600;
}

/* Upload Area */
.upload-bay {
  border: 2px dashed #cbd5e1;
  background: #f8fafc;
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;
}

.upload-bay:hover, .upload-bay.drag-active {
  border-color: #0045b6;
  background: rgba(0, 69, 182, 0.02);
}

.upload-icon-wrap i {
  color: #0045b6;
}

/* Checkbox Column Grid */
.column-selection-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

/* Results panel */
.results-panel {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

.bg-warning-light {
  background-color: #fffbeb;
}

.border-warning-light {
  border: 1px solid #fef3c7;
  border-radius: 6px;
}

.bg-danger-light {
  background-color: #fef2f2;
}

.border-danger-light {
  border: 1px solid #fee2e2;
  border-radius: 6px;
}

/* Table wrap */
.table-wrap {
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
}

.table-wrap table {
  margin-bottom: 0;
}

.table-wrap th {
  background-color: #f8fafc;
  color: #1e293b;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 10px 14px;
}

.table-wrap td {
  font-size: 0.9rem;
  vertical-align: middle;
  padding: 10px 14px;
  color: #0f172a;
}

.bg-light-blue {
  background-color: rgba(0, 69, 182, 0.03) !important;
}

/* Custom Buttons */
.btn-primary-custom {
  background: #0045b6;
  border-color: #0045b6;
  color: #ffffff;
  font-weight: 600;
}

.btn-primary-custom:hover {
  background: #002d7a;
  border-color: #002d7a;
  color: #ffffff;
}

.btn-secondary-custom {
  background: #e2e8f0;
  border-color: #e2e8f0;
  color: #334155;
  font-weight: 600;
  padding: 10px 24px;
  border-radius: 6px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s ease;
}

.btn-secondary-custom:hover {
  background: #cbd5e1;
  color: #1e293b;
}

.border-slate {
  border: 1px solid #cbd5e1;
}

.border-slate:focus {
  border-color: #0045b6;
  box-shadow: 0 0 0 3px rgba(0, 69, 182, 0.15);
}

/* Accordion customization */
.accordion-button:not(.collapsed) {
  background-color: rgba(0, 69, 182, 0.06);
  color: #0045b6;
}

.accordion-button:focus {
  border-color: #cbd5e1;
  box-shadow: 0 0 0 0.25rem rgba(0, 69, 182, 0.15);
}
</style>
