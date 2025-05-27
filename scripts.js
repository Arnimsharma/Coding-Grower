let problems = [
    {
        number: 1,
        name: "Two Sum",
        difficulty: "easy",
        tags: ["array", "hash-table"],
        solution: "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        unordered_map<int, int> mp;\n        int complement;\n        int n = nums.size();\n        for(int i = 0; i<n; i++){\n            complement = target-nums[i];\n            if(mp.find(complement) != mp.end()){\n                return {mp[complement], i};\n        }\n            mp[nums[i]] = i;\n        }        return {};\n    }\n};",
        explanation: "",
        videoLink: "https://youtu.be/NHHQlCty7Vg?si=LwS4MX2Vi-BI7X5T",
        favorite: false,
        solved: false
    },
    {
        number: 1857,
        name: "Largest Color Value in a Directed Graph",
        difficulty: "hard",
        tags: ["Graph", "Dynamic Programming"],
        solution: "class Solution {\npublic:\n    int largestPathValue(string colors, vector<vector<int>>& edges) {\n        //color size\n        int n = colors.size();\n        vector<vector<int>> adj(n);\n        vector<int> indegree(n);\n        //graph, indegree\n        for(auto& e : edges){\n            adj[e[0]].push_back(e[1]);\n            indegree[e[1]]++;\n        }\n              queue<int> q;\n        for(int i = 0; i<n; i++){\n            if(indegree[i] == 0) q.push(i);\n        }\n        vector<array<int, 26>> \ndp(n);\n        for(int i = 0; i<n; i++)\n            dp[i].fill(0);\n                    int seen = 0, ans = 0;\n            //topology\n            while(!q.empty()){\n                int u = q.front(); q.pop();\n                seen++;\n                int c = colors[u] - 'a';\n                dp[u][c]++;\n                ans = max(ans, dp[u][c]);\n                for(int v : adj[u]){\n                    for(int k = 0; k<26; k++){\n                        dp[v][k] = max(dp[v][k], dp[u][k]);\n                    }\n                        if(--indegree[v] == 0) q.push(v);\n                    }\n            }\n        return seen == n ? ans : -1;    }\n};",
        explanation: "",
        videoLink: "https://youtu.be/zteeOYhqeAE?si=gqiELNNE-g5Sbmc7",
        favorite: false,
        solved: false
    },
    {
        number: 2894,
        name: "Divisible and Non-divisible Sums Difference",
        difficulty: "easy",
        tags: ["Maths"],
        solution: "class Solution {\npublic:\n    int differenceOfSums(int n, int m) {\n        int k = n/m;\n\n        return n*(n+1)/2 - m * (k * (k+1));\n    }\n};",
        explanation: "",
        videoLink: "https://youtu.be/Z-oEFXGseEM?si=CznsETQDMx6k-St4",
        favorite: false,
        solved: false
    },
    // {
    //     number: 2,
    //     name: "Reverse Linked List",
    //     difficulty: "easy",
    //     tags: ["linked-list", "recursion"],
    //     solution: "function reverseList(head) {\n    let prev = null;\n    let current = head;\n    while (current !== null) {\n        let next = current.next;\n        current.next = prev;\n        prev = current;\n        current = next;\n    }\n    return prev;\n}",
    //     explanation: "To reverse a linked list, we iterate through it and reverse the direction of each pointer. We use three pointers: prev (initially null), current (starts at head), and next (to store the next node before we lose it). Time complexity: O(n), Space complexity: O(1).",
    //     videoLink: "https://youtube.com/watch?v=G0_I-ZF0S38",
    //     favorite: false,
    //     solved: false
    // },
    //{
    //     number: 3,
    //     name: "Valid Parentheses",
    //     difficulty: "easy",
    //     tags: ["stack", "string"],
    //     solution: "function isValid(s) {\n    const stack = [];\n    const mapping = {')': '(', '}': '{', ']': '['};\n    \n    for (let char of s) {\n        if (char in mapping) {\n            if (stack.length === 0 || stack.pop() !== mapping[char]) {\n                return false;\n            }\n        } else {\n            stack.push(char);\n        }\n    }\n    return stack.length === 0;\n}",
    //     explanation: "This classic stack problem uses a stack to track opening brackets. When we encounter a closing bracket, we check if it matches the most recent opening bracket. If all brackets are properly matched, the stack will be empty at the end. Time complexity: O(n), Space complexity: O(n).",
    //     videoLink: "https://youtube.com/watch?v=WTzjTskDFMg",
    //     favorite: false,
    //     solved: false
    // },
    // {
    //     number: 4,
    //     name: "Binary Tree Inorder Traversal",
    //     difficulty: "easy",
    //     tags: ["tree", "stack", "recursion"],
    //     solution: "function inorderTraversal(root) {\n    const result = [];\n    \n    function inorder(node) {\n        if (node !== null) {\n            inorder(node.left);\n            result.push(node.val);\n            inorder(node.right);\n        }\n    }\n    \n    inorder(root);\n    return result;\n}",
    //     explanation: "Inorder traversal visits nodes in left-root-right order. We recursively traverse the left subtree, visit the root, then traverse the right subtree. For binary search trees, this gives us values in ascending order. Time complexity: O(n), Space complexity: O(h) where h is height.",
    //     videoLink: "https://youtube.com/watch?v=WLvU5EQVZqY",
    //     favorite: false,
    //     solved: false
    // },
    // {
    //     number: 5,
    //     name: "Maximum Subarray",
    //     difficulty: "medium",
    //     tags: ["array", "dynamic-programming"],
    //     solution: "function maxSubArray(nums) {\n    let maxSoFar = nums[0];\n    let maxEndingHere = nums[0];\n    \n    for (let i = 1; i < nums.length; i++) {\n        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);\n        maxSoFar = Math.max(maxSoFar, maxEndingHere);\n    }\n    \n    return maxSoFar;\n}",
    //     explanation: "Kadane's algorithm solves this in O(n) time. At each position, we decide whether to extend the existing subarray or start a new one. We keep track of the maximum sum seen so far. This is a classic dynamic programming approach.",
    //     videoLink: "https://youtube.com/watch?v=5WZl3MMT0Eg",
    //     favorite: false,
    //     solved: false
    // },
    // {
    //     number: 6,
    //     name: "Merge Two Sorted Lists",
    //     difficulty: "easy",
    //     tags: ["linked-list", "recursion"],
    //     solution: "function mergeTwoLists(list1, list2) {\n    const dummy = new ListNode(0);\n    let current = dummy;\n    \n    while (list1 !== null && list2 !== null) {\n        if (list1.val <= list2.val) {\n            current.next = list1;\n            list1 = list1.next;\n        } else {\n            current.next = list2;\n            list2 = list2.next;\n        }\n        current = current.next;\n    }\n    \n    current.next = list1 || list2;\n    return dummy.next;\n}",
    //     explanation: "We use a dummy node to simplify the logic. Compare the heads of both lists and attach the smaller one to our result. Continue until one list is exhausted, then attach the remaining list. Time complexity: O(m + n), Space complexity: O(1).",
    //     videoLink: "https://youtube.com/watch?v=XIdigk956u0",
    //     favorite: false,
    //     solved: false
    // },
    // {
    //     number: 7,
    //     name: "Climbing Stairs",
    //     difficulty: "easy",
    //     tags: ["dynamic-programming", "math"],
    //     solution: "function climbStairs(n) {\n    if (n <= 2) return n;\n    \n    let prev2 = 1;\n    let prev1 = 2;\n    \n    for (let i = 3; i <= n; i++) {\n        let current = prev1 + prev2;\n        prev2 = prev1;\n        prev1 = current;\n    }\n    \n    return prev1;\n}",
    //     explanation: "This is essentially the Fibonacci sequence! To reach step n, you can either come from step n-1 (taking 1 step) or step n-2 (taking 2 steps). So f(n) = f(n-1) + f(n-2). We optimize space by only keeping track of the last two values.",
    //     videoLink: "https://youtube.com/watch?v=Y0lT9Fck7qI",
    //     favorite: false,
    //     solved: false
    // },
    // {
    //     number: 8,
    //     name: "Best Time to Buy and Sell Stock",
    //     difficulty: "easy",
    //     tags: ["array", "dynamic-programming"],
    //     solution: "function maxProfit(prices) {\n    let minPrice = prices[0];\n    let maxProfit = 0;\n    \n    for (let i = 1; i < prices.length; i++) {\n        if (prices[i] < minPrice) {\n            minPrice = prices[i];\n        } else if (prices[i] - minPrice > maxProfit) {\n            maxProfit = prices[i] - minPrice;\n        }\n    }\n    \n    return maxProfit;\n}",
    //     explanation: "We track the minimum price seen so far and the maximum profit we can achieve. For each price, we either update our minimum price or calculate the profit if we sell at current price. Time complexity: O(n), Space complexity: O(1).",
    //     videoLink: "https://youtube.com/watch?v=1pkOgXD63yU",
    //     favorite: false,
    //     solved: false
    // }
];

let filteredProblems = [...problems];
let currentView = 'list';
let showingFavorites = false;

// Utility function to escape HTML
function escapeHTML(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    createBackgroundParticles();
    renderProblems();
    updateResultsCount('');
    updateStats();
    setupFormHandler();
});

// Create animated background particles
function createBackgroundParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size and position
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay and duration
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Search functionality
function searchProblems() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredProblems = showingFavorites ? problems.filter(p => p.favorite) : [...problems];
    } else {
        const baseProblems = showingFavorites ? problems.filter(p => p.favorite) : problems;
        filteredProblems = baseProblems.filter(problem => 
            problem.number.toString().includes(searchTerm) ||
            problem.name.toLowerCase().includes(searchTerm) ||
            problem.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
            problem.difficulty.toLowerCase().includes(searchTerm)
        );
    }
    
    applyFilters();
    renderProblems();
    updateResultsCount(searchTerm);
}

// Clear search
function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('difficultyFilter').value = '';
    document.getElementById('tagFilter').value = '';
    showingFavorites = false;
    filteredProblems = [...problems];
    renderProblems();
    updateResultsCount('');
}

// Filter problems by difficulty and tags
function filterProblems() {
    const difficultyFilter = document.getElementById('difficultyFilter').value;
    const tagFilter = document.getElementById('tagFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    let baseProblems = showingFavorites ? problems.filter(p => p.favorite) : [...problems];
    
    // Apply search filter
    if (searchTerm) {
        baseProblems = baseProblems.filter(problem => 
            problem.number.toString().includes(searchTerm) ||
            problem.name.toLowerCase().includes(searchTerm) ||
            problem.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
            problem.difficulty.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply difficulty filter
    if (difficultyFilter) {
        baseProblems = baseProblems.filter(problem => problem.difficulty === difficultyFilter);
    }
    
    // Apply tag filter
    if (tagFilter) {
        baseProblems = baseProblems.filter(problem => problem.tags.includes(tagFilter));
    }
    
    filteredProblems = baseProblems;
    renderProblems();
    updateResultsCount(searchTerm);
}

// Apply current filters
function applyFilters() {
    const difficultyFilter = document.getElementById('difficultyFilter').value;
    const tagFilter = document.getElementById('tagFilter').value;
    
    if (difficultyFilter) {
        filteredProblems = filteredProblems.filter(problem => problem.difficulty === difficultyFilter);
    }
    
    if (tagFilter) {
        filteredProblems = filteredProblems.filter(problem => problem.tags.includes(tagFilter));
    }
}

// Show only favorite problems
function showFavorites() {
    showingFavorites = !showingFavorites;
    const btn = event.target;
    
    if (showingFavorites) {
        btn.textContent = '📋 Show All';
        btn.style.background = 'rgba(239, 68, 68, 0.2)';
        filteredProblems = problems.filter(p => p.favorite);
    } else {
        btn.textContent = '⭐ Show Favorites';
        btn.style.background = 'rgba(255, 255, 255, 0.15)';
        filteredProblems = [...problems];
    }
    
    renderProblems();
    updateResultsCount('');
}

// Set view mode
function setView(viewType) {
    const container = document.getElementById('problemsContainer');
    container.className = 'problems-grid list-view';
    currentView = 'list';
    renderProblems();
}

// Update results count display
function updateResultsCount(searchTerm) {
    const resultsCount = document.getElementById('resultsCount');
    const favoriteText = showingFavorites ? ' favorite' : '';
    
    if (searchTerm === '') {
        resultsCount.textContent = `Showing ${filteredProblems.length}${favoriteText} problems`;
    } else {
        resultsCount.textContent = `Found ${filteredProblems.length}${favoriteText} problem(s) matching "${searchTerm}"`;
    }
}

// Update statistics
function updateStats() {
    document.getElementById('totalProblems').textContent = problems.length;
    document.getElementById('favoriteCount').textContent = problems.filter(p => p.favorite).length;
    document.getElementById('solvedCount').textContent = problems.filter(p => p.solved).length;
}

// Toggle favorite status
function toggleFavorite(problemNumber) {
    const problem = problems.find(p => p.number === problemNumber);
    if (problem) {
        problem.favorite = !problem.favorite;
        renderProblems();
        updateStats();
        
        // Show notification
        showNotification(
            problem.favorite ? '⭐ Added to favorites!' : '💔 Removed from favorites!',
            problem.favorite ? 'success' : 'info'
        );
    }
}

// Toggle solved status
function toggleSolved(problemNumber) {
    const problem = problems.find(p => p.number === problemNumber);
    if (problem) {
        problem.solved = !problem.solved;
        renderProblems();
        updateStats();
        
        // Show notification
        showNotification(
            problem.solved ? '🎉 Marked as solved!' : '📝 Marked as unsolved!',
            problem.solved ? 'success' : 'info'
        );
    }
}

// Copy solution to clipboard
async function copySolution(problemNumber) {
    const problem = problems.find(p => p.number === problemNumber);
    if (problem) {
        try {
            await navigator.clipboard.writeText(problem.solution);
            const btn = document.querySelector(`[data-copy="${problemNumber}"]`);
            const originalText = btn.textContent;
            btn.textContent = '✅ Copied!';
            btn.classList.add('copied');
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.remove('copied');
            }, 2000);
            
            showNotification('📋 Solution copied to clipboard!', 'success');
        } catch (err) {
            showNotification('❌ Failed to copy solution!', 'error');
        }
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 25px',
        borderRadius: '25px',
        color: 'white',
        fontWeight: '600',
        zIndex: '9999',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
    });
    
    // Set background color based on type
    if (type === 'success') {
        notification.style.background = 'linear-gradient(45deg, #10b981, #059669)';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(45deg, #ef4444, #dc2626)';
    } else {
        notification.style.background = 'linear-gradient(45deg, #3b82f6, #2563eb)';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Render problems
function renderProblems() {
    const container = document.getElementById('problemsContainer');
    
    if (filteredProblems.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>🔍 No problems found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filteredProblems.map((problem, index) => {
        const compactClass = '';
        const cardDelay = `style="animation-delay: ${index * 0.1}s"`;
        
        return `
            <div class="problem-card ${compactClass}" ${cardDelay}>
                <div class="problem-header">
                    <div class="problem-number">Problem #${problem.number}</div>
                    <div class="difficulty-badge difficulty-${problem.difficulty}">
                        ${problem.difficulty}
                    </div>
                </div>
                
                <h3 class="problem-name">${problem.name}</h3>
                
                <div class="tags-container">
                    ${problem.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                
                <div class="solution-section">
                    <div class="section-header">
                        <div class="section-title">
                            💡 Solution
                        </div>
                        <button class="copy-btn" data-copy="${problem.number}" onclick="copySolution(${problem.number})">
                            📋 Copy
                        </button>
                    </div>
                    <div class="solution-text"><pre><code>${escapeHTML(problem.solution)}</code></pre></div>
                </div>
                
                <div class="solution-section">
                    <div class="section-title">📚 Explanation</div>
                    <div class="explanation-text">${problem.explanation}</div>
                </div>
                
                <div class="action-buttons">
                    ${problem.videoLink ? `
                        <a href="${problem.videoLink}" target="_blank" class="video-link">
                            🎥 Watch Video
                        </a>
                    ` : ''}
                    
                    <button class="action-btn favorite ${problem.favorite ? 'active' : ''}" 
                            onclick="toggleFavorite(${problem.number})">
                        ${problem.favorite ? '❤️' : '🤍'} Favorite
                    </button>
                    
                    <button class="action-btn ${problem.solved ? 'solved' : ''}" 
                            onclick="toggleSolved(${problem.number})"
                            style="background: linear-gradient(45deg, ${problem.solved ? '#10b981, #059669' : '#6b7280, #4b5563'});">
                        ${problem.solved ? '✅' : '📝'} ${problem.solved ? 'Solved' : 'Mark Solved'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Modal functions
function openAddModal() {
    document.getElementById('problemModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('problemModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    document.getElementById('problemForm').reset();
}

// Setup form handler
function setupFormHandler() {
    const form = document.getElementById('problemForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const newProblem = {
                number: parseInt(document.getElementById('problemNumber').value),
                name: document.getElementById('problemName').value,
                difficulty: document.getElementById('problemDifficulty').value,
                tags: document.getElementById('problemTags').value.split(',').map(tag => tag.trim()).filter(tag => tag),
                solution: document.getElementById('problemSolution').value,
                explanation: document.getElementById('problemExplanation').value,
                videoLink: document.getElementById('problemVideo').value || null,
                favorite: false,
                solved: false
            };
            
            // Check if problem number already exists
            if (problems.find(p => p.number === newProblem.number)) {
                showNotification('❌ Problem number already exists!', 'error');
                return;
            }
            
            problems.push(newProblem);
            problems.sort((a, b) => a.number - b.number);
            filteredProblems = [...problems];
            
            renderProblems();
            updateStats();
            updateResultsCount('');
            closeModal();
            
            showNotification('🎉 Problem added successfully!', 'success');
        });
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('problemModal');
    if (modal && event.target === modal) {
        closeModal();
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Escape key closes modal
    if (e.key === 'Escape') {
        closeModal();
    }
    
    // Ctrl/Cmd + K focuses search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
    
    // Ctrl/Cmd + N opens add modal
    if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
        e.preventDefault();
        openAddModal();
    }
});

// Smooth scroll behavior for better UX
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top functionality
window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        if (!document.querySelector('.scroll-top-btn')) {
            const scrollBtn = document.createElement('button');
            scrollBtn.className = 'scroll-top-btn';
            scrollBtn.innerHTML = '↑';
            scrollBtn.onclick = smoothScrollToTop;
            
            Object.assign(scrollBtn.style, {
                position: 'fixed',
                bottom: '100px',
                right: '30px',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: 'none',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                fontSize: '1.2rem',
                cursor: 'pointer',
                zIndex: '99',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            });
            
            scrollBtn.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
            });
            
            scrollBtn.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
            
            document.body.appendChild(scrollBtn);
        }
    } else {
        const scrollBtn = document.querySelector('.scroll-top-btn');
        if (scrollBtn) {
            scrollBtn.remove();
        }
    }
});

// Export/Import functionality
function exportProblems() {
    const dataStr = JSON.stringify(problems, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'problems-export.json';
    link.click();
    URL.revokeObjectURL(url);
    showNotification('📥 Problems exported successfully!', 'success');
}

function importProblems(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedProblems = JSON.parse(e.target.result);
            if (Array.isArray(importedProblems)) {
                problems = importedProblems;
                filteredProblems = [...problems];
                renderProblems();
                updateStats();
                updateResultsCount('');
                showNotification('📤 Problems imported successfully!', 'success');
            } else {
                throw new Error('Invalid format');
            }
        } catch (error) {
            showNotification('❌ Invalid file format!', 'error');
        }
    };
    reader.readAsText(file);
}

// Initialize everything when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        createBackgroundParticles();
        renderProblems();
        updateResultsCount('');
        updateStats();
        setupFormHandler();
    });
} else {
    createBackgroundParticles();
    renderProblems();
    updateResultsCount('');
    updateStats();
    setupFormHandler();
}
