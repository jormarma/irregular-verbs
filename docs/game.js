// ========================================
// IRREGULAR VERBS DATABASE - 18 LEVELS
// ========================================
// 87 verbs organized into 18 levels following the standard irregular verb list

const STAGE_VERBS = {
    1: [
        { base: "be", past: "was/were", participle: "been", spanish: "ser/estar" },
        { base: "beat", past: "beat", participle: "beaten", spanish: "golpear/vencer" },
        { base: "become", past: "became", participle: "become", spanish: "convertirse" },
        { base: "begin", past: "began", participle: "begun", spanish: "empezar" },
        { base: "bite", past: "bit", participle: "bitten", spanish: "morder" }
    ],
    2: [
        { base: "blow", past: "blew", participle: "blown", spanish: "soplar" },
        { base: "break", past: "broke", participle: "broken", spanish: "romper" },
        { base: "bring", past: "brought", participle: "brought", spanish: "traer" },
        { base: "burn", past: "burnt/burned", participle: "burnt/burned", spanish: "quemar" },
        { base: "build", past: "built", participle: "built", spanish: "construir" }
    ],
    3: [
        { base: "buy", past: "bought", participle: "bought", spanish: "comprar" },
        { base: "catch", past: "caught", participle: "caught", spanish: "atrapar" },
        { base: "choose", past: "chose", participle: "chosen", spanish: "elegir" },
        { base: "come", past: "came", participle: "come", spanish: "venir" },
        { base: "cost", past: "cost", participle: "cost", spanish: "costar" }
    ],
    4: [
        { base: "cut", past: "cut", participle: "cut", spanish: "cortar" },
        { base: "do", past: "did", participle: "done", spanish: "hacer" },
        { base: "draw", past: "drew", participle: "drawn", spanish: "dibujar" },
        { base: "dream", past: "dreamt/dreamed", participle: "dreamt/dreamed", spanish: "soñar" },
        { base: "drink", past: "drank", participle: "drunk", spanish: "beber" }
    ],
    5: [
        { base: "drive", past: "drove", participle: "driven", spanish: "conducir" },
        { base: "eat", past: "ate", participle: "eaten", spanish: "comer" },
        { base: "fall", past: "fell", participle: "fallen", spanish: "caer" },
        { base: "feed", past: "fed", participle: "fed", spanish: "alimentar" },
        { base: "feel", past: "felt", participle: "felt", spanish: "sentir" }
    ],
    6: [
        { base: "fight", past: "fought", participle: "fought", spanish: "pelear" },
        { base: "find", past: "found", participle: "found", spanish: "encontrar" },
        { base: "fly", past: "flew", participle: "flown", spanish: "volar" },
        { base: "forget", past: "forgot", participle: "forgotten", spanish: "olvidar" },
        { base: "forgive", past: "forgave", participle: "forgiven", spanish: "perdonar" }
    ],
    7: [
        { base: "freeze", past: "froze", participle: "frozen", spanish: "congelar" },
        { base: "get", past: "got", participle: "got", spanish: "obtener" },
        { base: "give", past: "gave", participle: "given", spanish: "dar" },
        { base: "go", past: "went", participle: "gone/been", spanish: "ir" },
        { base: "grow", past: "grew", participle: "grown", spanish: "crecer" }
    ],
    8: [
        { base: "hang", past: "hung", participle: "hung", spanish: "colgar" },
        { base: "have", past: "had", participle: "had", spanish: "tener" },
        { base: "hear", past: "heard", participle: "heard", spanish: "oír" },
        { base: "hide", past: "hid", participle: "hidden", spanish: "esconder" },
        { base: "hit", past: "hit", participle: "hit", spanish: "golpear" }
    ],
    9: [
        { base: "hold", past: "held", participle: "held", spanish: "sostener" },
        { base: "hurt", past: "hurt", participle: "hurt", spanish: "herir" },
        { base: "keep", past: "kept", participle: "kept", spanish: "mantener" },
        { base: "know", past: "knew", participle: "known", spanish: "saber/conocer" },
        { base: "lead", past: "led", participle: "led", spanish: "liderar/guiar" }
    ],
    10: [
        { base: "learn", past: "learnt/learned", participle: "learnt/learned", spanish: "aprender" },
        { base: "leave", past: "left", participle: "left", spanish: "dejar/salir" },
        { base: "lend", past: "lent", participle: "lent", spanish: "prestar" },
        { base: "let", past: "let", participle: "let", spanish: "dejar/permitir" },
        { base: "lie", past: "lay", participle: "lain", spanish: "yacer/acostarse" }
    ],
    11: [
        { base: "lose", past: "lost", participle: "lost", spanish: "perder" },
        { base: "make", past: "made", participle: "made", spanish: "hacer" },
        { base: "meet", past: "met", participle: "met", spanish: "conocer/encontrar" },
        { base: "pay", past: "paid", participle: "paid", spanish: "pagar" },
        { base: "put", past: "put", participle: "put", spanish: "poner" }
    ],
    12: [
        { base: "read", past: "read", participle: "read", spanish: "leer" },
        { base: "ride", past: "rode", participle: "ridden", spanish: "montar" },
        { base: "ring", past: "rang", participle: "rung", spanish: "sonar/llamar" },
        { base: "run", past: "ran", participle: "run", spanish: "correr" },
        { base: "say", past: "said", participle: "said", spanish: "decir" }
    ],
    13: [
        { base: "see", past: "saw", participle: "seen", spanish: "ver" },
        { base: "sell", past: "sold", participle: "sold", spanish: "vender" },
        { base: "send", past: "sent", participle: "sent", spanish: "enviar" },
        { base: "set", past: "set", participle: "set", spanish: "poner/establecer" },
        { base: "shake", past: "shook", participle: "shaken", spanish: "sacudir" }
    ],
    14: [
        { base: "shine", past: "shone", participle: "shone", spanish: "brillar" },
        { base: "show", past: "showed", participle: "shown", spanish: "mostrar" },
        { base: "shut", past: "shut", participle: "shut", spanish: "cerrar" },
        { base: "sing", past: "sang", participle: "sung", spanish: "cantar" },
        { base: "sit", past: "sat", participle: "sat", spanish: "sentarse" }
    ],
    15: [
        { base: "sleep", past: "slept", participle: "slept", spanish: "dormir" },
        { base: "speak", past: "spoke", participle: "spoken", spanish: "hablar" },
        { base: "spell", past: "spelt/spelled", participle: "spelt/spelled", spanish: "deletrear" },
        { base: "spend", past: "spent", participle: "spent", spanish: "gastar" },
        { base: "stand", past: "stood", participle: "stood", spanish: "estar de pie" }
    ],
    16: [
        { base: "steal", past: "stole", participle: "stolen", spanish: "robar" },
        { base: "swim", past: "swam", participle: "swum", spanish: "nadar" },
        { base: "take", past: "took", participle: "taken", spanish: "tomar" },
        { base: "teach", past: "taught", participle: "taught", spanish: "enseñar" }
    ],
    17: [
        { base: "tell", past: "told", participle: "told", spanish: "decir/contar" },
        { base: "think", past: "thought", participle: "thought", spanish: "pensar" },
        { base: "throw", past: "threw", participle: "thrown", spanish: "lanzar" },
        { base: "understand", past: "understood", participle: "understood", spanish: "entender" }
    ],
    18: [
        { base: "wake", past: "woke", participle: "woken", spanish: "despertar" },
        { base: "wear", past: "wore", participle: "worn", spanish: "llevar puesto" },
        { base: "win", past: "won", participle: "won", spanish: "ganar" },
        { base: "write", past: "wrote", participle: "written", spanish: "escribir" }
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
        const totalQuestions = STAGE_VERBS[gameState.currentStage].length * 2;
        document.getElementById('question-counter').textContent = `Question ${gameState.currentQuestionIndex + 1} / ${totalQuestions}`;
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

