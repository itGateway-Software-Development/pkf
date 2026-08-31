<template>
  <div class="duplication-page">
    <div class="container pt-3 pb-5">
      <!-- Header (Hidden when on login screen to keep it clean) -->
      <div v-if="isLoggedIn" class="tool-header text-center mb-4">
        <h1 class="tool-title mb-2">Audit Verification Suite</h1>
        <p class="text-muted">Gated tools for duplicate testing. More tools will be coming soon.</p>
      </div>

      <!-- Login Screen -->
      <div v-if="!isLoggedIn" class="row justify-content-center align-items-center" style="min-height: 60vh;">
        <div class="col-md-6 col-lg-5">
          <div class="login-card p-4 p-md-5">
            <div class="text-center mb-4">
              <img src="../assets/images/logo.png" alt="PKF Logo" class="login-logo mb-3" />
              <h4 class="text-dark fw-bold mb-1">Authorized Access</h4>
              <p class="text-muted small">Please authenticate to access the duplication mainframe.</p>
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

      <!-- Gated Workspace -->
      <div v-else class="row justify-content-center">


        <div class="col-lg-12">
          <div class="tool-card">
            <!-- Header bar -->
            <div class="card-header-tool d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <i class="fa-solid fa-clone me-2 text-primary"></i>
                <span class="fw-bold text-dark">Deduplication Tool</span>
              </div>
              <button class="btn btn-sm btn-outline-secondary logout-btn" @click="handleLogout">
                <i class="fa-solid fa-right-from-bracket me-1"></i>Logout
              </button>
            </div>
            
            <div class="card-body-tool p-4">
              <!-- Upload Area (Shown when no file uploaded yet) -->
              <div v-if="!fileLoaded" class="upload-bay text-center p-5" 
                   @dragover.prevent="dragOver" 
                   @dragleave="dragLeave" 
                   @drop.prevent="handleFileDrop"
                   :class="{ 'drag-active': isDragging }">
                <input type="file" id="fileInput" ref="fileInput" accept=".xlsx, .xls, .csv" class="d-none" @change="handleFileSelect" />
                <div class="upload-icon-wrap mb-4">
                  <i class="fa-solid fa-file-excel text-success fa-3x"></i>
                </div>
                <h4 class="text-dark text-center">Drag & Drop Excel or CSV File Here</h4>
                <p class="text-muted text-center">Supports .xlsx, .xls, and .csv formats</p>
                <button class="btn btn-primary-custom mt-3" @click="triggerFileInput">
                  <i class="fa-solid fa-folder-open me-2"></i>Browse Files
                </button>
              </div>

              <!-- Main Tool Panels (File is Loaded) -->
              <div v-else>
                <!-- File Stats & Close area -->
                <div class="file-info-header d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                  <div>
                    <h5 class="text-dark mb-1"><i class="fa-solid fa-file-csv text-success me-2"></i>{{ fileName }}</h5>
                    <span class="badge bg-secondary">{{ parsedRows.length }} Entries Found</span>
                  </div>
                  <button class="btn btn-outline-danger" @click="resetFile">
                    <i class="fa-solid fa-trash-can me-2"></i>Remove File
                  </button>
                </div>

                <!-- 1. DEDUPLICATION PANELS -->
                <div>
                  <!-- Column Checkbox Selector -->
                  <div class="column-selection-box p-4 mb-4">
                    <h6 class="text-dark fw-bold mb-3"><i class="fa-solid fa-circle-nodes me-2"></i>Select Duplication Criteria Columns</h6>
                    <p class="text-muted small mb-3">Rows will be flagged as duplicates if the selected columns contain identical values.</p>
                    
                    <div class="column-checkboxes-grid">
                      <label v-for="col in headers" :key="col" class="column-chip" :class="{ active: selectedCols.includes(col) }">
                        <input type="checkbox" :value="col" v-model="selectedCols" @change="analyzeDuplicates" />
                        {{ col }}
                      </label>
                    </div>
                  </div>

                  <!-- Duplication Results Panel -->
                  <div class="results-panel p-4">
                    <div class="results-summary d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                      <div>
                        <h6 class="text-dark fw-bold mb-1"><i class="fa-solid fa-chart-simple me-2"></i>Detection Results</h6>
                        <span class="text-muted small">Checked against {{ selectedCols.length }} columns</span>
                      </div>
                      
                      <div class="d-flex gap-2">
                        <button v-if="duplicateCount > 0" class="btn btn-success btn-sm d-flex align-items-center" @click="downloadCleanFile">
                          <i class="fa-solid fa-file-shield me-2"></i>Download Clean File
                        </button>
                        <button v-if="duplicateCount > 0" class="btn btn-outline-primary btn-sm d-flex align-items-center" @click="downloadDuplicatesOnly">
                          <i class="fa-solid fa-file-export me-2"></i>Export Duplicates
                        </button>
                      </div>
                    </div>

                    <!-- No Columns Selected -->
                    <div v-if="selectedCols.length === 0" class="text-center p-4 text-warning bg-warning-light border-warning-light">
                      <i class="fa-solid fa-circle-exclamation fa-2x mb-2 text-warning"></i>
                      <p class="mb-0 fw-bold">Please select at least one column above to perform duplication checks.</p>
                    </div>

                    <!-- Clean File (No Duplicates Found) -->
                    <div v-else-if="duplicateCount === 0" class="text-center p-4 text-success bg-success-light border-success-light">
                      <i class="fa-solid fa-circle-check fa-2x mb-2 text-success"></i>
                      <p class="mb-0 fw-bold">No duplicated entries detected in this configuration.</p>
                    </div>

                    <!-- Duplicates Found -->
                    <div v-else>
                      <div class="alert alert-danger border-danger-light bg-danger-light text-danger-custom d-flex align-items-center gap-3 mb-4">
                        <i class="fa-solid fa-triangle-exclamation fa-2x text-danger"></i>
                        <div>
                          <h6 class="mb-0 fw-bold text-danger">Duplicated Entries Flagged</h6>
                          <p class="mb-0 small text-danger-secondary">Found {{ duplicateCount }} duplicate entries across {{ duplicatesGrouped.length }} groups.</p>
                        </div>
                      </div>

                      <div class="mb-3">
                        <input type="text" v-model="searchQuery" class="form-control table-search-input" placeholder="Filter duplicate table rows..." />
                      </div>

                      <div class="table-responsive table-wrap">
                        <table class="table table-bordered table-hover mb-0">
                          <thead class="table-light">
                            <tr>
                              <th scope="col" style="width: 180px;">Cell Address(es)</th>
                              <th v-for="col in selectedCols" :key="col" scope="col">{{ col }}</th>
                              <th v-for="col in otherHeaders" :key="col" scope="col" class="text-muted">{{ col }}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <template v-for="(group, gIdx) in filteredDuplicateGroups" :key="gIdx">
                              <tr v-for="(row, rIdx) in group.rows" :key="rIdx" :class="{ 'group-start': rIdx === 0 }">
                                <td>
                                  <div class="d-flex align-items-center flex-wrap gap-1">
                                    <span v-if="rIdx === 0" class="badge bg-danger text-white m-0">G{{ gIdx + 1 }}</span>
                                    <span class="badge bg-secondary m-0">{{ getCellCoordinatesString(group.originalIndices[rIdx]) }}</span>
                                  </div>
                                </td>
                                <td v-for="col in selectedCols" :key="col" class="text-danger fw-bold bg-danger-cell">
                                  {{ row[col] }}
                                </td>
                                <td v-for="col in otherHeaders" :key="col" class="text-muted">
                                  {{ row[col] }}
                                </td>
                              </tr>
                            </template>
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

      <!-- Return to homepage button -->
      <div class="text-center mt-4">
        <router-link to="/" class="btn btn-secondary-custom" @click="handleLogout">
          <i class="fa-solid fa-house-chimney me-2"></i>Return to Homepage
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import * as XLSX from 'xlsx'

export default {
  setup() {
    // Auth variables (Session-only in memory)
    const isLoggedIn = ref(false)
    const username = ref("")
    const password = ref("")
    const loginError = ref(false)

    // Excel Parsing variables
    const fileLoaded = ref(false)
    const isDragging = ref(false)
    const fileName = ref("")
    const headers = ref([])
    const parsedRows = ref([])
    const selectedCols = ref([])
    const duplicateCount = ref(0)
    const duplicatesGrouped = ref([])
    const searchQuery = ref("")



    // Auth methods
    const handleLogin = () => {
      if (username.value === "pkfmm2026" && password.value === "pkfmm2026") {
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

    // Drag-Drop methods
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

        // 1. Parse headers from the first row (startRow)
        const headerNames = []
        for (let C = startCol; C <= endCol; ++C) {
          const cellRef = XLSX.utils.encode_cell({ r: startRow, c: C })
          const cell = worksheet[cellRef]
          headerNames.push(cell && cell.w ? cell.w.trim() : (cell && cell.v ? String(cell.v).trim() : `Column_${C + 1}`))
        }
        headers.value = headerNames

        // 2. Parse data rows manually by checking absolute coordinates
        const filtered = []
        for (let R = startRow + 1; R <= endRow; ++R) {
          const rowObj = {}
          let isRowEmpty = true

          for (let C = startCol; C <= endCol; ++C) {
            const cellRef = XLSX.utils.encode_cell({ r: R, c: C })
            const cell = worksheet[cellRef]
            
            // Get formatted value if raw is false, else raw value
            const val = cell && cell.w !== undefined ? cell.w : (cell && cell.v !== undefined ? String(cell.v) : "")
            const header = headerNames[C - startCol]
            rowObj[header] = val
            
            if (String(val).trim() !== "") {
              isRowEmpty = false
            }
          }

          if (!isRowEmpty) {
            rowObj._excelRowNum = R + 1 // Excel row numbers are 1-based (R=0 is row 1)
            filtered.push(rowObj)
          }
        }

        if (filtered.length > 0) {
          parsedRows.value = filtered
          fileLoaded.value = true
          
          if (headers.value.length > 0) {
            selectedCols.value = [headers.value[0]]
            analyzeDuplicates()
            

          }
        }
      }
      reader.readAsArrayBuffer(file)
    }

    const normalizeValueForDupKey = (val) => {
      const trimmed = String(val !== undefined && val !== null ? val : '').trim();
      if (!trimmed) return '';
      
      // If it is a pure numeric value (like "450"), do not parse as date!
      if (/^\d+(\.\d+)?$/.test(trimmed)) {
        return trimmed.toLowerCase();
      }
      
      // Try to parse as date
      const parsedTime = Date.parse(trimmed);
      if (!isNaN(parsedTime)) {
        const dateObj = new Date(parsedTime);
        const year = dateObj.getFullYear();
        if (year >= 1900 && year <= 2100) {
          const yyyy = year;
          const mm = String(dateObj.getMonth() + 1).padStart(2, '0');
          const dd = String(dateObj.getDate()).padStart(2, '0');
          return `${yyyy}-${mm}-${dd}`;
        }
      }
      
      return trimmed.toLowerCase();
    }

    const analyzeDuplicates = () => {
      if (selectedCols.value.length === 0) {
        duplicatesGrouped.value = []
        duplicateCount.value = 0
        return
      }

      const groups = {}
      parsedRows.value.forEach((row, index) => {
        const key = selectedCols.value
          .map(col => normalizeValueForDupKey(row[col]))
          .join('|')
        
        if (!groups[key]) {
          groups[key] = {
            key,
            rows: [],
            indices: [],
            originalIndices: []
          }
        }
        groups[key].rows.push(row)
        groups[key].indices.push(row._excelRowNum)
        groups[key].originalIndices.push(index)
      })

      const dupGroups = []
      let dupCount = 0

      Object.keys(groups).forEach(key => {
        if (groups[key].rows.length > 1) {
          dupGroups.push({
            key,
            rows: groups[key].rows,
            indices: groups[key].indices,
            originalIndices: groups[key].originalIndices
          })
          dupCount += groups[key].rows.length
        }
      })

      duplicatesGrouped.value = dupGroups
      duplicateCount.value = dupCount
    }

    const otherHeaders = computed(() => {
      return headers.value.filter(col => !selectedCols.value.includes(col))
    })

    const filteredDuplicateGroups = computed(() => {
      if (!searchQuery.value) return duplicatesGrouped.value
      
      const query = searchQuery.value.toLowerCase().trim()
      return duplicatesGrouped.value.filter(group => {
        return group.rows.some(row => {
          return Object.values(row).some(val => String(val).toLowerCase().includes(query))
        })
      })
    })

    const resetFile = () => {
      fileLoaded.value = false
      fileName.value = ""
      headers.value = []
      parsedRows.value = []
      selectedCols.value = []
      duplicateCount.value = 0
      duplicatesGrouped.value = []
      searchQuery.value = ""

    }

    const downloadCleanFile = () => {
      const seen = new Set()
      const cleanRows = []

      parsedRows.value.forEach(row => {
        const key = selectedCols.value
          .map(col => normalizeValueForDupKey(row[col]))
          .join('|')
        
        if (!seen.has(key)) {
          seen.add(key)
          cleanRows.push(row)
        }
      })

      const worksheet = XLSX.utils.json_to_sheet(cleanRows)
      const workbook = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(workbook, worksheet, "Clean Data")
      XLSX.writeFile(workbook, "Deduplicated_File.xlsx")
    }

    const downloadDuplicatesOnly = () => {
      const dupRows = []
      duplicatesGrouped.value.forEach(group => {
        group.rows.forEach((row, i) => {
          dupRows.push({
            "Duplicate Group": group.indices.join(', '),
            "Occurrence": i + 1,
            ...row
          })
        })
      })

      const worksheet = XLSX.utils.json_to_sheet(dupRows)
      const workbook = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(workbook, worksheet, "Duplicates Report")
      XLSX.writeFile(workbook, "Duplicates_Report.xlsx")
    }



    const getCellCoordinatesString = (origIdx) => {
      if (selectedCols.value.length === 0) {
        return `Row ${origIdx + 2}`
      }
      return selectedCols.value.map(col => {
        const colIdx = headers.value.indexOf(col)
        if (colIdx === -1) return `${origIdx + 2}`
        
        let temp = colIdx
        let letter = ''
        while (temp >= 0) {
          letter = String.fromCharCode((temp % 26) + 65) + letter
          temp = Math.floor(temp / 26) - 1
        }
        return `${letter}${origIdx + 2}`
      }).join(', ')
    }

    return {
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
      selectedCols,
      duplicateCount,
      duplicatesGrouped,
      searchQuery,
      dragOver,
      dragLeave,
      triggerFileInput,
      handleFileSelect,
      handleFileDrop,
      analyzeDuplicates,
      otherHeaders,
      filteredDuplicateGroups,
      resetFile,
      downloadCleanFile,
      downloadDuplicatesOnly,
      
      // Excel Coordinates
      getCellCoordinatesString
    }
  }
}
</script>

<style scoped>
.duplication-page {
  background-color: #f8fafc;
  color: #334155;
  min-height: 70vh;
  padding: 30px 0;
  font-family: 'Aptos', sans-serif;
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

/* Tab Box & Pill Controls */
.tab-pill-box {
  border: 1px solid #e2e8f0;
  background-color: #e2e8f0 !important;
}

.btn-tab {
  border: none;
  background: transparent;
  color: #64748b;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.btn-tab.active {
  background: #0045b6 !important;
  color: #ffffff !important;
  box-shadow: 0 4px 6px -1px rgba(0, 69, 182, 0.2);
}

/* Login Card & Fields */
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
  color: #10b981;
}

/* Checkbox Column Grid */
.column-selection-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

.column-checkboxes-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.column-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  padding: 6px 14px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  user-select: none;
  color: #334155;
}

.column-chip input {
  cursor: pointer;
}

.column-chip:hover {
  background: #f1f5f9;
  border-color: #94a3b8;
}

.column-chip.active {
  background: #0045b6;
  border-color: #0045b6;
  color: #ffffff;
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

.bg-success-light {
  background-color: #f0fdf4;
}

.border-success-light {
  border: 1px solid #dcfce7;
  border-radius: 6px;
}

.bg-danger-light {
  background-color: #fef2f2;
}

.border-danger-light {
  border: 1px solid #fee2e2;
  border-radius: 6px;
}

.text-danger-custom {
  color: #b91c1c;
}

.text-danger-secondary {
  color: #dc2626;
}

.bg-danger-cell {
  background-color: #fef2f2 !important;
}

/* Benford-specific styles */
.expected-line-marker {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2.5px;
  background-color: #dc2626;
  z-index: 2;
}

.progress-container {
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.075);
}

.border-info-light {
  border: 1px solid #bae6fd;
}

.bg-info-light {
  background-color: #f0f9ff;
}

.text-info-custom {
  color: #0369a1;
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
  font-size: 0.95rem;
  padding: 12px 16px;
}

.table-wrap td {
  font-size: 0.95rem;
  vertical-align: middle;
  padding: 12px 16px;
  color: #0f172a;
}

.table-wrap .badge {
  font-size: 0.85rem !important;
  padding: 6px 12px !important;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.table-wrap tr.group-start td {
  border-top: 2px solid #ef4444;
}

.table-search-input {
  border: 1px solid #cbd5e1;
  border-radius: 6px;
}

.table-search-input:focus {
  border-color: #0045b6;
  box-shadow: 0 0 0 3px rgba(0, 69, 182, 0.15);
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
</style>
