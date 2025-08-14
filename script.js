// 模式定义
const modes = {
    creation: {
        name: "创作生成模式",
        description: "让大模型按照要求生成任意规则的文字、图像声音等素材",
        dimensions: "模型内部知识 × 你知道怎么做 × 确定性内容",
        scenarioName: "情景一",
        scenarioDescription: "你知道怎么做",
        scenarioAnswer: "答案主要基于模型内部知识",
        scenarioContent: "你希望生成确定性内容",
        showcaseContent: "<br><hr><br><br><b>营销文案创作</b><br>营销专员需要为环保智能手机设计标语<br>提示词： “为新型环保智能手机生成三条突出可持续性和创新的吸引人标语。”<br><br><b>平面设计</b><br>提示词： “生成一张现代办公室空间的图片，采用极简设计，包含自然光和绿色植物。”<br><br><b>视频脚本撰写</b>    <br>提示词： “撰写一段30秒的产品发布视频脚本，包括吸引观众的开头、产品特点和行动号召。”",
        showcaseSence:"<br><hr><br><br><b>文字：</b>让大模型生成任意指定规则的文案、材料<br><br><b>多模态：</b>让大模型根据语言描述，生成符合要求的图片、声音、视频等媒介素材，或通过编写代码实现任意计算机可显示、运行的形态内容",
        position: { x: 1, y: 1, z: 1 },
        color: 0xef4444
    },
    summary: {
        name: "总结整合模式",
        description: "让大模型对大量资料、文字进处理，总结提炼关键信息或对内容进行格式重构",
        dimensions: "用户输入资料 × 你知道怎么做 × 确定性内容",
        scenarioName: "情景二",
        scenarioDescription: "你知道怎么做",
        scenarioAnswer: "答案主要基于你提供的资料",
        scenarioContent: "你希望生成确定性内容",
        showcaseContent: "<br><hr><br><br><b>跨部门会议纪要精炼</b><br>提示词：“请将2小时产品迭代会议录音转化为会议纪要，提取5个关键决策事项，用'议题-结论-负责人-时间节点'四栏表格呈现。“<br><br><b>竞品分析报告整合</b><br>提示词：“请综合这10份新能源汽车行业报告，提炼2024年三大技术趋势，按'趋势描述-市场影响-我司机会'结构输出，每点不超过100字。“",
        showcaseSence: "<br><hr><br><br><b>总结信息：</b>让大模型对包含大量内容的文档和搜索结果进行总结，提炼梳理关键信息<br><br><b>整理信息：</b>让大模型对大段文字、图片中的信息进行提取整理，按照指定格式输出",
        position: { x: 1, y: 1, z: -1 },
        color: 0xf97316
    },
    analysis: {
        name: "分析研究模式",
        description: "让大模型识别文字内容中的情感、意图等，或基于提供的信息进行关系维度分析",
        dimensions: "用户输入资料 × 你知道怎么做 × 发散性内容",
        scenarioName: "情景三",
        scenarioDescription: "你知道怎么做",
        scenarioAnswer: "答案主要基于你提供的资料",
        scenarioContent: "你希望生成发散性内容",
        showcaseContent: "<br><hr><br><br><b>情感分析</b><br>提示词： “分析这些客户评论的情感，将其分类为正面、负面或中立，并突出主要主题。“<br><br><b>数据关联分析</b><br>提示词： “请观察这些数据的字段，告诉我可以做哪些维度的分析。“<br><br><b>意图识别</b><br>提示词： “确定这些用户搜索查询的主要意图，并提出改进电商网站搜索功能的建议。“",
        showcaseSence: "<br><hr><br><br><b>语义分析：</b>让大模型识别文字内容中的情感、意图等<br><br><b>数据分析：</b>让大模型根据给定的数据字段，进行多维度的关联分析，提供分析建议",
        position: { x: -1, y: 1, z: -1 },
        color: 0xf59e0b
    },
    inspiration: {
        name: "创意启发模式",
        description: "使用大模型生成内容的随机性和知识的广泛性，为我们提供源源不断的点子",
        dimensions: "模型内部知识 × 你知道怎么做 × 发散性内容",
        scenarioName: "情景四",
        scenarioDescription: "你知道怎么做",
        scenarioAnswer: "答案主要基于模型内部知识",
        scenarioContent: "你希望生成发散性内容",
        showcaseContent: "<br><hr><br><br><b>线下活动策划</b><br>提示词：“为新能源汽车品牌设计3个跨界营销方案，要求：①结合元宇宙元素 ②包含用户UGC机制 ③预算控制在50万内 ④给出ROI预估模型框架。“<br><br><b>产品命名脑暴</b><br>提示词：“为智能办公椅生成20个中英文命名，要求：①体现'健康'、'科技'要素 ②英文名可注册商标 ③中文名有记忆点 ④附命名依据说明。“",
        showcaseSence: "<br><hr><br><br><b>文字：</b>根据用户问题，给出创意方案启发<br><br><b>多媒体：</b>直接生成图片、视频或网页，给出布局、配色、元素呈现等维度的创意启发",
        position: { x: -1, y: 1, z: 1 },
        color: 0x84cc16
    },
    learning: {
        name: "提问学习模式",
        description: "基于大模型在训练语料中掌握的人类知识，向大模型提问学习任何问题",
        dimensions: "模型内部知识 × 你不知道怎么做 × 确定性内容",
        scenarioName: "情景五",
        scenarioDescription: "你不知道怎么做",
        scenarioAnswer: "答案主要基于模型内部知识",
        scenarioContent: "你希望生成确定性内容",
        showcaseContent: "<br><hr><br><br><b>案例1：新员工快速学习行业术语</b><br>提示词：“请用表格对比'私域流量'和'公域流量'的核心差异，要求包含定义、运营方式、典型平台、转化成本四个维度，并给出汽车行业的应用实例。“<br><br><b>海报风格介绍</b><br>提示词：“请解析我发送的图片，识别它的风格和主体内容，给出关于画风、布局、色彩和情绪表现几个方面的总结，以表格形式列出。”",
        showcaseSence: "<br><hr><br><br><b>文字：</b>基于大模型在训练语料中学习到的广泛知识，在任何时候向大模型提问学习<br><br><b>图像：</b>直接向大模型发送图片照片，让大模型基于图像识别理解能力，给出解释",
        position: { x: 1, y: -1, z: 1 },
        color: 0x22c55e
    },
    translation: {
        name: "翻译解读模式",
        description: "让大模型在翻译自己看不懂的语言、解读看不懂的报告",
        dimensions: "用户输入资料 × 你不知道怎么做 × 确定性内容",
        scenarioName: "情景六",
        scenarioDescription: "你不知道怎么做",
        scenarioAnswer: "答案主要基于你提供的资料",
        scenarioContent: "你希望生成确定性内容",
        showcaseContent: "<br><hr><br><br><b>代码解释</b><br>开发者需要理解并优化Python函数。<br>提示词： “解释这个Python函数的作用，并建议如何优化其性能。“<br><br><b>图像描述</b><br>无障碍设计专家需要为视障用户描述信息图。<br>提示词： “详细描述这张信息图的内容，以便视障用户能够理解。“",
        showcaseSence: "<br><hr><br><br><b>文字：</b>让大模型在人类语言之间进行翻译<br><br><b>文字：</b>让大模型在人类和计算机语言之间进行翻译（解释或生成程序代码）<br><br><b>图像：</b>让大模型识别理解图片内容，进行解释翻译",
        position: { x: 1, y: -1, z: -1 },
        color: 0x06b6d4
    },
    imitation: {
        name: "模仿参考模式",
        description: "让大模型模仿提供的内容或图像的风格、情绪、主体特征，输出相似内容",
        dimensions: "用户输入资料 × 你不知道怎么做 × 发散性内容",
        scenarioName: "情景七",
        scenarioDescription: "你不知道怎么做",
        scenarioAnswer: "答案主要基于你提供的资料",
        scenarioContent: "你希望生成发散性内容",
        showcaseContent: "<br><hr><br><br><b>文案语气匹配</b><br>文案撰写者需要匹配品牌的幽默和轻松语气。<br>提示词： “根据这份示例的幽默和轻松语气，撰写一段产品描述。“<br><br><b>图片风格模仿</b><br>设计师需要复现老照片的复古风格。<br>提示词： “生成一张模仿这张照片复古、棕褐色调风格的图片。“<br><br><b>语音克隆</b><br>提示词： “生成一段与此音频语调和节奏相匹配的语音样本，用于企业培训视频。“",
        showcaseSence: "<br><hr><br><br><b>常用于无法准确描述文字图像内容时：</b><br><br><b>文字：</b>让大模型模仿提供的内容中表现的风格、情绪等，输出相似文案<br><br><b>图像：</b>让大模型识别理解图片内容的风格、人物形象姿态等，输出相似图片",
        position: { x: -1, y: -1, z: -1 },
        color: 0x3b82f6
    },
    reflection: {
        name: "深思反问模式",
        description: "给定大模型一个思考问题的规则，让它能站在更高的维度思考问题，帮助人类思考",
        dimensions: "模型内部知识 × 你不知道怎么做 × 发散性内容",
        scenarioName: "情景八",
        scenarioDescription: "你不知道怎么做",
        scenarioAnswer: "答案主要基于模型内部知识",
        scenarioContent: "你希望生成发散性内容",
        showcaseContent: "<br><hr><br><br><b>反问思考/答辩模拟</b><br>提示词：“我正在设计一款…线上工具，主要目标用户是…。我现在要撰写产品立项书，请扮演一位资深的产品专家，使用苏格拉底式提问，通过提问的方式让我更好的思考产品的设计方法和价值呈现。每次只提一个问题。”",
        showcaseSence: "<br><hr><br><br><b>深思模式：</b>给定大模型一个思考问题的规则，让它能站在更高的维度思考问题，帮助人类思考<br><br><b>反问模式：</b>让大模型按照要求针对当下的困惑提出高质量问题，帮助人类思考。或开展面试、答辩等模拟对话。",
        position: { x: -1, y: -1, z: 1 },
        color: 0x8b5cf6
    }
};

// Three.js 情景设置
let scene, camera, renderer, cubes = [];
let currentMode = 'creation';
let currentTab = 'scenarios';
let axisLabels = [];

function init() {
    // 创建情景
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // 创建相机
    const container = document.getElementById('scene-container');
    const aspect = container.clientWidth / container.clientHeight;
    camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);

    // 创建渲染器
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // 创建坐标轴
    createAxes();

    // 创建立方体
    createCubes();

    // 添加灯光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // 处理窗口大小变化
    window.addEventListener('resize', onWindowResize);

    // 开始渲染循环
    animate();
}

function createAxes() {
    const axisLength = 4;
    
    // X轴 - 红色
    const xGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-axisLength, 0, 0),
        new THREE.Vector3(axisLength, 0, 0)
    ]);
    const xMaterial = new THREE.LineBasicMaterial({ color: 0xef4444 });
    const xAxis = new THREE.Line(xGeometry, xMaterial);
    scene.add(xAxis);

    // X轴标签（只显示正方向的）
    const label1 = createAxisLabel('生成确定性内容', new THREE.Vector3(axisLength + 0.5, 0, 0), 0xef4444);
    const label2 = createAxisLabel('生成发散性内容', new THREE.Vector3(-axisLength - 0.5, 0, 0), 0xef4444);
    axisLabels.push(label1, label2);

    // Y轴 - 绿色
    const yGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, -axisLength, 0),
        new THREE.Vector3(0, axisLength, 0)
    ]);
    const yMaterial = new THREE.LineBasicMaterial({ color: 0x22c55e });
    const yAxis = new THREE.Line(yGeometry, yMaterial);
    scene.add(yAxis);

    // Y轴标签（只显示正方向的）
    const label3 = createAxisLabel('你知道怎么做', new THREE.Vector3(0, axisLength + 0.5, 0), 0x22c55e);
    const label4 = createAxisLabel('你不知道怎么做', new THREE.Vector3(0, -axisLength - 0.5, 0), 0x22c55e);
    axisLabels.push(label3, label4);

    // Z轴 - 蓝色
    const zGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, -axisLength),
        new THREE.Vector3(0, 0, axisLength)
    ]);
    const zMaterial = new THREE.LineBasicMaterial({ color: 0x3b82f6 });
    const zAxis = new THREE.Line(zGeometry, zMaterial);
    scene.add(zAxis);

    // Z轴标签（只显示正方向的）
    const label5 = createAxisLabel('基于模型内部知识', new THREE.Vector3(0, 0, axisLength + 0.5), 0x3b82f6);
    const label6 = createAxisLabel('基于你提供的资料', new THREE.Vector3(0, 0, -axisLength - 0.5), 0x3b82f6);
    axisLabels.push(label5, label6);
}

function createAxisLabel(text, position, color) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 64;
    
    context.fillStyle = '#' + color.toString(16).padStart(6, '0');
    context.font = '24px sans-serif';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, 128, 32);
    
    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ map: texture });
    const sprite = new THREE.Sprite(material);
    sprite.position.copy(position);
    sprite.scale.set(2, 0.5, 1);
    scene.add(sprite);
    
    return sprite;
}

function createCubes() {
    Object.keys(modes).forEach(modeKey => {
        const mode = modes[modeKey];
        const geometry = new THREE.BoxGeometry(2.8, 2.8, 2.8);
        const material = new THREE.MeshLambertMaterial({ 
            color: mode.color,
            transparent: true,
            opacity: 0 // 初始透明度为0，因为默认是情景模式
        });
        
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(
            mode.position.x * 1.5,
            mode.position.y * 1.5,
            mode.position.z * 1.5
        );
        cube.userData = { modeKey };
        
        scene.add(cube);
        cubes.push({ mesh: cube, modeKey });
    });
}

function switchMode(modeKey) {
    currentMode = modeKey;
    
    // 更新立方体透明度
    cubes.forEach(({ mesh, modeKey: cubeMode }) => {
        if (currentTab === 'scenarios') {
            // 情景模式下所有立方体透明度为0
            mesh.material.opacity = 0;
        } else {
            // 模式模式下当前选中的立方体透明度为1，其他为0.3
            mesh.material.opacity = cubeMode === modeKey ? 1.0 : 0.3;
        }
    });
    
    // 旋转相机到对应视角
    const targetPosition = modes[modeKey].position;
    const distance = 5;
    const target = new THREE.Vector3(
        targetPosition.x * distance,
        targetPosition.y * distance,
        targetPosition.z * distance
    );
    
    animateCamera(target);
    
    // 更新信息面板
    updateInfoPanel(modeKey);
    
    // 更新按钮状态
    updateButtonStates(modeKey);
    
    // 更新坐标轴标签可见性
    updateAxisLabelsVisibility();
}

function animateCamera(targetPosition) {
    const startPosition = camera.position.clone();
    const duration = 1000; // 1秒
    const startTime = Date.now();
    
    function updateCamera() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // 使用缓动函数
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        camera.position.lerpVectors(startPosition, targetPosition, easeProgress);
        camera.lookAt(0, 0, 0);
        
        if (progress < 1) {
            requestAnimationFrame(updateCamera);
        }
    }
    
    updateCamera();
}

function updateInfoPanel(modeKey) {
    const mode = modes[modeKey];
    const modeTitle = document.getElementById('mode-title');
    
    if (currentTab === 'scenarios') {
        modeTitle.textContent = mode.scenarioName;
        modeTitle.style.color = '#' + mode.color.toString(16).padStart(6, '0');
        
        document.getElementById('mode-description').textContent = mode.scenarioDescription;
        document.getElementById('mode-dimensions').textContent = mode.scenarioAnswer + '，' + mode.scenarioContent;
        document.getElementById('mode-showcase-content').innerHTML = mode.showcaseSence;
    } else {
        modeTitle.textContent = mode.name;
        modeTitle.style.color = '#' + mode.color.toString(16).padStart(6, '0');
        
        document.getElementById('mode-description').textContent = mode.description;
        document.getElementById('mode-dimensions').textContent = mode.dimensions;
        document.getElementById('mode-showcase-content').innerHTML = mode.showcaseContent;
    }
}

function updateButtonStates(activeMode) {
    document.querySelectorAll('.mode-btn').forEach(btn => {
        if (btn.dataset.mode === activeMode) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    document.querySelectorAll('.scenario-btn').forEach(btn => {
        if (btn.dataset.mode === activeMode) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function switchTab(tabName) {
    currentTab = tabName;
    
    // 更新Tab按钮状态
    document.querySelectorAll('.tab-btn').forEach(btn => {
        if (btn.dataset.tab === tabName) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // 显示/隐藏对应面板
    const modesPanel = document.getElementById('modes-panel');
    const scenariosPanel = document.getElementById('scenarios-panel');
    
    if (tabName === 'scenarios') {
        modesPanel.style.display = 'none';
        scenariosPanel.style.display = 'grid';
    } else {
        modesPanel.style.display = 'grid';
        scenariosPanel.style.display = 'none';
    }
    
    // 更新立方体透明度
    cubes.forEach(({ mesh, modeKey: cubeMode }) => {
        if (currentTab === 'scenarios') {
            mesh.material.opacity = 0; // 情景模式下所有立方体透明度为0
        } else {
            mesh.material.opacity = cubeMode === currentMode ? 1.0 : 0.3;
        }
    });
    
    // 更新坐标轴标签可见性
    updateAxisLabelsVisibility();
    
    // 更新信息面板
    updateInfoPanel(currentMode);
}

function updateAxisLabelsVisibility() {
    if (currentTab === 'scenarios') {
        // 情景模式下根据当前选中的情景显示相关标签
        const currentPosition = modes[currentMode].position;
        
        // 根据当前情景的坐标决定显示哪些标签
        // X轴标签：根据x值决定显示生成确定性内容还是生成发散性内容
        axisLabels[0].visible = (currentPosition.x > 0); // 生成确定性内容
        axisLabels[1].visible = (currentPosition.x < 0); // 生成发散性内容
        
        // Y轴标签：根据y值决定显示你知道怎么做还是你不知道怎么做
        axisLabels[2].visible = (currentPosition.y > 0); // 你知道怎么做
        axisLabels[3].visible = (currentPosition.y < 0); // 你不知道怎么做
        
        // Z轴标签：根据z值决定显示基于模型内部知识还是基于你提供的资料
        axisLabels[4].visible = (currentPosition.z > 0); // 基于模型内部知识
        axisLabels[5].visible = (currentPosition.z < 0); // 基于你提供的资料
    } else {
        // 模式模式下显示所有标签
        axisLabels.forEach(label => {
            label.visible = true;
        });
    }
}

function onWindowResize() {
    const container = document.getElementById('scene-container');
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

function animate() {
    requestAnimationFrame(animate);
    
    // 移除情景旋转
    
    renderer.render(scene, camera);
}

// 初始化按钮事件监听器
document.addEventListener('DOMContentLoaded', () => {
    init();
    
    // 模式按钮事件
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const modeKey = btn.dataset.mode;
            switchMode(modeKey);
        });
    });
    
    // 情景按钮事件
    document.querySelectorAll('.scenario-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const modeKey = btn.dataset.mode;
            switchMode(modeKey);
        });
    });
    
    // Tab按钮事件
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;
            switchTab(tabName);
        });
    });
    
    // 设置初始模式和Tab
    switchMode('creation');
    switchTab('scenarios');
});
