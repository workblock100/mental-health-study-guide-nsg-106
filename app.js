// Mental Health Units 1 & 2 - Interactive Study Guide
// ======================================================

// Flashcard Data - Mental Health Key Terms
const flashcards = [
    { q: "What is the specific duty to warn usually identified with?", a: "Tarasoff Decision - duty to warn third parties of threats." },
    { q: "What is the difference between Voluntary and Involuntary admission?", a: "Voluntary: Client consents. Involuntary: Danger to self/others, but still retains right to refuse meds (usually)." },
    { q: "What are the 3 phases of the Nurse-Patient Relationship (Peplau)?", a: "Orientation, Working, Termination." },
    { q: "Define Transference.", a: "Patient unconsciously displaces feelings from past (e.g., parent) onto the nurse." },
    { q: "Define Countertransference.", a: "Nurse displaces feelings onto the patient. (BAD - monitor this)." },
    { q: "What is the 'Gold Standard' for therapeutic communication skills?", a: "Listening, Silence, Open-ended questions, Reflecting, Clarifying." },
    { q: "What are 'Non-Therapeutic' communication techniques to avoid?", a: "Asking 'Why?', False reassurance ('It'll be fine'), Advising, Belitlling." },
    { q: "What is the priority for a patient severe anxiety/panic?", a: "SAFETY. Stay with them. Quiet environment. Short, firm directives." },
    { q: "What is the difference between delirium and dementia?", a: "Delirium: Acute, reversible (treat underlying cause). Dementia: Chronic, progressive." },
    { q: "What is the mechanism of action for Benzodiazepines?", a: "Increases GABA (inhibitory neurotransmitter) to reduce anxiety." },
    { q: "What is the antidote for Benzodiazepines?", a: "Flumazenil (Romazicon)." },
    { q: "What defines 'seclusion'?", a: "Involuntary confinement alone in a room/area where the client is physically prevented from leaving." },
    { q: "What are the time limits for restraints (adults)?", a: "4 hours maximum per order (Adults). Must be renewed. MD assessment within 1 hour." },
    { q: "Define 'Altruism' (defense mechanism).", a: "Dealing with anxiety by reaching out to others (Healthy)." },
    { q: "Define 'Sublimation' (defense mechanism).", a: "Substituting unacceptable impulses with socially acceptable activity (e.g., gym) (Healthy)." },
    { q: "Define 'Projection' (defense mechanism).", a: "Attributing one's own unacceptable feelings to others (Immature)." },
    { q: "Define 'Splitting' (defense mechanism).", a: "Seeing things as all good or all bad (common in Borderline PD)." },
    { q: "What are extrapyramidal symptoms (EPS)?", a: "Dystonia, Akathisia, Pseudoparkinsonism, Tardive Dyskinesia (caused by antipsychotics)." },
    { q: "What is Neuroleptic Malignant Syndrome (NMS)?", a: "Life-threatening reaction to antipsychotics: High fever (103+), muscle rigidity, BP fluctuation. STOP DRUG." },
    { q: "What is the therapeutic level for Lithium?", a: "0.6 - 1.2 mEq/L. (>1.5 is toxic)." }
];

// Quiz Questions - Linked to Mental Health
const quizQuestionsBase = [
    {
        q: "A nurse is caring for a client who states, 'I have to check the stove 10 times before I leave.' The nurse should identify this as which level of anxiety?",
        category: "anxiety",
        type: "single",
        options: ["Mild", "Moderate", "Severe", "Panic"],
        correctAnswer: "Severe",
        explanation: "Compulsive rituals are often associated with severe anxiety as a way to control anxiety. Moderate anxiety involves narrowing perception but not necessarily rituals."
    },
    {
        q: "A client on a locked unit yells, 'I am the King of England!' The nurse documents this as:",
        category: "psychosis",
        type: "single",
        options: ["Hallucination", "Delusion of Grandeur", "Illusion", "Idea of Reference"],
        correctAnswer: "Delusion of Grandeur",
        explanation: "A delusion is a fixed false belief. Grandeur involves believing one is a powerful/important figure."
    },
    {
        q: "Which statement by a nurse demonstrates the ethical principle of Autonomy?",
        category: "ethics",
        type: "single",
        options: ["'I will ensure you get your medication on time.'", "'You have the right to refuse this treatment.'", "'We will do what is best for you.'", "'I will tell the truth about your diagnosis.'"],
        correctAnswer: "'You have the right to refuse this treatment.'",
        explanation: "Autonomy is respecting the client's right to make their own decisions."
    },
    {
        q: "A client is prescribed Haloperidol. The nurse observes the client pacing and unable to sit still. This is:",
        category: "pharm",
        type: "single",
        options: ["Dystonia", "Akathisia", "Tardive Dyskinesia", "Parkinsonism"],
        correctAnswer: "Akathisia",
        explanation: "Akathisia is psychomotor restlessness (pacing, fidgeting)."
    },
    {
        q: "Which defense mechanism is used when a student blames the teacher for failing a test they didn't study for?",
        category: "defense",
        type: "single",
        options: ["Projection", "Displacement", "Rationalization", "Denial"],
        correctAnswer: "Rationalization",
        explanation: "Rationalization creates logical excuses to justify unacceptable behavior or failure."
    },
    {
        q: "The nurse is assessing a client for Neuroleptic Malignant Syndrome (NMS). Which finding is a hallmark sign?",
        category: "pharm",
        type: "single",
        options: ["Low blood pressure", "Muscle flaccidity", "High Fever", "Hypothermia"],
        correctAnswer: "High Fever",
        explanation: "NMS is characterized by HIGH fever, muscle rigidity, and autonomic instability."
    },
    {
        q: "A client threatens to kill his ex-wife. Under the Tarasoff ruling, the nurse must:",
        category: "legal",
        type: "single",
        options: ["Keep it confidential due to HIPAA", "Warn the ex-wife (via provider/police)", "Place the client in seclusion", "Document it only"],
        correctAnswer: "Warn the ex-wife (via provider/police)",
        explanation: "Duty to Warn supersedes confidentiality when there is a specific threat to a specific person."
    },
    {
        q: "Which of the following are examples of therapeutic communication? (Select All That Apply)",
        category: "communication",
        type: "sata",
        options: ["Asking 'Why do you feel that way?'", "Restating", "Reflecting", "Giving advice", "Silence"],
        correctAnswers: ["Restating", "Reflecting", "Silence"],
        explanation: "'Why' questions can be defensive. Advice takes away autonomy. Restating, Reflecting, and Silence are therapeutic."
    },
    {
        q: "Which symptoms indicate Lithium Toxicity?",
        category: "pharm",
        type: "single",
        options: ["Fine hand tremors", "Coarse hand tremors, confusion", "Dry mouth", "Weight gain"],
        correctAnswer: "Coarse hand tremors, confusion",
        explanation: "Fine tremors are a common side effect. Coarse tremors and confusion indicate toxicity."
    },
    {
        q: "A client is in mechanical restraints. How often must the nurse check circulation?",
        category: "legal",
        type: "single",
        options: ["Every hour", "Every 15-30 minutes", "Every 4 hours", "Every shift"],
        correctAnswer: "Every 15-30 minutes",
        explanation: "Restraints require frequent safety/circulation checks (usually q15-30 min depending on policy)."
    }
];

// State
let currentCard = 0;
let currentQuestion = 0;
let score = 0;
let quizQuestions = [];

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Prepare quiz questions
function prepareQuizQuestions() {
    quizQuestions = quizQuestionsBase.map(q => {
        const shuffledOptions = shuffleArray(q.options);
        if (q.type === 'sata' && q.correctAnswers) {
            const correctIndices = q.correctAnswers.map(ans => shuffledOptions.indexOf(ans));
            return { ...q, options: shuffledOptions, correctIndices: correctIndices };
        }
        const correctIndex = shuffledOptions.indexOf(q.correctAnswer);
        return { ...q, options: shuffledOptions, correct: correctIndex };
    });
    quizQuestions = shuffleArray(quizQuestions);
}

// Main Tab Switching
function switchMainTab(tabName) {
    document.querySelectorAll('.main-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.maintab === tabName);
    });
    document.querySelectorAll('.main-tab-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === `panel-${tabName}`);
    });

    // Game Panel Logic
    const gamePanel = document.getElementById('panel-game');
    if (gamePanel) {
        if (tabName === 'game') {
            gamePanel.style.cssText = `
        position: fixed !important; top: 0 !important; left: 0 !important; right: 0 !important; bottom: 0 !important;
        width: 100vw !important; height: 100vh !important; z-index: 9999 !important;
        background: radial-gradient(ellipse at center, #0f0a1a 0%, #050510 100%) !important;
        padding-top: 80px !important; display: flex !important; align-items: center !important; justify-content: center !important;
      `;
            document.body.style.overflow = 'hidden';
            document.querySelectorAll('.main-tab-panel:not(#panel-game)').forEach(p => p.style.display = 'none');
            setTimeout(() => { if (typeof initGame === 'function') initGame(); }, 100);
        } else {
            gamePanel.style.cssText = '';
            document.body.style.overflow = '';
            document.querySelectorAll('.main-tab-panel').forEach(p => p.style.display = '');
            if (typeof stopGame === 'function') stopGame();
        }
    }
}

// Init Main Tabs
function initMainTabs() {
    document.querySelectorAll('.main-tab').forEach(tab => {
        tab.addEventListener('click', () => switchMainTab(tab.dataset.maintab));
    });

    // Start Quiz Button
    const startQuizBtn = document.getElementById('startQuizBtn');
    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', () => {
            document.querySelector('.quiz-settings-panel').style.display = 'none';
            document.getElementById('quizMainContainer').style.display = 'block';
            prepareQuizQuestions();
            currentQuestion = 0;
            score = 0;
            showQuizQuestion();
        });
    }
}

// Show Quiz Question
function showQuizQuestion() {
    if (currentQuestion >= quizQuestions.length) {
        document.getElementById('quizMainContainer').innerHTML = `<h3>Quiz Complete!</h3><p>Score: ${score}/${quizQuestions.length}</p>`;
        return;
    }
    const q = quizQuestions[currentQuestion];
    const isSata = q.type === 'sata';
    const optionsContainer = document.getElementById('quizOptions');

    document.getElementById('quizQuestion').textContent = q.q;
    document.getElementById('quizProgress').textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
    document.getElementById('quizScore').textContent = `Score: ${score}`;

    optionsContainer.innerHTML = '';
    // SATA logic would go here, implemented simply for now
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = option;
        btn.onclick = () => {
            if (isSata) {
                btn.classList.toggle('selected'); // Simplified SATA
            } else {
                handleSingleAnswer(index, q, btn);
            }
        };
        optionsContainer.appendChild(btn);
    });

    if (isSata) {
        const subBtn = document.createElement('button');
        subBtn.textContent = "Submit";
        subBtn.className = 'btn btn-primary';
        subBtn.onclick = () => handleSataSubmit(q);
        optionsContainer.appendChild(subBtn);
    }

    document.getElementById('quizFeedback').style.display = 'none';
    document.getElementById('nextQuestion').style.display = 'none';
    document.getElementById('nextQuestion').onclick = () => {
        currentQuestion++;
        showQuizQuestion();
    };
}

function handleSingleAnswer(index, q, btn) {
    const isCorrect = index === q.correct;
    if (isCorrect) score++;
    showFeedback(isCorrect, q.explanation);
}

function handleSataSubmit(q) {
    // Simplified: check if selected matches correctIndices
    // For now, assuming user gets it right if they just click logic
    showFeedback(true, q.explanation);
}

function showFeedback(isCorrect, explanation) {
    const fb = document.getElementById('quizFeedback');
    fb.style.display = 'block';
    fb.innerHTML = `<div class='glass-card'><b>${isCorrect ? 'Correct!' : 'Incorrect'}</b><br>${explanation}</div>`;
    document.getElementById('nextQuestion').style.display = 'inline-block';
}

// Flashcards
function initFlashcards() {
    const flashcard = document.getElementById('flashcard');
    if (!flashcard) return;

    const updateCard = () => {
        const c = flashcards[currentCard];
        document.getElementById('flashcardQuestion').textContent = c.q;
        document.getElementById('flashcardAnswer').textContent = c.a;
        document.getElementById('cardCounter').textContent = `${currentCard + 1}/${flashcards.length}`;
        flashcard.classList.remove('flipped');
    };

    document.getElementById('prevCard').onclick = () => { currentCard = (currentCard - 1 + flashcards.length) % flashcards.length; updateCard(); };
    document.getElementById('nextCard').onclick = () => { currentCard = (currentCard + 1) % flashcards.length; updateCard(); };
    document.getElementById('shuffleCards').onclick = () => { /* shuffle logic */ updateCard(); };
    flashcard.onclick = () => flashcard.classList.toggle('flipped');
    updateCard();
}

// General Tabs
function initTabs() {
    document.querySelectorAll('.tab').forEach(t => {
        t.addEventListener('click', () => {
            const group = t.parentElement;
            group.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
            t.classList.add('active');

            const target = t.dataset.tab;
            // Hide all panels in this section
            const section = t.closest('.section');
            if (section) {
                // Determine panel class based on section
                let panelClass = '.condition-panel'; // default
                if (section.id === 'anatomy') panelClass = '.anatomy-visual'; // wait, logic check

                // For Conditions
                section.querySelectorAll('.condition-panel').forEach(p => {
                    p.style.display = (p.dataset.panel === target) ? 'block' : 'none';
                    if (p.dataset.panel === target) p.classList.add('active');
                });

                // For Treatments/Anatomy if applicable
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initMainTabs();
    initFlashcards();
    initTabs();
});
