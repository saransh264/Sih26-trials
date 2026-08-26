// StatLearn AI App Logic (Frontend Client)

// 1. Initial State Definition
const APP_STATE = {
    user: {
        name: "Anjali Sharma",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop",
        currentRole: "Junior Statistical Officer",
        selectedTargetRole: "jso"
    },
    // Skill Level: 0 to 5
    competencies: {
        statistical: {
            "Survey Design & Sampling": { actual: 2, icon: "fa-solid fa-compass-drafting" },
            "National Account Statistics": { actual: 1, icon: "fa-solid fa-calculator" },
            "Price Statistics & CPI/WPI": { actual: 3, icon: "fa-solid fa-tags" },
            "Industrial Statistics (IIP)": { actual: 2, icon: "fa-solid fa-industry" },
            "SDG Indicators & Monitoring": { actual: 1, icon: "fa-solid fa-globe" }
        },
        technical: {
            "Python Programming": { actual: 3, icon: "fa-brands fa-python" },
            "R Programming": { actual: 2, icon: "fa-solid fa-registered" },
            "SQL & Database Queries": { actual: 4, icon: "fa-solid fa-database" },
            "Data Visualization & GIS": { actual: 2, icon: "fa-solid fa-map-location-dot" },
            "Machine Learning Models": { actual: 1, icon: "fa-solid fa-robot" }
        },
        governance: {
            "Cybersecurity & Data Privacy": { actual: 2, icon: "fa-solid fa-shield-halved" },
            "Digital Public Infrastructure": { actual: 3, icon: "fa-solid fa-network-wired" },
            "Government Cloud (MeghRaj)": { actual: 2, icon: "fa-solid fa-cloud" },
            "e-Office & Digital Workflows": { actual: 4, icon: "fa-solid fa-file-signature" }
        },
        behavioral: {
            "Leadership & Team Management": { actual: 2, icon: "fa-solid fa-users-gear" },
            "Communication & Report Writing": { actual: 4, icon: "fa-solid fa-file-lines" },
            "Project Management": { actual: 3, icon: "fa-solid fa-list-check" },
            "Ethical Coding & Data Standards": { actual: 4, icon: "fa-solid fa-circle-check" }
        }
    },
    // Role Requirements Profiles
    roleRequirements: {
        jso: {
            name: "Junior Statistical Officer (JSO)",
            requirements: {
                statistical: { "Survey Design & Sampling": 3, "National Account Statistics": 2, "Price Statistics & CPI/WPI": 3, "Industrial Statistics (IIP)": 3, "SDG Indicators & Monitoring": 2 },
                technical: { "Python Programming": 2, "R Programming": 2, "SQL & Database Queries": 3, "Data Visualization & GIS": 3, "Machine Learning Models": 1 },
                governance: { "Cybersecurity & Data Privacy": 2, "Digital Public Infrastructure": 2, "Government Cloud (MeghRaj)": 2, "e-Office & Digital Workflows": 3 },
                behavioral: { "Leadership & Team Management": 2, "Communication & Report Writing": 3, "Project Management": 2, "Ethical Coding & Data Standards": 3 }
            }
        },
        sso: {
            name: "Senior Statistical Officer (SSO)",
            requirements: {
                statistical: { "Survey Design & Sampling": 4, "National Account Statistics": 3, "Price Statistics & CPI/WPI": 4, "Industrial Statistics (IIP)": 4, "SDG Indicators & Monitoring": 3 },
                technical: { "Python Programming": 3, "R Programming": 3, "SQL & Database Queries": 4, "Data Visualization & GIS": 4, "Machine Learning Models": 2 },
                governance: { "Cybersecurity & Data Privacy": 3, "Digital Public Infrastructure": 3, "Government Cloud (MeghRaj)": 2, "e-Office & Digital Workflows": 4 },
                behavioral: { "Leadership & Team Management": 3, "Communication & Report Writing": 4, "Project Management": 3, "Ethical Coding & Data Standards": 4 }
            }
        },
        dd: {
            name: "Deputy Director (DD)",
            requirements: {
                statistical: { "Survey Design & Sampling": 4, "National Account Statistics": 4, "Price Statistics & CPI/WPI": 4, "Industrial Statistics (IIP)": 4, "SDG Indicators & Monitoring": 4 },
                technical: { "Python Programming": 3, "R Programming": 3, "SQL & Database Queries": 4, "Data Visualization & GIS": 4, "Machine Learning Models": 3 },
                governance: { "Cybersecurity & Data Privacy": 4, "Digital Public Infrastructure": 4, "Government Cloud (MeghRaj)": 3, "e-Office & Digital Workflows": 5 },
                behavioral: { "Leadership & Team Management": 4, "Communication & Report Writing": 4, "Project Management": 4, "Ethical Coding & Data Standards": 5 }
            }
        },
        dir: {
            name: "Director / DG (Official Statistics)",
            requirements: {
                statistical: { "Survey Design & Sampling": 5, "National Account Statistics": 5, "Price Statistics & CPI/WPI": 5, "Industrial Statistics (IIP)": 5, "SDG Indicators & Monitoring": 5 },
                technical: { "Python Programming": 4, "R Programming": 4, "SQL & Database Queries": 4, "Data Visualization & GIS": 5, "Machine Learning Models": 4 },
                governance: { "Cybersecurity & Data Privacy": 4, "Digital Public Infrastructure": 5, "Government Cloud (MeghRaj)": 4, "e-Office & Digital Workflows": 5 },
                behavioral: { "Leadership & Team Management": 5, "Communication & Report Writing": 5, "Project Management": 5, "Ethical Coding & Data Standards": 5 }
            }
        }
    },
    // iGOT Course Catalog
    courses: [
        {
            id: "igot_01",
            title: "Advanced Stratification & Household Sampling",
            provider: "NSSTA (National Statistical Systems Academy)",
            duration: "8 Hours",
            desc: "Master the theories and application of complex sample design, multi-stage stratification, sampling frame construction, and sample size allocation rules within MoSPI.",
            category: "statistical",
            skillTarget: "Survey Design & Sampling",
            gainAmount: 1,
            enrolled: false,
            completed: false,
            progress: 0
        },
        {
            id: "igot_02",
            title: "National Income Accounting & GVA Estimation",
            provider: "Ministry of Statistics (MoSPI)",
            duration: "12 Hours",
            desc: "Comprehensive study of calculations relating to GDP, GVA, Gross National Income, Input-Output Transactions, and Base Year Revision rules.",
            category: "statistical",
            skillTarget: "National Account Statistics",
            gainAmount: 2,
            enrolled: false,
            completed: false,
            progress: 0
        },
        {
            id: "igot_03",
            title: "CPI & WPI Computation Frameworks",
            provider: "CSO (Central Statistics Office)",
            duration: "6 Hours",
            desc: "Learn standard procedures for calculating Consumer Price Index (CPI) and Wholesale Price Index (WPI), price collection forms, and adjustment methods.",
            category: "statistical",
            skillTarget: "Price Statistics & CPI/WPI",
            gainAmount: 1,
            enrolled: false,
            completed: false,
            progress: 0
        },
        {
            id: "igot_04",
            title: "Python for Official Statistical Analysis",
            provider: "DIID (Data Informatics Division)",
            duration: "15 Hours",
            desc: "Beginner to advanced data manipulation, automated statistical reports, cleaning raw NSSO survey datasets, and regression modeling using Python.",
            category: "technical",
            skillTarget: "Python Programming",
            gainAmount: 2,
            enrolled: true,
            completed: false,
            progress: 45
        },
        {
            id: "igot_05",
            title: "R for Survey Data Processing & Visualization",
            provider: "iGOT Karmayogi Academy",
            duration: "10 Hours",
            desc: "Hands-on training utilizing the R programming language to parse massive data pools, construct graphs, and build predictive statistical plots.",
            category: "technical",
            skillTarget: "R Programming",
            gainAmount: 1,
            enrolled: false,
            completed: false,
            progress: 0
        },
        {
            id: "igot_06",
            title: "Security and Privacy Standards in GovTech",
            provider: "NIC & Cybersecurity Cell",
            duration: "5 Hours",
            desc: "Essential guidelines regarding cybersecurity protocols, secure API integrations, protecting survey respondent identity, and compliance rules.",
            category: "governance",
            skillTarget: "Cybersecurity & Data Privacy",
            gainAmount: 1,
            enrolled: true,
            completed: false,
            progress: 80
        },
        {
            id: "igot_07",
            title: "Strategic Project Management in Government Agencies",
            provider: "ISTM (Institute of Secretariat Training)",
            duration: "10 Hours",
            desc: "Managing infrastructure projects, scheduling milestones, procurement under GeM portal, and optimizing team deliverables.",
            category: "behavioral",
            skillTarget: "Project Management",
            gainAmount: 1,
            enrolled: false,
            completed: true,
            progress: 100
        }
    ]
};

// Global variables for active charts
let dashboardChart = null;
let profileChart = null;
let adminBarChartObj = null;
let adminDoughnutChartObj = null;

// Global variables for active quiz state
let activeQuizQuestions = [];
let currentQuestionIndex = 0;
let selectedOptionIndex = null;
let quizScore = 0;
let quizTimeStart = null;
let activeQuizKey = null;

// 2. Tab Switching Logic
function initTabNavigation() {
    const menuItems = document.querySelectorAll('.menu-item');
    const tabContents = document.querySelectorAll('.tab-content');

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active classes
            menuItems.forEach(i => i.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));
            
            // Add active class
            this.classList.add('active');
            const targetTab = this.getAttribute('data-tab');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
            
            // Re-render relevant charts when page switches to ensure clean layouts
            if (targetTab === 'dashboard') {
                renderDashboardRadarChart();
            } else if (targetTab === 'profile') {
                renderProfileRadarChart();
                renderSkillsList("statistical");
            } else if (targetTab === 'admin') {
                renderAdminCharts();
            }
        });
    });

    // Dashboard "View Full Matrix" redirection link
    document.getElementById('view-profile-btn').addEventListener('click', () => {
        const profileMenu = document.querySelector('[data-tab="profile"]');
        profileMenu.click();
    });
}

// 3. Dropdown Target Role Selector Logic
function initRoleSelector() {
    const roleSelect = document.getElementById('role-select');
    
    roleSelect.addEventListener('change', function() {
        APP_STATE.user.selectedTargetRole = this.value;
        const roleData = APP_STATE.roleRequirements[this.value];
        
        // Update layouts
        document.getElementById('user-display-role').innerText = `Target: ${roleData.name}`;
        
        // Recalculate gap percentages and redraw charts
        updateOverallCompetencyMetrics();
        renderDashboardRadarChart();
        
        // If profile tab is active, refresh it
        if (document.getElementById('profile-tab').classList.contains('active')) {
            renderProfileRadarChart();
            const activeCatTab = document.querySelector('.category-tab-btn.active');
            if (activeCatTab) {
                renderSkillsList(activeCatTab.getAttribute('data-category'));
            }
        }
        
        // Refresh iGOT course list recommendation badges
        renderiGOTCourses();
    });
    
    // Set initial display
    roleSelect.value = APP_STATE.user.selectedTargetRole;
    document.getElementById('user-display-role').innerText = `Target: ${APP_STATE.roleRequirements[roleSelect.value].name}`;
}

// 4. Competency & Gap Calculation Core
function getCategoryAverage(category, type = 'actual') {
    const skills = APP_STATE.competencies[category];
    const targetRole = APP_STATE.user.selectedTargetRole;
    const reqs = APP_STATE.roleRequirements[targetRole].requirements[category];
    
    let sum = 0;
    let count = 0;
    
    for (let skillName in skills) {
        if (type === 'actual') {
            sum += skills[skillName].actual;
        } else {
            sum += reqs[skillName] || 0;
        }
        count++;
    }
    return count > 0 ? (sum / count) : 0;
}

function updateOverallCompetencyMetrics() {
    const targetRole = APP_STATE.user.selectedTargetRole;
    const reqs = APP_STATE.roleRequirements[targetRole].requirements;
    
    let totalActual = 0;
    let totalRequired = 0;
    let gapsCount = 0;
    let criticalGapsCount = 0;
    
    for (let category in APP_STATE.competencies) {
        const skills = APP_STATE.competencies[category];
        const categoryReqs = reqs[category];
        
        for (let skillName in skills) {
            const actual = skills[skillName].actual;
            const required = categoryReqs[skillName] || 0;
            
            totalActual += Math.min(actual, required);
            totalRequired += required;
            
            if (actual < required) {
                gapsCount++;
                if (required - actual >= 2) {
                    criticalGapsCount++;
                }
            }
        }
    }
    
    const percentage = totalRequired > 0 ? Math.round((totalActual / totalRequired) * 100) : 100;
    
    document.getElementById('overall-match-percent').innerText = `${percentage}%`;
    document.getElementById('overall-match-bar').style.width = `${percentage}%`;
    document.getElementById('gap-count').innerText = `${gapsCount} Skills`;
    
    const urgentTxt = document.getElementById('urgent-gap-txt');
    if (criticalGapsCount > 0) {
        urgentTxt.innerText = `${criticalGapsCount} Critical Deficits`;
        urgentTxt.className = "stat-sub text-danger";
    } else {
        urgentTxt.innerText = "All gaps moderate";
        urgentTxt.className = "stat-sub text-success";
    }
}

// 5. Chart.js Render Functions
function renderDashboardRadarChart() {
    const ctx = document.getElementById('dashboardRadarChart').getContext('2d');
    const categories = ['statistical', 'technical', 'governance', 'behavioral'];
    const labels = ['Statistical', 'Technical', 'Digital Governance', 'Managerial'];
    
    const actualData = categories.map(cat => getCategoryAverage(cat, 'actual').toFixed(1));
    const requiredData = categories.map(cat => getCategoryAverage(cat, 'required').toFixed(1));
    
    if (dashboardChart) {
        dashboardChart.destroy();
    }
    
    dashboardChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'My Competency',
                    data: actualData,
                    backgroundColor: 'rgba(99, 102, 241, 0.2)',
                    borderColor: '#6366f1',
                    pointBackgroundColor: '#6366f1',
                    pointBorderColor: '#fff',
                    borderWidth: 2
                },
                {
                    label: 'Required Profile',
                    data: requiredData,
                    backgroundColor: 'rgba(56, 189, 248, 0.15)',
                    borderColor: '#38bdf8',
                    pointBackgroundColor: '#38bdf8',
                    borderWidth: 2,
                    borderDash: [5, 5]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { color: '#f8fafc', font: { family: 'Outfit', size: 12 } }
                }
            },
            scales: {
                r: {
                    grid: { color: 'rgba(255, 255, 255, 0.08)' },
                    angleLines: { color: 'rgba(255, 255, 255, 0.08)' },
                    pointLabels: { color: '#94a3b8', font: { family: 'Outfit', size: 11 } },
                    ticks: {
                        backdropColor: 'transparent',
                        color: '#64748b',
                        stepSize: 1
                    },
                    min: 0,
                    max: 5
                }
            }
        }
    });
}

function renderProfileRadarChart() {
    const ctx = document.getElementById('profileRadarChart');
    if (!ctx) return;
    
    const activeCategory = document.querySelector('.category-tab-btn.active').getAttribute('data-category');
    const skills = APP_STATE.competencies[activeCategory];
    const targetRole = APP_STATE.user.selectedTargetRole;
    const reqs = APP_STATE.roleRequirements[targetRole].requirements[activeCategory];
    
    const labels = Object.keys(skills);
    const actualData = labels.map(skill => skills[skill].actual);
    const requiredData = labels.map(skill => reqs[skill] || 0);
    
    if (profileChart) {
        profileChart.destroy();
    }
    
    profileChart = new Chart(ctx.getContext('2d'), {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Actual Rating',
                    data: actualData,
                    backgroundColor: 'rgba(168, 85, 247, 0.2)',
                    borderColor: '#a855f7',
                    pointBackgroundColor: '#a855f7',
                    borderWidth: 2
                },
                {
                    label: 'Required Rating',
                    data: requiredData,
                    backgroundColor: 'rgba(56, 189, 248, 0.15)',
                    borderColor: '#38bdf8',
                    pointBackgroundColor: '#38bdf8',
                    borderWidth: 2,
                    borderDash: [4, 4]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { color: '#f8fafc', font: { family: 'Outfit', size: 12 } }
                }
            },
            scales: {
                r: {
                    grid: { color: 'rgba(255, 255, 255, 0.08)' },
                    angleLines: { color: 'rgba(255, 255, 255, 0.08)' },
                    pointLabels: { color: '#94a3b8', font: { family: 'Outfit', size: 10 } },
                    ticks: {
                        backdropColor: 'transparent',
                        color: '#64748b',
                        stepSize: 1
                    },
                    min: 0,
                    max: 5
                }
            }
        }
    });
}

function renderAdminCharts() {
    const barCtx = document.getElementById('adminBarChart');
    const doughnutCtx = document.getElementById('adminDoughnutChart');
    if (!barCtx || !doughnutCtx) return;
    
    if (adminBarChartObj) adminBarChartObj.destroy();
    if (adminDoughnutChartObj) adminDoughnutChartObj.destroy();
    
    adminBarChartObj = new Chart(barCtx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['CSO (Central Stats)', 'FOD (Field Operations)', 'DIID (Data Informatics)', 'NAD (National Accounts)', 'SSD (Social Stats)'],
            datasets: [
                {
                    label: 'Average Competency Match (%)',
                    data: [78, 65, 82, 70, 74],
                    backgroundColor: ['#6366f1', '#38bdf8', '#a855f7', '#34d399', '#fb923c'],
                    borderRadius: 8,
                    borderWidth: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: {
                    grid: { color: 'rgba(255, 255, 255, 0.06)' },
                    ticks: { color: '#94a3b8' },
                    min: 0,
                    max: 100
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#94a3b8', font: { size: 10 } }
                }
            }
        }
    });
    
    adminDoughnutChartObj = new Chart(doughnutCtx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['Data Science & AI', 'Advanced Survey Sampling', 'GDP Double Deflation', 'Cybersecurity', 'Cloud Infrastructure'],
            datasets: [
                {
                    data: [34, 25, 18, 13, 10],
                    backgroundColor: ['#f87171', '#fb923c', '#a855f7', '#38bdf8', '#34d399'],
                    borderWidth: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: { color: '#94a3b8', font: { family: 'Outfit', size: 11 } }
                }
            }
        }
    });
}

// 6. Profile Tab Lists
function renderSkillsList(category) {
    const skillsList = document.getElementById('skills-list');
    if (!skillsList) return;
    
    skillsList.innerHTML = "";
    
    const skills = APP_STATE.competencies[category];
    const targetRole = APP_STATE.user.selectedTargetRole;
    const reqs = APP_STATE.roleRequirements[targetRole].requirements[category];
    
    const diagnosticList = document.getElementById('gap-diagnostic-list');
    diagnosticList.innerHTML = "";
    
    let gapCount = 0;
    
    for (let skillName in skills) {
        const actual = skills[skillName].actual;
        const required = reqs[skillName] || 0;
        const gap = required - actual;
        
        let gapHTML = "";
        let gapClass = "skill-gap-match";
        let diagnosticHTML = "";
        
        if (gap <= 0) {
            gapHTML = `<span class="skill-gap-indicator ${gapClass}"><i class="fa-solid fa-check"></i> Proficient</span>`;
        } else {
            gapCount++;
            gapClass = gap >= 2 ? "skill-gap-deficit text-danger" : "skill-gap-deficit";
            gapHTML = `<span class="skill-gap-indicator ${gapClass}"><i class="fa-solid fa-triangle-exclamation"></i> Gap (-${gap})</span>`;
            
            const severityIcon = gap >= 2 ? `<i class="fa-solid fa-circle-exclamation text-danger"></i>` : `<i class="fa-solid fa-triangle-exclamation text-warning"></i>`;
            const severityText = gap >= 2 ? "<strong>Critical gap</strong>" : "Moderate gap";
            diagnosticHTML = `<li>${severityIcon} <span>${severityText} in <strong>${skillName}</strong>. Required Level ${required}, actual Level ${actual}. Recommended iGOT course module exists.</span></li>`;
            diagnosticList.innerHTML += diagnosticHTML;
        }
        
        const itemHTML = `
            <div class="skill-list-item">
                <div class="skill-icon-wrap"><i class="${skills[skillName].icon}"></i></div>
                <div class="skill-desc">
                    <h4>${skillName}</h4>
                    <p>Standard professional competency benchmarks.</p>
                </div>
                <div class="skill-val-compare">
                    <span class="skill-pill skill-actual">Actual Lvl ${actual}</span>
                    <span class="skill-pill skill-required">Required Lvl ${required}</span>
                    ${gapHTML}
                </div>
            </div>
        `;
        skillsList.innerHTML += itemHTML;
    }
    
    if (gapCount === 0) {
        diagnosticList.innerHTML = `<li><i class="fa-solid fa-square-check text-success" style="font-size: 16px;"></i> <span>Perfect! Your skills meet or exceed all expectations for this role.</span></li>`;
    }
}

function initCategoryTabs() {
    const catBtns = document.querySelectorAll('.category-tab-btn');
    catBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            catBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const cat = this.getAttribute('data-category');
            renderSkillsList(cat);
            renderProfileRadarChart();
        });
    });
}

// 7. Active Learnings & Course Lists
function renderActiveLearnings() {
    const container = document.getElementById('active-courses-container');
    if (!container) return;
    
    container.innerHTML = "";
    const active = APP_STATE.courses.filter(c => c.enrolled && !c.completed);
    
    if (active.length === 0) {
        container.innerHTML = `
            <div class="flex-center" style="padding: 30px; border: 1px dashed var(--border-color); border-radius: 12px; height: 100%;">
                <div>
                    <i class="fa-solid fa-book-open-reader" style="font-size: 28px; color: var(--text-muted); margin-bottom: 12px;"></i>
                    <p style="font-size: 13px; color: var(--text-secondary);">No active enrollments. Enroll in a course below.</p>
                </div>
            </div>
        `;
        document.getElementById('enrolled-count').innerText = "0 Active";
        return;
    }
    
    document.getElementById('enrolled-count').innerText = `${active.length} Active`;
    
    active.forEach(course => {
        const rowHTML = `
            <div class="active-course-row">
                <div class="course-progress-radial">
                    <svg width="48" height="48" viewBox="0 0 36 36" style="transform: rotate(-90deg);">
                        <path stroke="rgba(255,255,255,0.05)" stroke-width="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        <path stroke="#6366f1" stroke-width="3" stroke-dasharray="${course.progress}, 100" stroke-linecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    </svg>
                    <span class="radial-percentage" style="position: absolute;">${course.progress}%</span>
                </div>
                <div class="course-row-info">
                    <span class="course-row-title">${course.title}</span>
                    <span class="course-row-meta">${course.provider} • ${course.duration}</span>
                </div>
                <button class="btn-row-action" onclick="simulateCompleteCourse('${course.id}')">Complete</button>
            </div>
        `;
        container.innerHTML += rowHTML;
    });
}

function renderiGOTCourses(filter = 'all') {
    const grid = document.getElementById('courses-grid');
    if (!grid) return;
    
    grid.innerHTML = "";
    const targetRole = APP_STATE.user.selectedTargetRole;
    const reqs = APP_STATE.roleRequirements[targetRole].requirements;
    
    let filteredCourses = APP_STATE.courses;
    
    if (filter === 'completed') {
        filteredCourses = APP_STATE.courses.filter(c => c.completed);
    } else if (filter === 'critical') {
        filteredCourses = APP_STATE.courses.filter(course => {
            const actual = APP_STATE.competencies[course.category][course.skillTarget].actual;
            const required = reqs[course.category][course.skillTarget] || 0;
            return actual < required;
        });
    }
    
    let recommendCount = 0;
    APP_STATE.courses.forEach(c => {
        const actual = APP_STATE.competencies[c.category][c.skillTarget].actual;
        const required = reqs[c.category][c.skillTarget] || 0;
        if (actual < required && !c.completed) {
            recommendCount++;
        }
    });
    document.getElementById('recom-badge').innerText = recommendCount;
    
    if (filteredCourses.length === 0) {
        grid.innerHTML = `
            <div class="flex-center" style="grid-column: span 3; padding: 60px 20px; border: 1px dashed var(--border-color); border-radius: 20px;">
                <div>
                    <i class="fa-solid fa-graduation-cap" style="font-size: 40px; color: var(--text-muted); margin-bottom: 20px;"></i>
                    <h2>No Courses Found</h2>
                    <p style="color: var(--text-secondary); max-width: 400px; margin: 10px auto 0;">All courses are completed or no active gaps match this filter.</p>
                </div>
            </div>
        `;
        return;
    }
    
    filteredCourses.forEach(course => {
        const actual = APP_STATE.competencies[course.category][course.skillTarget].actual;
        const required = reqs[course.category][course.skillTarget] || 0;
        const hasGap = actual < required;
        
        let gapBadge = "";
        if (course.completed) {
            gapBadge = `<span class="tag tag-completed"><i class="fa-solid fa-check"></i> Completed</span>`;
        } else if (course.enrolled) {
            gapBadge = `<span class="tag tag-live"><i class="fa-solid fa-spinner"></i> In Progress (${course.progress}%)</span>`;
        } else if (hasGap) {
            gapBadge = `<span class="tag tag-critical"><i class="fa-solid fa-triangle-exclamation"></i> Resolves Gap</span>`;
        } else {
            gapBadge = `<span class="tag tag-medium">Elective</span>`;
        }
        
        let actionBtn = "";
        if (course.completed) {
            actionBtn = `<button class="btn btn-secondary btn-sm" disabled><i class="fa-solid fa-circle-check"></i> Completed</button>`;
        } else if (course.enrolled) {
            actionBtn = `<button class="btn btn-primary btn-sm" onclick="simulateCompleteCourse('${course.id}')"><i class="fa-solid fa-check"></i> Complete Course</button>`;
        } else {
            actionBtn = `<button class="btn btn-primary btn-sm" onclick="enrollCourse('${course.id}')"><i class="fa-solid fa-plus"></i> Enroll Course</button>`;
        }
        
        const cardHTML = `
            <div class="course-card">
                <div class="course-card-header">
                    <span class="course-provider">${course.provider}</span>
                    ${gapBadge}
                </div>
                <div class="course-card-body">
                    <h3 class="course-title">${course.title}</h3>
                    <p class="course-desc">${course.desc}</p>
                    <div class="course-skills-target">
                        <h4 class="course-skills-title">Target Competency</h4>
                        <div class="course-skills-tags">
                            <span class="skill-mini-tag">${course.skillTarget} (+Lvl ${course.gainAmount})</span>
                        </div>
                    </div>
                </div>
                <div class="course-card-footer">
                    <span class="course-duration"><i class="fa-regular fa-clock"></i> ${course.duration}</span>
                    ${actionBtn}
                </div>
            </div>
        `;
        grid.innerHTML += cardHTML;
    });
}

window.enrollCourse = function(courseId) {
    const course = APP_STATE.courses.find(c => c.id === courseId);
    if (course) {
        course.enrolled = true;
        course.progress = 10;
        renderiGOTCourses();
        renderActiveLearnings();
        updateOverallCompetencyMetrics();
    }
};

window.simulateCompleteCourse = function(courseId) {
    const course = APP_STATE.courses.find(c => c.id === courseId);
    if (course) {
        course.completed = true;
        course.enrolled = false;
        course.progress = 100;
        
        const skillCategory = course.category;
        const skillName = course.skillTarget;
        const currentRating = APP_STATE.competencies[skillCategory][skillName].actual;
        
        APP_STATE.competencies[skillCategory][skillName].actual = Math.min(5, currentRating + course.gainAmount);
        
        updateOverallCompetencyMetrics();
        renderActiveLearnings();
        renderiGOTCourses();
        renderDashboardRadarChart();
        
        alert(`Congratulations! You completed: "${course.title}". Your skill level in [${skillName}] has been upgraded!`);
        
        if (document.getElementById('profile-tab').classList.contains('active')) {
            renderProfileRadarChart();
            const activeCatTab = document.querySelector('.category-tab-btn.active');
            if (activeCatTab) {
                renderSkillsList(activeCatTab.getAttribute('data-category'));
            }
        }
    }
};

function initiGOTFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderiGOTCourses(this.getAttribute('data-filter'));
        });
    });
}

// 8. AI Quiz Generator (CONNECTED TO BACKEND API)
function initQuizGenerator() {
    const mockDocCards = document.querySelectorAll('.mock-doc-card');
    const uploadZone = document.getElementById('upload-zone');
    const fileInput = document.getElementById('file-input');
    const fileLoadedBanner = document.getElementById('file-loaded-banner');
    const removeFileBtn = document.getElementById('remove-file-btn');
    
    mockDocCards.forEach(card => {
        card.addEventListener('click', function() {
            mockDocCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            fileLoadedBanner.style.display = "none";
            uploadZone.style.display = "flex";
            fileInput.value = "";
            activeQuizKey = this.getAttribute('data-doc');
        });
    });
    
    activeQuizKey = "nss";
    
    uploadZone.addEventListener('click', () => fileInput.click());
    
    fileInput.addEventListener('change', function(e) {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            document.getElementById('loaded-file-name').innerText = file.name;
            document.getElementById('loaded-file-size').innerText = `${(file.size / (1024 * 1024)).toFixed(1)} MB • Custom study material`;
            
            uploadZone.style.display = "none";
            fileLoadedBanner.style.display = "flex";
            
            mockDocCards.forEach(c => c.classList.remove('active'));
            activeQuizKey = "custom";
        }
    });
    
    removeFileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        fileLoadedBanner.style.display = "none";
        uploadZone.style.display = "flex";
        fileInput.value = "";
        
        const firstDoc = mockDocCards[0];
        firstDoc.classList.add('active');
        activeQuizKey = firstDoc.getAttribute('data-doc');
    });

    document.getElementById('generate-quiz-btn').addEventListener('click', executeQuizGenerationFlow);
}

// Live AJAX backend connection for Groq Generation
async function executeQuizGenerationFlow() {
    const emptyView = document.getElementById('quiz-empty-view');
    const loadingView = document.getElementById('quiz-loading-view');
    const activeView = document.getElementById('quiz-active-view');
    const resultView = document.getElementById('quiz-result-view');
    
    emptyView.style.display = "none";
    resultView.style.display = "none";
    activeView.style.display = "none";
    loadingView.style.display = "flex";
    
    const loaderStatus = document.getElementById('loader-status');
    loaderStatus.innerText = "Initiating Express AI backend...";
    
    let step = 0;
    const loaderTextInterval = setInterval(() => {
        const steps = [
            "Parsing document layout and structures...",
            "Invoking Groq Llama-3 compiler...",
            "Synthesizing high-fidelity MCQs...",
            "Assembling explanations and choices..."
        ];
        loaderStatus.innerText = steps[step % steps.length];
        step++;
    }, 1500);

    try {
        const response = await fetch('/api/generate-quiz', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                quizKey: activeQuizKey,
                questionCount: document.getElementById('quiz-count').value,
                difficulty: document.getElementById('quiz-difficulty').value,
                customText: activeQuizKey === 'custom' ? "Custom Upload document parsed successfully" : null
            })
        });

        clearInterval(loaderTextInterval);
        
        if (!response.ok) {
            throw new Error("Backend API responded with error status");
        }

        const data = await response.json();
        
        loadingView.style.display = "none";
        activeView.style.display = "flex";
        
        activeQuizQuestions = data.questions;
        document.getElementById('quiz-source-title').innerText = data.title || "StatLearn AI assessment";
        startQuizSession();

    } catch (err) {
        clearInterval(loaderTextInterval);
        console.error(err);
        alert("Error connecting to Groq AI Server. Ensure backend 'server.js' is running.");
        loadingView.style.display = "none";
        emptyView.style.display = "flex";
    }
}

function startQuizSession() {
    currentQuestionIndex = 0;
    quizScore = 0;
    quizTimeStart = new Date();
    
    renderCurrentQuestion();
    
    const skipBtn = document.getElementById('skip-q-btn');
    const nextBtn = document.getElementById('next-q-btn');
    
    skipBtn.onclick = () => {
        selectedOptionIndex = null;
        showExplanation(false, "Skipped. Correct answer was marked.");
        
        // Highlight correct answer
        const correctIndex = activeQuizQuestions[currentQuestionIndex].answer;
        document.getElementById('quiz-options-container').children[correctIndex].classList.add('correct');
        
        nextBtn.removeAttribute('disabled');
        skipBtn.setAttribute('disabled', 'true');
    };
    
    nextBtn.onclick = () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < activeQuizQuestions.length) {
            renderCurrentQuestion();
            nextBtn.setAttribute('disabled', 'true');
            skipBtn.removeAttribute('disabled');
        } else {
            finishQuizSession();
        }
    };
}

function renderCurrentQuestion() {
    const qData = activeQuizQuestions[currentQuestionIndex];
    
    document.getElementById('current-q-num').innerText = currentQuestionIndex + 1;
    document.getElementById('total-q-num').innerText = activeQuizQuestions.length;
    
    const percentage = ((currentQuestionIndex) / activeQuizQuestions.length) * 100;
    document.getElementById('quiz-progress-fill').style.width = `${percentage}%`;
    
    document.getElementById('quiz-question-text').innerText = qData.q;
    
    const optionsContainer = document.getElementById('quiz-options-container');
    optionsContainer.innerHTML = "";
    
    const expBox = document.getElementById('quiz-explanation-box');
    expBox.style.display = "none";
    
    selectedOptionIndex = null;
    
    qData.options.forEach((opt, idx) => {
        const optionLetter = String.fromCharCode(65 + idx);
        const optBtn = document.createElement('button');
        optBtn.className = "quiz-option-btn";
        optBtn.innerHTML = `
            <span class="quiz-option-indicator">${optionLetter}</span>
            <span>${opt}</span>
        `;
        
        optBtn.onclick = () => {
            if (selectedOptionIndex !== null) return;
            
            selectedOptionIndex = idx;
            const isCorrect = idx === qData.answer;
            
            if (isCorrect) {
                optBtn.classList.add('correct');
                quizScore++;
            } else {
                optBtn.classList.add('incorrect');
                optionsContainer.children[qData.answer].classList.add('correct');
            }
            
            showExplanation(isCorrect, qData.explanation);
            
            document.getElementById('next-q-btn').removeAttribute('disabled');
            document.getElementById('skip-q-btn').setAttribute('disabled', 'true');
        };
        
        optionsContainer.appendChild(optBtn);
    });
}

function showExplanation(isCorrect, text) {
    const expBox = document.getElementById('quiz-explanation-box');
    const expStatus = document.getElementById('explanation-status');
    const expText = document.getElementById('explanation-text');
    
    expBox.style.display = "block";
    expText.innerText = text;
    
    if (isCorrect) {
        expBox.className = "quiz-explanation-box correct-box";
        expStatus.innerHTML = `<i class="fa-solid fa-circle-check"></i> Correct Answer`;
    } else {
        expBox.className = "quiz-explanation-box incorrect-box";
        expStatus.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Incorrect Answer`;
    }
}

function finishQuizSession() {
    document.getElementById('quiz-active-view').style.display = "none";
    const resultView = document.getElementById('quiz-result-view');
    resultView.style.display = "block";
    
    const timeTakenMs = new Date() - quizTimeStart;
    const minutes = Math.floor(timeTakenMs / 60000);
    const seconds = Math.floor((timeTakenMs % 60000) / 1000);
    
    const finalScoreStr = `${quizScore}/${activeQuizQuestions.length}`;
    const finalPercent = Math.round((quizScore / activeQuizQuestions.length) * 100);
    
    document.getElementById('result-score').innerText = finalScoreStr;
    document.getElementById('result-percent').innerText = `${finalPercent}%`;
    document.getElementById('result-time').innerText = `${minutes}m ${seconds}s`;
    
    let targetSkill = "Survey Design & Sampling";
    if (activeQuizKey === "nas") targetSkill = "National Account Statistics";
    if (activeQuizKey === "iip") targetSkill = "Industrial Statistics (IIP)";
    
    const deltaCard = document.querySelector('.competency-impact-card');
    deltaCard.style.display = "block";
    
    let category = "statistical";
    const skillObj = APP_STATE.competencies[category][targetSkill];
    const prevLvl = skillObj.actual;
    
    if (finalPercent >= 70) {
        const newLvl = Math.min(5, prevLvl + 1);
        APP_STATE.competencies[category][targetSkill].actual = newLvl;
        
        deltaCard.innerHTML = `
            <h3><i class="fa-solid fa-bolt text-success"></i> Competency Level Up!</h3>
            <p>Your performance demonstrates higher mastery in <strong>${targetSkill}</strong>. Your level has been upgraded:</p>
            <div class="skill-delta-visual">
                <span>${targetSkill}</span>
                <div class="rating-delta">
                    <span class="old-rating">Level ${prevLvl}</span>
                    <i class="fa-solid fa-angles-right text-success"></i>
                    <span class="new-rating text-success">Level ${newLvl}</span>
                </div>
            </div>
        `;
        
        updateOverallCompetencyMetrics();
        renderDashboardRadarChart();
    } else {
        deltaCard.innerHTML = `
            <h3><i class="fa-solid fa-circle-exclamation text-warning"></i> Competency Impact</h3>
            <p>You scored <strong>${finalPercent}%</strong>. A minimum score of 70% is required to level up. Review the materials and re-attempt.</p>
            <div class="skill-delta-visual">
                <span>${targetSkill}</span>
                <div class="rating-delta">
                    <span class="new-rating text-warning">Level ${prevLvl} (Unchanged)</span>
                </div>
            </div>
        `;
    }
    
    document.getElementById('sync-igot-profile-btn').onclick = () => {
        alert("Success! Syncing complete.");
        document.getElementById('sync-igot-profile-btn').setAttribute('disabled', 'true');
        document.getElementById('sync-igot-profile-btn').innerText = "Synchronized";
    };
    
    document.getElementById('restart-quiz-btn').onclick = () => {
        resultView.style.display = "none";
        document.getElementById('quiz-empty-view').style.display = "flex";
        document.getElementById('sync-igot-profile-btn').removeAttribute('disabled');
        document.getElementById('sync-igot-profile-btn').innerHTML = `<i class="fa-solid fa-cloud-arrow-up"></i> Sync to iGOT Profile`;
    };
}

// 9. App Initializer
window.addEventListener('DOMContentLoaded', () => {
    initTabNavigation();
    initRoleSelector();
    initCategoryTabs();
    initiGOTFilters();
    initQuizGenerator();
    
    updateOverallCompetencyMetrics();
    renderDashboardRadarChart();
    renderActiveLearnings();
    renderiGOTCourses();
});
