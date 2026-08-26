import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { Groq } from 'groq-sdk';

// Configure Environment Variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Serve static frontend assets from 'public/'
app.use(express.static(path.join(__dirname, 'public')));

// 1. Initial Local Seed Quiz Database (Defensive Fallback)
const MOCK_QUIZ_DATABASE = {
    nss: {
        title: "National Sample Survey (NSS) Manual",
        skillTarget: "Survey Design & Sampling",
        questions: [
            {
                q: "In multi-stage stratified random sampling conducted by NSSO, what is typically selected as the Primary Stage Unit (PSU) in rural areas?",
                options: [
                    "Individual agricultural households",
                    "Census Enumeration Blocks (CEBs)",
                    "Revenue Villages",
                    "Sub-districts / Tehsils"
                ],
                answer: 2,
                explanation: "In rural areas, Census Villages (Revenue Villages) are typically designated as the Primary Stage Units (PSUs), while in urban areas, UFS blocks are used."
            },
            {
                q: "Which of the following describes the sampling design of the National Sample Survey (NSS) round of socio-economic surveys?",
                options: [
                    "Simple Random Sampling with Replacement (SRSWR)",
                    "Stratified Multi-stage Random Sampling",
                    "Systematic cluster sampling without stratification",
                    "Quota sampling based on district demographics"
                ],
                answer: 1,
                explanation: "NSS surveys utilize a stratified multi-stage design to efficiently capture representative nationwide data across both rural and urban sectors."
            },
            {
                q: "What is the primary function of the 'Sampling Frame' in survey design?",
                options: [
                    "To define the graphical structure of report dashboards",
                    "A complete roster or list of all eligible sampling units within a population",
                    "The mathematical boundary of the standard deviation",
                    "A timeline for field investigators to collect data"
                ],
                answer: 1,
                explanation: "The sampling frame is the actual list or database of units from which a sample is selected. An accurate frame is vital for making unbiased estimates."
            },
            {
                q: "Under NSS guidelines, how is stratification normally done within rural areas of a district?",
                options: [
                    "By grouping villages according to population size classes",
                    "Based on the average household income levels",
                    "According to geographical proximity to the nearest city",
                    "By selecting every 10th household systematically"
                ],
                answer: 0,
                explanation: "Stratification in NSS rural sectors is usually done by grouping villages based on population statistics from the latest available census."
            },
            {
                q: "What is the purpose of selecting 'Hamlet-Groups' in massive village surveys?",
                options: [
                    "To assign local community leaders as coordinators",
                    "To reduce the field listing workload in large or highly populated villages",
                    "To conduct focus group discussions instead of detailed questionnaires",
                    "To calculate the regional rainfall index"
                ],
                answer: 1,
                explanation: "When a village has a very large population, listing all households is inefficient. The village is split into hamlet-groups of equal size, and a sample of these groups is selected for survey."
            }
        ]
    },
    nas: {
        title: "National Accounts Statistics (NAS) Handbook",
        skillTarget: "National Account Statistics",
        questions: [
            {
                q: "What is the relationship between Gross Domestic Product (GDP) at Market Prices and Gross Value Added (GVA) at Basic Prices?",
                options: [
                    "GDP = GVA + Product Taxes - Product Subsidies",
                    "GDP = GVA - Product Taxes + Product Subsidies",
                    "GDP = GVA + Production Taxes - Production Subsidies",
                    "GDP = GVA + Total Import Duties"
                ],
                answer: 0,
                explanation: "According to the national accounting framework in India, GDP at market prices is calculated by adding product taxes to GVA at basic prices and subtracting product subsidies."
            },
            {
                q: "Which organization in India is primarily responsible for compiling and publishing the National Accounts Statistics?",
                options: [
                    "Reserve Bank of India (RBI)",
                    "National Statistical Office (NSO), MoSPI",
                    "NITI Aayog",
                    "Department of Economic Affairs, Ministry of Finance"
                ],
                answer: 1,
                explanation: "The National Statistical Office (NSO) under MoSPI compiles and publishes national account aggregates, quarterly estimates, and annual national accounts statistics."
            },
            {
                q: "What is the current base year used by MoSPI for compiling real GDP in India?",
                options: [
                    "2004-05",
                    "2011-12",
                    "2017-18",
                    "2020-21"
                ],
                answer: 1,
                explanation: "The current active base year for compiling National Accounts Statistics and GDP estimates is 2011-12. Base year updates are planned periodically to reflect changing economic structures."
            },
            {
                q: "In the Input-Output transaction table, what does the row represents?",
                options: [
                    "The purchasing structure of an industry",
                    "The allocation of the industry's output to various consuming sectors",
                    "The total labor count employed in the industry",
                    "The capital depreciation values"
                ],
                answer: 1,
                explanation: "In an Input-Output table, a row depicts the distribution/allocation of that industry's output across intermediate consumption and final demand sectors."
            },
            {
                q: "Double deflation is a method used to estimate:",
                options: [
                    "Simultaneous rise in CPI and WPI",
                    "Real GVA by deflating both gross output and intermediate inputs separately",
                    "Tax revenues from multi-stage transactions",
                    "Foreign exchange rate valuations"
                ],
                answer: 1,
                explanation: "Double deflation estimates real GVA by deflating the nominal output by an output price index, and deflating the nominal intermediate inputs by an input price index."
            }
        ]
    },
    iip: {
        title: "Index of Industrial Production (IIP) Guidelines",
        skillTarget: "Industrial Statistics (IIP)",
        questions: [
            {
                q: "What mathematical formula is used in the calculation of the Index of Industrial Production (IIP) in India?",
                options: [
                    "Paasche's Index Formula",
                    "Fisher's Ideal Index Formula",
                    "Weighted Laspeyres Index Formula",
                    "Geometric Mean Method"
                ],
                answer: 2,
                explanation: "The IIP is calculated as a weighted average of production relatives using the Laspeyres index formula with a fixed base period."
            },
            {
                q: "Under the current base year (2011-12) of IIP, which of the three broad sectors holds the highest weight?",
                options: [
                    "Mining",
                    "Manufacturing",
                    "Electricity",
                    "Infrastructure goods"
                ],
                answer: 1,
                explanation: "The Manufacturing sector holds the largest weight in the IIP basket, accounting for approximately 77.63% of the total index value."
            },
            {
                q: "In industrial statistics, what does the 'IIP' measure?",
                options: [
                    "The total revenue earned by the industrial sector in a financial year",
                    "The short-term changes in the volume of production of a basket of industrial products",
                    "The carbon footprint of industrial zones",
                    "The employment growth index within manufacturing sectors"
                ],
                answer: 1,
                explanation: "IIP is a composite indicator that measures the short-term variations in the physical volume of production of a selected basket of industrial products over a given time period."
            },
            {
                q: "How frequently is the Index of Industrial Production compiled and released by MoSPI?",
                options: [
                    "Weekly",
                    "Monthly",
                    "Quarterly",
                    "Annually"
                ],
                answer: 1,
                explanation: "The NSO releases the IIP index on a monthly basis, usually with a lag of 6 weeks from the end of the reference month."
            },
            {
                q: "How are the weights for individual items in the IIP basket determined?",
                options: [
                    "Based on the value of gross output from the Annual Survey of Industries (ASI)",
                    "By the number of workers in the sector",
                    "Based on corporate tax submissions",
                    "According to direct recommendations from the Ministry of Commerce"
                ],
                answer: 0,
                explanation: "Weights in the IIP basket are assigned based on the value of output or Gross Value Added contributing to the industry as derived from the Annual Survey of Industries (ASI)."
            }
        ]
    }
};

// 2. Groq SDK Client Init
const hasApiKey = process.env.GROQ_API_KEY && process.env.GROQ_API_KEY !== 'gsk_your_key_here';
let groq = null;

if (hasApiKey) {
    console.log("Groq API key found. Live AI generator enabled.");
    groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
} else {
    console.warn("WARNING: No GROQ_API_KEY set in environment variables. Falling back to local mock databases.");
}

// 3. Quiz Generation API Route
app.post('/api/generate-quiz', async (req, res) => {
    const { quizKey, questionCount, difficulty, customText } = req.body;
    const count = parseInt(questionCount) || 5;

    // A. FALLBACK MOCK LOGIC (Runs if key is missing or invalid)
    if (!groq) {
        console.log(`[Fallback] Serving mock questions for: ${quizKey}`);
        
        let selectedQuiz = MOCK_QUIZ_DATABASE[quizKey];
        if (!selectedQuiz) {
            // Generate randomized set from entire bank for custom uploads
            const allMockQs = [
                ...MOCK_QUIZ_DATABASE.nss.questions,
                ...MOCK_QUIZ_DATABASE.nas.questions,
                ...MOCK_QUIZ_DATABASE.iip.questions
            ];
            const shuffled = allMockQs.sort(() => 0.5 - Math.random());
            selectedQuiz = {
                title: "Custom Document (Mock Parser)",
                questions: shuffled.slice(0, count)
            };
        } else {
            // Trim mock questions to requested count
            selectedQuiz = {
                ...selectedQuiz,
                questions: selectedQuiz.questions.slice(0, count)
            };
        }
        
        // Add a small artificial network latency for realism
        return setTimeout(() => res.json(selectedQuiz), 1500);
    }

    // B. LIVE GROQ AI GENERATION LOGIC
    try {
        console.log(`[Groq AI] Generating ${count} ${difficulty} questions for: ${quizKey}`);
        
        let topicContext = "";
        let handbookName = "";
        
        if (quizKey === 'nss') {
            handbookName = "National Sample Survey (NSS) Manual";
            topicContext = "Focus on survey methodology, household listing, stratified multi-stage sampling designs, Hamlet-Group selection rules, and Primary Stage Units (PSUs) as defined by NSO India.";
        } else if (quizKey === 'nas') {
            handbookName = "National Accounts Statistics (NAS) Handbook";
            topicContext = "Focus on Gross Value Added (GVA) at Basic Prices vs GDP, quarterly estimations, base year updating principles (e.g. current 2011-12 base), double deflation systems, and input-output accounts.";
        } else if (quizKey === 'iip') {
            handbookName = "Index of Industrial Production (IIP) Guidelines";
            topicContext = "Focus on index construction, Laspeyres index formulation, weight allocations derived from Annual Survey of Industries (ASI), item selectors, and base year parameters.";
        } else {
            handbookName = "Uploaded Material";
            topicContext = customText || "General official statistics, data privacy and cybersecurity standards, or governmental data governance guidelines.";
        }

        const promptText = `
        You are a senior statistical psychometric analyst at NSSTA (National Statistical Systems Academy).
        Generate an assessment quiz containing exactly ${count} multiple choice questions (MCQs) for MoSPI officials.
        
        Handbook Topic: ${handbookName}
        Domain Context: ${topicContext}
        Target Difficulty: ${difficulty}
        
        Return a JSON object containing a "title" string and a "questions" array.
        Each question object MUST contain:
        1. "q": string (the question)
        2. "options": array of 4 strings (options A, B, C, D)
        3. "answer": integer index (0, 1, 2, or 3) representing the correct answer in the "options" array
        4. "explanation": string (explaining why that option is correct and why other options are wrong)
        
        CRITICAL RULES:
        - Output ONLY valid JSON structure matching this model. No markdown wraps, no extra talking.
        - Ensure questions are accurate to actual official Indian statistics practices.
        `;

        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: "You are a JSON-producing assistant. You only output valid JSON matching user schemas." },
                { role: "user", content: promptText }
            ],
            model: "llama3-8b-8192", // Llama 3 8B provides high speed and quality JSON output
            response_format: { type: "json_object" },
            temperature: 0.2 // Lower temp for factual accuracy
        });

        const rawContent = completion.choices[0].message.content;
        const generatedData = JSON.parse(rawContent);

        // Validation schema check
        if (!generatedData.questions || !Array.isArray(generatedData.questions)) {
            throw new Error("Invalid output format returned by Groq Llama");
        }

        res.json({
            title: generatedData.title || `${handbookName} Quiz`,
            questions: generatedData.questions.slice(0, count)
        });

    } catch (err) {
        console.error("Groq generation failed. Falling back to local mock data.", err);
        // Fallback gracefully on API errors
        let selectedQuiz = MOCK_QUIZ_DATABASE[quizKey] || MOCK_QUIZ_DATABASE.nss;
        res.json({
            title: `${selectedQuiz.title} (Fallback Mode)`,
            questions: selectedQuiz.questions.slice(0, count)
        });
    }
});

// Start Express Listener
app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(`  StatLearn AI backend listening at http://localhost:${PORT}`);
    console.log(`==================================================`);
});
