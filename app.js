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


// Diagram Hotspot Data - Detailed Mental Health Content
const diagramHotspotData = {
    'maslow': {
        'self-actualization': {
            title: 'Self-Actualization Needs',
            content: `
                <h4 class="hotspot-title">🎯 Self-Actualization</h4>
                <p><strong>What it is:</strong> Achieving one's full potential, personal growth, peak experiences</p>
                <ul>
                    <li><strong>Examples:</strong> Creativity, problem-solving, spontaneity, acceptance of facts</li>
                    <li><strong>Nursing Implication:</strong> Encourage goal-setting, hobbies, and self-expression ONLY after basic needs met</li>
                    <li><strong>NCLEX Tip:</strong> This is the LOWEST priority. Never choose self-actualization when physiological or safety needs are unmet</li>
                </ul>
            `
        },
        'esteem': {
            title: 'Esteem Needs',
            content: `
                <h4 class="hotspot-title">🏆 Esteem Needs</h4>
                <p><strong>What it is:</strong> Self-esteem, respect, recognition, achievement</p>
                <ul>
                    <li><strong>Examples:</strong> Sense of accomplishment, independence, prestige</li>
                    <li><strong>Nursing Implication:</strong> Support patient autonomy, provide positive reinforcement, respect dignity</li>
                    <li><strong>NCLEX Tip:</strong> Promoting self-esteem is important but comes AFTER safety and belonging</li>
                </ul>
            `
        },
        'belonging': {
            title: 'Love & Belonging Needs',
            content: `
                <h4 class="hotspot-title">❤️ Love & Belonging</h4>
                <p><strong>What it is:</strong> Connection, intimacy, friendship, family</p>
                <ul>
                    <li><strong>Examples:</strong> Relationships, support groups, family visitation</li>
                    <li><strong>Nursing Implication:</strong> Facilitate family involvement, encourage support groups, therapeutic relationship</li>
                    <li><strong>NCLEX Tip:</strong> Social needs are important but come AFTER physiological and safety</li>
                </ul>
            `
        },
        'safety': {
            title: 'Safety & Security Needs',
            content: `
                <h4 class="hotspot-title">🛡️ Safety & Security</h4>
                <p><strong>What it is:</strong> Physical safety, employment, health, property</p>
                <ul>
                    <li><strong>Examples:</strong> Safe environment, fall prevention, de-escalation, medication safety</li>
                    <li><strong>Nursing Implication:</strong> #1 priority in mental health emergencies - assess suicide/homicide risk FIRST</li>
                    <li><strong>NCLEX Tip:</strong> Safety is the SECOND priority after physiological needs. If patient is aggressive → SAFETY FIRST</li>
                </ul>
            `
        },
        'physiological': {
            title: 'Physiological Needs',
            content: `
                <h4 class="hotspot-title">💧 Physiological Needs</h4>
                <p><strong>What it is:</strong> Air, water, food, shelter, sleep, homeostasis</p>
                <ul>
                    <li><strong>Examples:</strong> Breathing, food/water, elimination, rest</li>
                    <li><strong>Nursing Implication:</strong> ALWAYS the first priority - assess airway, vital signs, hydration status</li>
                    <li><strong>NCLEX Tip:</strong> If a patient is hungry, dehydrated, or can't breathe → Address this BEFORE teaching or therapy</li>
                    <li><strong>Mental Health Example:</strong> Don't teach coping skills to a patient in panic attack (can't breathe) - ensure airway/safety FIRST</li>
                </ul>
            `
        }
    },
    'freud': {
        'overview': {
            title: "Freud's Personality Structure",
            content: `
                <h4 class="hotspot-title">🧠 Freud's Model Overview</h4>
                <p>Freud proposed three components of personality that interact to shape behavior:</p>
                <ul>
                    <li><strong>Id:</strong> Unconscious, instinctual drives</li>
                    <li><strong>Ego:</strong> Conscious mediator between Id and reality</li>
                    <li><strong>Superego:</strong> Moral conscience and ideals</li>
                </ul>
                <p><em>Click each layer to learn more about its role.</em></p>
            `
        },
        'id': {
            title: 'Id - The Pleasure Principle',
            content: `
                <h4 class="hotspot-title">🔥 The Id</h4>
                <p><strong>What it is:</strong> Primitive, unconscious instincts and drives</p>
                <ul>
                    <li><strong>Principle:</strong> "I want it NOW!" - Immediate gratification</li>
                    <li><strong>Example:</strong> Hunger, aggression, sexual impulses</li>
                    <li><strong>Nursing Implication:</strong> Patients with poor impulse control (mania, addiction) may have weak Ego unable to manage Id</li>
                    <li><strong>NCLEX Tip:</strong> Id = Instinct. Think "baby" - no self-control, just wants</li>
                </ul>
            `
        },
        'ego': {
            title: 'Ego - The Reality Principle',
            content: `
                <h4 class="hotspot-title">⚖️ The Ego</h4>
                <p><strong>What it is:</strong> The rational, decision-making part of personality</p>
                <ul>
                    <li><strong>Principle:</strong> Balances Id's desires with reality/consequences</li>
                    <li><strong>Role:</strong> Mediates between Id (wants) and Superego (morals)</li>
                    <li><strong>Defense Mechanisms:</strong> The Ego uses these to manage anxiety (e.g., denial, projection)</li>
                    <li><strong>Nursing Implication:</strong> Therapy strengthens the Ego to help patients cope with impulses and guilt</li>
                    <li><strong>NCLEX Tip:</strong> Ego = "I'll get what I want, but in a realistic way"</li>
                </ul>
            `
        },
        'superego': {
            title: 'Superego - The Moral Conscience',
            content: `
                <h4 class="hotspot-title">👼 The Superego</h4>
                <p><strong>What it is:</strong> Internalized moral standards and ideals</p>
                <ul>
                    <li><strong>Principle:</strong> "That's wrong!" - Conscience and guilt</li>
                    <li><strong>Example:</strong> Feeling guilty after lying</li>
                    <li><strong>Overactive Superego:</strong> May lead to excessive guilt, perfectionism, depression</li>
                    <li><strong>Nursing Implication:</strong> Patients with OCD or severe guilt may have harsh Superego attacking the Ego</li>
                    <li><strong>NCLEX Tip:</strong> Superego = "Strict parent" - judges right/wrong</li>
                </ul>
            `
        }
    },
    'erikson': {
        'overview': {
            title: "Erikson's Psychosocial Stages",
            content: `
                <h4 class="hotspot-title">👶👴 Erikson's 8 Stages</h4>
                <p>Each stage presents a developmental crisis that must be resolved for healthy growth.</p>
                <p><strong>Nursing Implication:</strong> Assess which stage the patient is in and support crisis resolution.</p>
                <p><em>Click each stage icon to learn more.</em></p>
            `
        },
        'trust': {
            title: 'Trust vs Mistrust (Infancy: 0-1 year)',
            content: `
                <h4 class="hotspot-title">👶 Trust vs Mistrust</h4>
                <p><strong>Crisis:</strong> Can I trust the world?</p>
                <ul>
                    <li><strong>Successful Resolution:</strong> Consistent caregiving → Trust, hope, security</li>
                    <li><strong>Failure:</strong> Neglect → Mistrust, fear, suspicion</li>
                    <li><strong>Nursing Implication:</strong> Adult patients with severe mistrust may have early trauma - establish consistency and reliability</li>
                </ul>
            `
        },
        'autonomy': {
            title: 'Autonomy vs Shame (Toddler: 1-3 years)',
            content: `
                <h4 class="hotspot-title">🧒 Autonomy vs Shame</h4>
                <p><strong>Crisis:</strong> Can I do things myself?</p>
                <ul>
                    <li><strong>Successful Resolution:</strong> Independence, will, self-control</li>
                    <li><strong>Failure:</strong> Overcontrol/criticism → Shame, doubt, low self-esteem</li>
                    <li><strong>Nursing Implication:</strong> Encourage patient autonomy in care decisions</li>
                </ul>
            `
        },
        'initiative': {
            title: 'Initiative vs Guilt (Preschool: 3-6 years)',
            content: `
                <h4 class="hotspot-title">👧 Initiative vs Guilt</h4>
                <p><strong>Crisis:</strong> Can I take initiative and make plans?</p>
                <ul>
                    <li><strong>Successful Resolution:</strong> Purpose, leadership, creativity</li>
                    <li><strong>Failure:</strong> Excessive rules/punishment → Guilt, fear of punishment</li>
                </ul>
            `
        },
        'industry': {
            title: 'Industry vs Inferiority (School Age: 6-12 years)',
            content: `
                <h4 class="hotspot-title">📚 Industry vs Inferiority</h4>
                <p><strong>Crisis:</strong> Can I succeed at tasks?</p>
                <ul>
                    <li><strong>Successful Resolution:</strong> Competence, achievement</li>
                    <li><strong>Failure:</strong> Repeated failure → Inferiority, low self-worth</li>
                </ul>
            `
        },
        'identity': {
            title: 'Identity vs Confusion (Adolescence: 12-18 years)',
            content: `
                <h4 class="hotspot-title">👨 Identity vs Confusion</h4>
                <p><strong>Crisis:</strong> Who am I?</p>
                <ul>
                    <li><strong>Successful Resolution:</strong> Strong sense of self, fidelity</li>
                    <li><strong>Failure:</strong> Role confusion, identity crisis</li>
                    <li><strong>NCLEX Tip:</strong> Adolescent psych admission → Often identity/peer issues</li>
                </ul>
            `
        },
        'intimacy': {
            title: 'Intimacy vs Isolation (Young Adult: 18-40 years)',
            content: `
                <h4 class="hotspot-title">💑 Intimacy vs Isolation</h4>
                <p><strong>Crisis:</strong> Can I form close relationships?</p>
                <ul>
                    <li><strong>Successful Resolution:</strong> Deep relationships, love</li>
                    <li><strong>Failure:</strong> Loneliness, isolation, depression</li>
                </ul>
            `
        },
        'generativity': {
            title: 'Generativity vs Stagnation (Middle Age: 40-65 years)',
            content: `
                <h4 class="hotspot-title">👨‍👩‍👧 Generativity vs Stagnation</h4>
                <p><strong>Crisis:</strong> Am I contributing to society/next generation?</p>
                <ul>
                    <li><strong>Successful Resolution:</strong> Caring for others, productivity, legacy</li>
                    <li><strong>Failure:</strong> Stagnation, self-absorption, midlife crisis</li>
                </ul>
            `
        },
        'integrity': {
            title: 'Integrity vs Despair (Late Adult: 65+ years)',
            content: `
                <h4 class="hotspot-title">👴 Integrity vs Despair</h4>
                <p><strong>Crisis:</strong> Did I live a meaningful life?</p>
                <ul>
                    <li><strong>Successful Resolution:</strong> Wisdom, acceptance, peace with mortality</li>
                    <li><strong>Failure:</strong> Regret, bitterness, fear of death</li>
                    <li><strong>Nursing Implication:</strong> Life review therapy helps elderly achieve integrity</li>
                </ul>
            `
        }
    },
    'communication': {
        'overview': {
            title: 'Therapeutic Communication',
            content: `
                <h4 class="hotspot-title">🗣️ Communication Techniques</h4>
                <p>The foundation of the therapeutic nurse-client relationship.</p>
                <p><em>Click DO or AVOID to see specific techniques.</em></p>
            `
        },
        'therapeutic': {
            title: 'Therapeutic Techniques ✅ DO',
            content: `
                <h4 class="hotspot-title">✅ Use These Techniques</h4>
                <ul>
                    <li><strong>Silence:</strong> Gives patient time to think and feel safe</li>
                    <li><strong>Broad Openings:</strong> "Tell me more about that..."</li>
                    <li><strong>Reflecting:</strong> "You seem upset." (Observation)</li>
                    <li><strong>Clarifying:</strong> "Help me understand what you mean..."</li>
                    <li><strong>Offering Self:</strong> "I'll stay with you."</li>
                    <li><strong>Focusing:</strong> "Let's talk more about the anxiety you mentioned."</li>
                    <li><strong>Validating Feelings:</strong> "That must be very difficult for you."</li>
                </ul>
                <p><strong>NCLEX Tip:</strong> Look for answers that encourage patient to express feelings or elaborate.</p>
            `
        },
        'nontherapeutic': {
            title: 'Non-Therapeutic Techniques ❌ AVOID',
            content: `
                <h4 class="hotspot-title">❌ Avoid These Techniques</h4>
                <ul>
                    <li><strong>Asking "Why?":</strong> Makes patient defensive (Use "What" or "How")</li>
                    <li><strong>False Reassurance:</strong> "Everything will be fine" (Dismissive)</li>
                    <li><strong>Giving Advice:</strong> "You should..." (Takes away autonomy)</li>
                    <li><strong>Changing Subject:</strong> Avoids patient's concerns</li>
                    <li><strong>Agreeing/Disagreeing:</strong> Takes sides, not therapeutic</li>
                    <li><strong>Minimizing:</strong> "It's not that bad..." (Belittling)</li>
                    <li><strong>Probing:</strong> Excessive questioning invades privacy</li>
                </ul>
                <p><strong>NCLEX Tip:</strong> If answer sounds like advice or reassurance → It's WRONG</p>
            `
        }
    },
    'defense': {
        'overview': {
            title: 'Defense Mechanisms',
            content: `
                <h4 class="hotspot-title">🛡️ Defense Mechanisms</h4>
                <p>Unconscious strategies the Ego uses to reduce anxiety and protect self-esteem.</p>
                <p><em>Click each category to learn specific mechanisms.</em></p>
            `
        },
        'healthy': {
            title: 'Healthy Defense Mechanisms 💚',
            content: `
                <h4 class="hotspot-title">💚 Healthy/Mature Defenses</h4>
                <ul>
                    <li><strong>Sublimation:</strong> Channeling unacceptable impulses into acceptable activities (angry → go to gym) - ALWAYS HEALTHY</li>
                    <li><strong>Altruism:</strong> Helping others to cope with own anxiety - ALWAYS HEALTHY</li>
                    <li><strong>Humor:</strong> Using comedy to cope (appropriate humor)</li>
                    <li><strong>Suppression:</strong> Consciously postponing dealing with stressor until later (adaptive)</li>
                </ul>
                <p><strong>Nursing Implication:</strong> Encourage these - they promote growth!</p>
            `
        },
        'intermediate': {
            title: 'Intermediate Defense Mechanisms 💛',
            content: `
                <h4 class="hotspot-title">💛 Intermediate/Neurotic Defenses</h4>
                <ul>
                    <li><strong>Repression:</strong> Unconsciously "forgetting" traumatic memories</li>
                    <li><strong>Displacement:</strong> Taking anger out on safer target (mad at boss → kick dog)</li>
                    <li><strong>Reaction Formation:</strong> Acting opposite of true feelings (hate someone → overly nice)</li>
                    <li><strong>Rationalization:</strong> Making excuses to justify behavior</li>
                    <li><strong>Intellectualization:</strong> Overanalyzing to avoid feeling emotions</li>
                </ul>
                <p><strong>Nursing Implication:</strong> May need exploration in therapy</p>
            `
        },
        'immature': {
            title: 'Immature Defense Mechanisms ❤️',
            content: `
                <h4 class="hotspot-title">❤️ Immature/Primitive Defenses</h4>
                <ul>
                    <li><strong>Denial:</strong> Refusing to accept reality ("I don't have a problem")</li>
                    <li><strong>Projection:</strong> Attributing own feelings to others ("You're angry at me" when THEY'RE angry)</li>
                    <li><strong>Splitting:</strong> Seeing everything as all-good or all-bad (common in Borderline PD)</li>
                    <li><strong>Regression:</strong> Reverting to childlike behavior under stress (adult throwing tantrum)</li>
                    <li><strong>Acting Out:</strong> Expressing conflict through actions instead of words (punching wall)</li>
                </ul>
                <p><strong>NCLEX Tip:</strong> Splitting = Borderline. Denial = Substance Use disorder.</p>
            `
        }
    },
    'mse': {
        'overview': {
            title: 'Mental Status Exam (MSE)',
            content: `
                <h4 class="hotspot-title">👩‍⚕️ Mental Status Exam</h4>
                <p>The "head-to-toe" assessment for psychiatric nursing. Assess these components in EVERY patient encounter.</p>
                <p><em>Click each component to learn what to assess.</em></p>
            `
        },
        'appearance': {
            title: 'Appearance',
            content: `
                <h4 class="hotspot-title">👔 Appearance</h4>
                <ul>
                    <li><strong>What to Assess:</strong> Grooming, hygiene, dress appropriate for weather/situation</li>
                    <li><strong>Example Normal:</strong> Clean, well-groomed, appropriately dressed</li>
                    <li><strong>Example Abnormal:</strong> Disheveled, poor hygiene (depression), bizarre dress (mania/psychosis)</li>
                </ul>
            `
        },
        'behavior': {
            title: 'Behavior & Motor Activity',
            content: `
                <h4 class="hotspot-title">🤝 Behavior</h4>
                <ul>
                    <li><strong>What to Assess:</strong> Eye contact, posture, psychomotor activity, tremors</li>
                    <li><strong>Hypoactive:</strong> Slowed, withdrawn (depression)</li>
                    <li><strong>Hyperactive:</strong> Pacing, agitation, restlessness (anxiety, mania, akathisia)</li>
                    <li><strong>Abnormal:</strong> Tremors, tics, catatonia</li>
                </ul>
            `
        },
        'speech': {
            title: 'Speech',
            content: `
                <h4 class="hotspot-title">🗣️ Speech</h4>
                <ul>
                    <li><strong>What to Assess:</strong> Rate, volume, tone</li>
                    <li><strong>Pressured Speech:</strong> Rapid, difficult to interrupt (mania)</li>
                    <li><strong>Slow/Monotone:</strong> Depression</li>
                    <li><strong>Mute:</strong> Severe depression or catatonia</li>
                </ul>
            `
        },
        'mood': {
            title: 'Mood & Affect',
            content: `
                <h4 class="hotspot-title">😊 Mood & Affect</h4>
                <ul>
                    <li><strong>Mood:</strong> SUBJECTIVE - "How do you feel?" (patient's words)</li>
                    <li><strong>Affect:</strong> OBJECTIVE - What YOU observe (facial expression, emotional display)</li>
                    <li><strong>Congruent:</strong> Mood matches affect (says sad, looks sad)</li>
                    <li><strong>Incongruent:</strong> Mood ≠ affect (laughing while discussing tragedy - schizophrenia)</li>
                    <li><strong>Flat/Blunted:</strong> No emotional expression (schizophrenia, depression)</li>
                </ul>
            `
        },
        'thought': {
            title: 'Thought Process & Content',
            content: `
                <h4 class="hotspot-title">💭 Thought Process</h4>
                <ul>
                    <li><strong>Process:</strong> HOW they think (logical vs disorganized)</li>
                    <li><strong>Flight of Ideas:</strong> Rapid topic changes (mania)</li>
                    <li><strong>Tangentiality:</strong> Never gets to the point</li>
                    <li><strong>Loose Associations:</strong> Illogical connections (schizophrenia)</li>
                    <li><strong>Content:</strong> WHAT they think</li>
                    <li><strong>Delusions:</strong> Fixed false beliefs</li>
                    <li><strong>Hallucinations:</strong> Sensory perceptions without stimulus</li>
                    <li><strong>Suicidal/Homicidal Ideation:</strong> ASSESS EVERY TIME</li>
                </ul>
            `
        },
        'cognition': {
            title: 'Cognition & Safety',
            content: `
                <h4 class="hotspot-title">🧠 Cognition</h4>
                <ul>
                    <li><strong>Orientation:</strong> Person, place, time, situation</li>
                    <li><strong>Memory:</strong> Immediate, recent, remote recall</li>
                    <li><strong>Attention/Concentration:</strong> Can they focus?</li>
                    <li><strong>Insight:</strong> Do they understand their illness?</li>
                    <li><strong>Judgment:</strong> Can they make safe decisions?</li>
                    <li><strong>PRIORITY:</strong> Suicide risk assessment ("Do you have a plan?")</li>
                </ul>
            `
        }
    }
};

// Open Diagram Hotspot Modal
window.openDiagramHotspot = function (diagramId, regionId) {
    const modal = document.getElementById('diagramModal');
    if (!modal) return;

    const data = diagramHotspotData[diagramId]?.[regionId];
    if (!data) {
        console.warn(`No data found for diagram: ${diagramId}, region: ${regionId}`);
        return;
    }

    const modalTitle = document.getElementById('modalTitle');
    const modalInfo = document.getElementById('modalInfo');
    const modalImage = document.getElementById('modalImage');

    modalTitle.textContent = data.title;
    modalInfo.innerHTML = data.content;

    // Hide image container for hotspot modals (we're showing text content instead)
    const imageContainer = document.querySelector('.diagram-modal-image-container');
    if (imageContainer) {
        imageContainer.style.display = 'none';
    }

    modal.classList.add('show', 'active');
    document.body.style.overflow = 'hidden';
};

// Diagram Modal
function initDiagramModal() {
    const modal = document.getElementById('diagramModal');
    if (!modal) return;

    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalInfo = document.getElementById('modalInfo');

    // Close Modal Helper
    window.closeImageModal = function () {
        modal.classList.remove('active', 'show');
        document.body.style.overflow = '';

        // Re-show image container for next modal
        const imageContainer = document.querySelector('.diagram-modal-image-container');
        if (imageContainer) {
            imageContainer.style.display = '';
        }
    };
}

// Case Study Logic
function initCaseStudy() {
    document.querySelectorAll('.reveal-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const parent = this.closest('.answer-reveal');
            if (parent) {
                parent.classList.add('revealed'); // CSS needs to show .answer-content
                this.style.display = 'none'; // Hide the button
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initMainTabs();
    initFlashcards();
    initTabs();
    initDiagramModal();
    initCaseStudy();

    // Force Learn Tab Active on Load to prevent "missing tabs" issue
    switchMainTab('learn');
});
