const fs = require('fs');
const path = require('path');

function checkStandards(basePath) {
    const standardsPath = path.join(basePath, 'docs', 'standards');
    const requiredFiles = [
        'architecture.md', 'conventions.md', 'workflow.md', 
        'status-protocol.md', 'contribution.md', 'core-contribution.md'
    ];
    const errors = [];
    if (!fs.existsSync(standardsPath)) return ["Docs standards directory missing"];
    
    requiredFiles.forEach(f => {
        if (!fs.existsSync(path.join(standardsPath, f))) {
            errors.append(`Missing standard file: ${f}`);
        }
    });
    return errors;
}

function auditStructure(basePath) {
    const errors = [];
    function walk(dir) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                if (file.startsWith('.') || file === 'node_modules' || file === 'scripts') return;
                
                if (file.startsWith('RAK-') || file.startsWith('SR-') || file.startsWith('BK-') || file.startsWith('CH-')) {
                    if (!fs.existsSync(path.join(fullPath, 'README.md'))) {
                        errors.push(`Missing README.md in ${fullPath}`);
                    }
                    
                    if (file.startsWith('CH-')) {
                        if (!fs.existsSync(path.join(fullPath, 'assets'))) {
                            errors.push(`Missing 'assets/' folder in ${fullPath}`);
                        }
                        if (!fs.existsSync(path.join(fullPath, 'examples'))) {
                            errors.push(`Missing 'examples/' folder in ${fullPath}`);
                        }
                    }
                }
                walk(fullPath);
            }
        });
    }
    walk(basePath);
    return errors;
}

function main() {
    const basePath = path.dirname(__dirname);
    console.log(`--- Sentinel Audit (JS Edition) ---`);
    console.log(`Auditing: ${basePath}\n`);
    
    const errors = [...checkStandards(basePath), ...auditStructure(basePath)];
    
    if (errors.length === 0) {
        console.log("[PASS] Everything is perfectly standardized! (Gold Standard)");
    } else {
        console.log(`[FAIL] Found ${errors.length} inconsistencies:`);
        errors.forEach(err => console.log(` - ${err}`));
        process.exit(1);
    }
}

main();
