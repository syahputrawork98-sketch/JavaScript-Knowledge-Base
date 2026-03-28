const fs = require('fs');
const path = require('path');

/**
 * GS-Sentinel (Unified 6-Rack Auditor)
 * Version: 2.0.0 (PPM V4 Gold Standard)
 * Purpose: Ensures all knowledge assets strictly follow the Gold Standard architecture.
 */

const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    red: "\x1b[31m",
    cyan: "\x1b[36m"
};

const errors = [];
const successes = [];

function checkDocs(basePath) {
    const docsPath = path.join(basePath, 'docs');
    const requiredDocs = [
        'aesthetics-and-tone.md',
        'content-workflow.md',
        'contribution-guide.md',
        'repository-standards.md',
        'README.md'
    ];

    if (!fs.existsSync(docsPath)) {
        errors.push("[FATAL] Root 'docs/' directory is missing.");
        return;
    }

    requiredDocs.forEach(file => {
        if (!fs.existsSync(path.join(docsPath, file))) {
            errors.push(`[CORE] Missing standard pillar: docs/${file}`);
        } else {
            successes.push(`[CORE] Pillar found: docs/${file}`);
        }
    });
}

function checkRoot(basePath) {
    const requiredRoot = ['status.md', 'README.md'];
    requiredRoot.forEach(file => {
        if (!fs.existsSync(path.join(basePath, file))) {
            errors.push(`[CORE] Missing root asset: ${file}`);
        }
    });

    for (let i = 1; i <= 6; i++) {
        const rakName = `RAK-0${i}`;
        const rakDirs = fs.readdirSync(basePath).filter(d => d.startsWith(rakName));
        if (rakDirs.length === 0) {
            errors.push(`[ARCH] Missing required Rack: RAK-0${i}`);
        } else {
            successes.push(`[ARCH] Rack found: ${rakDirs[0]}`);
        }
    }
}

function auditREADME(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Strictness: Must have these 3 core pillars of PPM V4
    const requiredPatterns = [
        { name: 'Essence', regex: /Essence:/i },
        { name: 'Visual Logic', regex: /Visual Logic/i },
        { name: 'Under-the-hood', regex: /(Under-the-hood|Internal Mechanics)/i }
    ];

    requiredPatterns.forEach(p => {
        if (!p.regex.test(content)) {
            errors.push(`[CONTENT] Missing ${p.name} in ${filePath}`);
        }
    });
}

function scanRaks(basePath) {
    function walk(dir) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                // Ignore non-architectural folders
                if (file.startsWith('.') || ['node_modules', 'tools', 'assets', 'examples', 'docs'].includes(file)) return;

                // Check for RAK/SR/BK/CH folders
                if (file.match(/^(RAK-|SR-|BK-|CH-)/)) {
                    const readmePath = path.join(fullPath, 'README.md');
                    if (!fs.existsSync(readmePath)) {
                        errors.push(`[STRUCT] Missing README.md in ${fullPath}`);
                    } else {
                        // Perform content audit on architectural units
                        auditREADME(readmePath);
                    }
                }
                walk(fullPath);
            }
        });
    }
    
    const rakDirs = fs.readdirSync(basePath).filter(d => d.startsWith('RAK-'));
    rakDirs.forEach(rak => walk(path.join(basePath, rak)));
}

function main() {
    const basePath = path.dirname(__dirname);
    console.log(`\n${colors.cyan}${colors.bright}--- GS-Sentinel: Unified 6-Rack Auditor ---${colors.reset}`);
    console.log(`Auditing: ${colors.yellow}${basePath}${colors.reset}\n`);

    checkDocs(basePath);
    checkRoot(basePath);
    scanRaks(basePath);

    if (errors.length === 0) {
        console.log(`${colors.green}${colors.bright}[SUCCESS] 100% GOLD STANDARD COMPLIANCE REACHED! 🏆${colors.reset}`);
        console.log(`${colors.green}Evaluated ${successes.length} core units and found zero inconsistencies.${colors.reset}\n`);
    } else {
        console.log(`${colors.red}${colors.bright}[FAIL] Found ${errors.length} inconsistencies in your architecture:${colors.reset}`);
        errors.forEach((err, i) => console.log(` ${i + 1}. ${err}`));
        console.log(`\n${colors.yellow}Please fix the errors above to maintain 100% Gold Standard rigor.${colors.reset}\n`);
        process.exit(1);
    }
}

main();
