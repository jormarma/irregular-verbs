// ========================================
// IRREGULAR VERBS DATABASE - 18 LEVELS
// ========================================
// 90 verbs organized into 18 levels of 5 verbs each

const STAGE_VERBS = {
    1: [
        { base: "be", past: "was/were", participle: "been", spanish: "ser/estar" },
        { base: "have", past: "had", participle: "had", spanish: "tener" },
        { base: "do", past: "did", participle: "done", spanish: "hacer" },
        { base: "say", past: "said", participle: "said", spanish: "decir" },
        { base: "go", past: "went", participle: "gone", spanish: "ir" }
    ],
    2: [
        { base: "get", past: "got", participle: "gotten", spanish: "obtener" },
        { base: "make", past: "made", participle: "made", spanish: "hacer" },
        { base: "know", past: "knew", participle: "known", spanish: "saber/conocer" },
        { base: "think", past: "thought", participle: "thought", spanish: "pensar" },
        { base: "take", past: "took", participle: "taken", spanish: "tomar" }
    ],
    3: [
        { base: "see", past: "saw", participle: "seen", spanish: "ver" },
        { base: "come", past: "came", participle: "come", spanish: "venir" },
        { base: "give", past: "gave", participle: "given", spanish: "dar" },
        { base: "find", past: "found", participle: "found", spanish: "encontrar" },
        { base: "tell", past: "told", participle: "told", spanish: "decir/contar" }
    ],
    4: [
        { base: "become", past: "became", participle: "become", spanish: "convertirse" },
        { base: "leave", past: "left", participle: "left", spanish: "dejar/salir" },
        { base: "feel", past: "felt", participle: "felt", spanish: "sentir" },
        { base: "bring", past: "brought", participle: "brought", spanish: "traer" },
        { base: "begin", past: "began", participle: "begun", spanish: "empezar" }
    ],
    5: [
        { base: "keep", past: "kept", participle: "kept", spanish: "mantener" },
        { base: "hold", past: "held", participle: "held", spanish: "sostener" },
        { base: "write", past: "wrote", participle: "written", spanish: "escribir" },
        { base: "stand", past: "stood", participle: "stood", spanish: "estar de pie" },
        { base: "hear", past: "heard", participle: "heard", spanish: "oír" }
    ],
    6: [
        { base: "let", past: "let", participle: "let", spanish: "dejar/permitir" },
        { base: "mean", past: "meant", participle: "meant", spanish: "significar" },
        { base: "set", past: "set", participle: "set", spanish: "poner/establecer" },
        { base: "meet", past: "met", participle: "met", spanish: "conocer/encontrar" },
        { base: "run", past: "ran", participle: "run", spanish: "correr" }
    ],
    7: [
        { base: "pay", past: "paid", participle: "paid", spanish: "pagar" },
        { base: "sit", past: "sat", participle: "sat", spanish: "sentarse" },
        { base: "speak", past: "spoke", participle: "spoken", spanish: "hablar" },
        { base: "lie", past: "lay", participle: "lain", spanish: "yacer/acostarse" },
        { base: "lead", past: "led", participle: "led", spanish: "liderar/guiar" }
    ],
    8: [
        { base: "read", past: "read", participle: "read", spanish: "leer" },
        { base: "grow", past: "grew", participle: "grown", spanish: "crecer" },
        { base: "lose", past: "lost", participle: "lost", spanish: "perder" },
        { base: "fall", past: "fell", participle: "fallen", spanish: "caer" },
        { base: "send", past: "sent", participle: "sent", spanish: "enviar" }
    ],
    9: [
        { base: "build", past: "built", participle: "built", spanish: "construir" },
        { base: "understand", past: "understood", participle: "understood", spanish: "entender" },
        { base: "draw", past: "drew", participle: "drawn", spanish: "dibujar" },
        { base: "break", past: "broke", participle: "broken", spanish: "romper" },
        { base: "spend", past: "spent", participle: "spent", spanish: "gastar" }
    ],
    10: [
        { base: "cut", past: "cut", participle: "cut", spanish: "cortar" },
        { base: "rise", past: "rose", participle: "risen", spanish: "levantarse" },
        { base: "drive", past: "drove", participle: "driven", spanish: "conducir" },
        { base: "buy", past: "bought", participle: "bought", spanish: "comprar" },
        { base: "wear", past: "wore", participle: "worn", spanish: "llevar puesto" }
    ],
    11: [
        { base: "choose", past: "chose", participle: "chosen", spanish: "elegir" },
        { base: "seek", past: "sought", participle: "sought", spanish: "buscar" },
        { base: "throw", past: "threw", participle: "thrown", spanish: "lanzar" },
        { base: "catch", past: "caught", participle: "caught", spanish: "atrapar" },
        { base: "teach", past: "taught", participle: "taught", spanish: "enseñar" }
    ],
    12: [
        { base: "win", past: "won", participle: "won", spanish: "ganar" },
        { base: "forget", past: "forgot", participle: "forgotten", spanish: "olvidar" },
        { base: "fight", past: "fought", participle: "fought", spanish: "pelear" },
        { base: "fly", past: "flew", participle: "flown", spanish: "volar" },
        { base: "eat", past: "ate", participle: "eaten", spanish: "comer" }
    ],
    13: [
        { base: "drink", past: "drank", participle: "drunk", spanish: "beber" },
        { base: "swim", past: "swam", participle: "swum", spanish: "nadar" },
        { base: "blow", past: "blew", participle: "blown", spanish: "soplar" },
        { base: "steal", past: "stole", participle: "stolen", spanish: "robar" },
        { base: "ride", past: "rode", participle: "ridden", spanish: "montar" }
    ],
    14: [
        { base: "wake", past: "woke", participle: "woken", spanish: "despertar" },
        { base: "hide", past: "hid", participle: "hidden", spanish: "esconder" },
        { base: "bite", past: "bit", participle: "bitten", spanish: "morder" },
        { base: "shake", past: "shook", participle: "shaken", spanish: "sacudir" },
        { base: "hang", past: "hung", participle: "hung", spanish: "colgar" }
    ],
    15: [
        { base: "hit", past: "hit", participle: "hit", spanish: "golpear" },
        { base: "hurt", past: "hurt", participle: "hurt", spanish: "herir" },
        { base: "shine", past: "shone", participle: "shone", spanish: "brillar" },
        { base: "shoot", past: "shot", participle: "shot", spanish: "disparar" },
        { base: "show", past: "showed", participle: "shown", spanish: "mostrar" }
    ],
    16: [
        { base: "shut", past: "shut", participle: "shut", spanish: "cerrar" },
        { base: "sing", past: "sang", participle: "sung", spanish: "cantar" },
        { base: "sink", past: "sank", participle: "sunk", spanish: "hundir" },
        { base: "slide", past: "slid", participle: "slid", spanish: "deslizar" },
        { base: "smell", past: "smelt", participle: "smelt", spanish: "oler" }
    ],
    17: [
        { base: "sell", past: "sold", participle: "sold", spanish: "vender" },
        { base: "spell", past: "spelt", participle: "spelt", spanish: "deletrear" },
        { base: "stick", past: "stuck", participle: "stuck", spanish: "pegar" },
        { base: "strike", past: "struck", participle: "struck", spanish: "golpear" },
        { base: "swear", past: "swore", participle: "sworn", spanish: "jurar" }
    ],
    18: [
        { base: "tear", past: "tore", participle: "torn", spanish: "rasgar" },
        { base: "weep", past: "wept", participle: "wept", spanish: "llorar" },
        { base: "bend", past: "bent", participle: "bent", spanish: "doblar" },
        { base: "bet", past: "bet", participle: "bet", spanish: "apostar" },
        { base: "cost", past: "cost", participle: "cost", spanish: "costar" }
    ]
};

// ========================================
// GAME STATE
// ========================================
const gameState = {
    currentStage: 1,
    stages: {},
    currentQuestions: [],
    currentQuestionIndex: 0,
    currentAnswer: '',
    stageStartTime: null,
    timerInterval: null,
    timeLimit: 5 * 60 * 1000, // 5 minutes in milliseconds
    isShowingFeedback: false,
    retryQueue: [],
    isRetryPhase: false
};

// Initialize stages
for (let i = 1; i <= 18; i++) {
    gameState.stages[i] = {
        unlocked: i === 1,
        completed: false,
        bestTime: null
    };
}

// ========================================
// STORAGE FUNCTIONS
// ========================================
function loadGameData() {
    const saved = localStorage.getItem('irregularVerbsGame');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            if (data.stages) {
                Object.keys(data.stages).forEach(stage => {
                    if (gameState.stages[stage]) {
                        gameState.stages[stage].bestTime = data.stages[stage].bestTime;
                        gameState.stages[stage].completed = data.stages[stage].completed;
                        gameState.stages[stage].unlocked = data.stages[stage].unlocked;
                    }
                });
            }
        } catch (e) {
            console.error('Error loading saved data:', e);
        }
    }
}

function saveGameData() {
    const dataToSave = {
        stages: gameState.stages
    };
    localStorage.setItem('irregularVerbsGame', JSON.stringify(dataToSave));
}

// ========================================
// THREE.JS SCENE SETUP
// ========================================
let scene, camera, renderer, particles, shapes;

function initThreeJS() {
    const canvas = document.getElementById('bg-canvas');
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00d4ff, 1, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff00ff, 1, 100);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    shapes = [];
    const geometries = [
        new THREE.BoxGeometry(2, 2, 2),
        new THREE.SphereGeometry(1.5, 32, 32),
        new THREE.TorusGeometry(1, 0.4, 16, 100),
        new THREE.OctahedronGeometry(1.5)
    ];

    for (let i = 0; i < 15; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const material = new THREE.MeshStandardMaterial({
            color: Math.random() * 0xffffff,
            metalness: 0.5,
            roughness: 0.5,
            transparent: true,
            opacity: 0.6
        });

        const shape = new THREE.Mesh(geometry, material);
        shape.position.set(
            (Math.random() - 0.5) * 50,
            (Math.random() - 0.5) * 50,
            (Math.random() - 0.5) * 30
        );
        shape.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        );
        shape.userData.rotationSpeed = {
            x: (Math.random() - 0.5) * 0.02,
            y: (Math.random() - 0.5) * 0.02,
            z: (Math.random() - 0.5) * 0.02
        };

        shapes.push(shape);
        scene.add(shape);
    }

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.1,
        transparent: true,
        opacity: 0.6
    });

    particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    window.addEventListener('resize', onWindowResize);
    animate();
}

function animate() {
    requestAnimationFrame(animate);

    shapes.forEach(shape => {
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;
    });

    particles.rotation.y += 0.0005;

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function celebrateWithParticles() {
    const colors = [0xff00ff, 0x00ffff, 0xffff00, 0xff0000, 0x00ff00];

    for (let i = 0; i < 50; i++) {
        const geometry = new THREE.SphereGeometry(0.2, 8, 8);
        const material = new THREE.MeshBasicMaterial({
            color: colors[Math.floor(Math.random() * colors.length)]
        });
        const particle = new THREE.Mesh(geometry, material);

        particle.position.set(0, 0, 20);
        particle.userData.velocity = {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2,
            z: (Math.random() - 0.5) * 2
        };

        scene.add(particle);

        let frame = 0;
        const animateParticle = () => {
            frame++;
            particle.position.x += particle.userData.velocity.x;
            particle.position.y += particle.userData.velocity.y;
            particle.position.z += particle.userData.velocity.z;
            particle.userData.velocity.y -= 0.05;

            if (frame < 60) {
                requestAnimationFrame(animateParticle);
            } else {
                scene.remove(particle);
            }
        };
        animateParticle();
    }
}

// ========================================
// TIMER FUNCTIONS
// ========================================
function startTimer() {
    gameState.stageStartTime = Date.now();

    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }

    gameState.timerInterval = setInterval(updateTimer, 100);
}

function stopTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }
}

function updateTimer() {
    const elapsed = Date.now() - gameState.stageStartTime;
    const remaining = gameState.timeLimit - elapsed;

    if (remaining <= 0) {
        stopTimer();
        showTimesUpScreen();
    } else {
        const minutes = Math.floor(remaining / 60000);
        const seconds = Math.floor((remaining % 60000) / 1000);
        const ms = Math.floor((remaining % 1000) / 100);

        const timerEl = document.getElementById('timer-display');
        if (timerEl) {
            timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}.${ms}`;

            // Warning color when under 1 minute
            if (remaining < 60000) {
                timerEl.style.color = '#ff6b6b';
            } else {
                timerEl.style.color = '#00ff88';
            }
        }
    }
}

function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// ========================================
// STAGE SELECTOR
// ========================================
function initStageSelector() {
    const container = document.getElementById('stage-buttons');
    container.innerHTML = '';

    for (let i = 1; i <= 18; i++) {
        const btn = document.createElement('button');
        btn.className = 'stage-btn';
        btn.dataset.stage = i;
        btn.textContent = i;

        const stageData = gameState.stages[i];

        if (stageData.completed) {
            btn.classList.add('completed');
        } else if (stageData.unlocked) {
            btn.classList.add('unlocked');
            if (i === gameState.currentStage) {
                btn.classList.add('current');
            }
        } else {
            btn.classList.add('locked');
            btn.disabled = true;
        }

        btn.onclick = () => selectStage(i);
        container.appendChild(btn);
    }
}

function selectStage(stageNum) {
    if (!gameState.stages[stageNum].unlocked) return;

    gameState.currentStage = stageNum;
    startStage();
}

// ========================================
// QUESTION GENERATION
// ========================================
function generateQuestions(stageNum) {
    const verbs = STAGE_VERBS[stageNum];
    const questions = [];

    verbs.forEach(verb => {
        // Question for past simple
        questions.push({
            verb: verb,
            type: 'past',
            questionEn: "What's the past simple?",
            questionEs: "¿Cuál es el pasado simple?",
            correctAnswer: verb.past.toLowerCase()
        });

        // Question for past participle
        questions.push({
            verb: verb,
            type: 'participle',
            questionEn: "What's the past participle?",
            questionEs: "¿Cuál es el participio pasado?",
            correctAnswer: verb.participle.toLowerCase()
        });
    });

    // Shuffle questions
    return questions.sort(() => Math.random() - 0.5);
}

// ========================================
// VIRTUAL KEYBOARD
// ========================================
function generateKeyboardForQuestion(verb) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Collect all unique letters from this verb's forms (base, past, participle)
    const verbLetters = new Set();
    const allText = (verb.base + verb.past + verb.participle).toLowerCase();
    for (const char of allText) {
        if (/[a-z]/.test(char)) {
            verbLetters.add(char);
        }
    }

    // Get consonants from verb letters
    const verbConsonants = [...verbLetters].filter(c => !vowels.includes(c));

    // Add exactly 2 random consonants as distractors
    const allConsonants = 'bcdfghjklmnpqrstvwxyz'.split('');
    const availableConsonants = allConsonants.filter(c => !verbConsonants.includes(c));
    const randomCount = Math.min(2, availableConsonants.length);

    for (let i = 0; i < randomCount; i++) {
        const randomIndex = Math.floor(Math.random() * availableConsonants.length);
        verbConsonants.push(availableConsonants[randomIndex]);
        availableConsonants.splice(randomIndex, 1);
    }

    // Sort consonants alphabetically
    verbConsonants.sort();

    return { vowels, consonants: verbConsonants };
}

function renderKeyboard(verb) {
    const { vowels, consonants } = generateKeyboardForQuestion(verb);

    // Render vowels
    const vowelsContainer = document.getElementById('keyboard-vowels');
    vowelsContainer.innerHTML = '';
    vowels.forEach(letter => {
        const btn = document.createElement('button');
        btn.className = 'key-btn vowel-key';
        btn.textContent = letter;
        btn.onclick = () => typeLetter(letter);
        vowelsContainer.appendChild(btn);
    });

    // Render consonants
    const consonantsContainer = document.getElementById('keyboard-consonants');
    consonantsContainer.innerHTML = '';
    consonants.forEach(letter => {
        const btn = document.createElement('button');
        btn.className = 'key-btn consonant-key';
        btn.textContent = letter;
        btn.onclick = () => typeLetter(letter);
        consonantsContainer.appendChild(btn);
    });
}

function typeLetter(letter) {
    gameState.currentAnswer += letter;
    updateAnswerDisplay();
}

function clearAnswer() {
    gameState.currentAnswer = '';
    updateAnswerDisplay();
}

function backspace() {
    gameState.currentAnswer = gameState.currentAnswer.slice(0, -1);
    updateAnswerDisplay();
}

function updateAnswerDisplay() {
    const input = document.getElementById('answer-input');
    if (input) {
        input.value = gameState.currentAnswer;
    }
}

// ========================================
// GAME FLOW
// ========================================
function startGame() {
    loadGameData();
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('stage-select-screen').classList.remove('hidden');
    initStageSelector();
}

function startStage() {
    document.getElementById('stage-select-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');

    gameState.currentQuestions = generateQuestions(gameState.currentStage);
    gameState.currentQuestionIndex = 0;
    gameState.currentAnswer = '';
    gameState.isShowingFeedback = false;
    gameState.retryQueue = [];
    gameState.isRetryPhase = false;

    // Hide feedback from any previous level
    document.getElementById('feedback').classList.add('hidden');

    updateStageInfo();
    startTimer();
    showQuestion();
}

function updateStageInfo() {
    document.getElementById('stage-number').textContent = `Level ${gameState.currentStage}`;

    if (gameState.isRetryPhase) {
        const retryCount = gameState.currentQuestionIndex + 1;
        const totalRetries = gameState.currentQuestions.length;
        document.getElementById('question-counter').textContent = `Retry ${retryCount} / ${totalRetries}`;
    } else {
        document.getElementById('question-counter').textContent = `Question ${gameState.currentQuestionIndex + 1} / 10`;
    }
}

function showQuestion() {
    const question = gameState.currentQuestions[gameState.currentQuestionIndex];

    document.getElementById('verb-base').textContent = question.verb.base;

    // Show/hide Spanish verb translation based on language mode
    const verbSpanishEl = document.getElementById('verb-spanish');
    if (isBilingual) {
        verbSpanishEl.textContent = `(${question.verb.spanish})`;
        verbSpanishEl.style.display = '';
    } else {
        verbSpanishEl.style.display = 'none';
    }

    // Show question text based on language mode
    const questionText = isBilingual
        ? `${question.questionEn} / ${question.questionEs}`
        : question.questionEn;
    document.getElementById('question-text').textContent = questionText;

    // Render keyboard for this specific question
    renderKeyboard(question.verb);

    gameState.currentAnswer = '';
    updateAnswerDisplay();
}

function submitAnswer() {
    // Prevent multiple submissions while feedback is showing
    if (gameState.isShowingFeedback) {
        return;
    }

    const question = gameState.currentQuestions[gameState.currentQuestionIndex];
    const userAnswer = gameState.currentAnswer.toLowerCase().trim();
    const correctAnswer = question.correctAnswer;

    const feedback = document.getElementById('feedback');

    // Handle "was/were" and similar cases
    const correctAnswers = correctAnswer.split('/').map(a => a.trim());
    const isCorrect = correctAnswers.includes(userAnswer);

    // Show feedback briefly (non-blocking)
    if (isCorrect) {
        feedback.textContent = isBilingual ? 'Correct! / ¡Correcto! 🎉' : 'Correct! 🎉';
        feedback.className = 'feedback correct';
    } else {
        // Incorrect answer - add to retry queue
        gameState.retryQueue.push(question);
        const incorrectText = isBilingual ? 'Incorrect. The answer is:' : 'Incorrect. The answer is:';
        feedback.innerHTML = `${incorrectText} <span class="correct-answer-highlight">${correctAnswer}</span>`;
        feedback.className = 'feedback incorrect';
    }
    feedback.classList.remove('hidden');

    // Hide feedback after a brief moment
    setTimeout(() => {
        feedback.classList.add('hidden');
    }, 1200);

    // Immediately advance to next question
    gameState.currentQuestionIndex++;

    // Check if we need to transition to retry phase or complete stage
    if (gameState.currentQuestionIndex >= gameState.currentQuestions.length) {
        // Finished current batch of questions
        if (gameState.retryQueue.length > 0) {
            // Start retry phase with all wrong answers
            gameState.isRetryPhase = true;
            gameState.currentQuestions = [...gameState.retryQueue];
            gameState.retryQueue = [];
            gameState.currentQuestionIndex = 0;
            updateStageInfo();
            showQuestion();
        } else {
            // All questions answered correctly - complete stage
            completeStage();
        }
    } else {
        // Continue with next question immediately
        updateStageInfo();
        showQuestion();
    }
}

function completeStage() {
    stopTimer();

    const elapsed = Date.now() - gameState.stageStartTime;
    const stage = gameState.currentStage;

    gameState.stages[stage].completed = true;

    if (!gameState.stages[stage].bestTime || elapsed < gameState.stages[stage].bestTime) {
        gameState.stages[stage].bestTime = elapsed;
    }

    if (stage < 18) {
        gameState.stages[stage + 1].unlocked = true;
    }

    saveGameData();
    showCompletionScreen(stage, elapsed);
}

function showCompletionScreen(stage, time) {
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('completion-screen').classList.remove('hidden');

    const bestTime = gameState.stages[stage].bestTime;
    const isNewRecord = time === bestTime;

    document.getElementById('completion-stage').textContent = stage;
    document.getElementById('completion-time').textContent = formatTime(time);
    document.getElementById('completion-best').textContent = formatTime(bestTime);

    if (isNewRecord) {
        document.getElementById('completion-best').innerHTML += ' 🏆';
    }

    celebrateWithParticles();
}

function showTimesUpScreen() {
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('timesup-screen').classList.remove('hidden');
}

function continueAfterCompletion() {
    document.getElementById('completion-screen').classList.add('hidden');
    document.getElementById('stage-select-screen').classList.remove('hidden');
    initStageSelector();
}

function retryAfterTimesUp() {
    document.getElementById('timesup-screen').classList.add('hidden');
    startStage();
}

function backToStages() {
    document.getElementById('timesup-screen').classList.add('hidden');
    document.getElementById('stage-select-screen').classList.remove('hidden');
    initStageSelector();
}

function backToLanguageSelection() {
    document.getElementById('stage-select-screen').classList.add('hidden');
    document.getElementById('language-screen').classList.remove('hidden');
}

// ========================================
// QUIT FUNCTIONALITY
// ========================================
function showQuitModal() {
    document.getElementById('quit-modal').classList.remove('hidden');
}

function hideQuitModal() {
    document.getElementById('quit-modal').classList.add('hidden');
}

function confirmQuit() {
    stopTimer();
    hideQuitModal();
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('stage-select-screen').classList.remove('hidden');
    initStageSelector();
}

// ========================================
// LANGUAGE SELECTION
// ========================================
let isBilingual = true;

function selectLanguage(bilingual) {
    isBilingual = bilingual;
    applyLanguageMode();
    document.getElementById('language-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
}

function applyLanguageMode() {
    // Toggle Spanish text visibility
    const spanishTexts = document.querySelectorAll('.spanish-text');
    spanishTexts.forEach(el => {
        el.style.display = isBilingual ? '' : 'none';
    });

    // Update bilingual labels to English-only or combined
    const bilingualElements = document.querySelectorAll('[data-en][data-es]');
    bilingualElements.forEach(el => {
        if (isBilingual) {
            el.textContent = el.getAttribute('data-en') + ' / ' + el.getAttribute('data-es');
        } else {
            el.textContent = el.getAttribute('data-en');
        }
    });

    // Update input placeholder
    const answerInput = document.getElementById('answer-input');
    if (answerInput) {
        const placeholderEn = answerInput.getAttribute('data-placeholder-en');
        const placeholderEs = answerInput.getAttribute('data-placeholder-es');
        if (placeholderEn && placeholderEs) {
            answerInput.placeholder = isBilingual
                ? `${placeholderEn} / ${placeholderEs}`
                : placeholderEn;
        }
    }
}

// ========================================
// EVENT LISTENERS
// ========================================
document.getElementById('lang-bilingual').addEventListener('click', () => selectLanguage(true));
document.getElementById('lang-english').addEventListener('click', () => selectLanguage(false));
document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('submit-btn').addEventListener('click', submitAnswer);
document.getElementById('clear-btn').addEventListener('click', clearAnswer);
document.getElementById('backspace-btn').addEventListener('click', backspace);
document.getElementById('quit-btn').addEventListener('click', showQuitModal);
document.getElementById('quit-cancel-btn').addEventListener('click', hideQuitModal);
document.getElementById('quit-confirm-btn').addEventListener('click', confirmQuit);
document.getElementById('continue-btn').addEventListener('click', continueAfterCompletion);
document.getElementById('retry-btn').addEventListener('click', retryAfterTimesUp);
document.getElementById('back-btn').addEventListener('click', backToStages);
document.getElementById('back-to-language-btn').addEventListener('click', backToLanguageSelection);

// Allow Enter key to submit
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !document.getElementById('game-screen').classList.contains('hidden')) {
        submitAnswer();
    }
});

// ========================================
// INITIALIZE
// ========================================
initThreeJS();
loadGameData();

