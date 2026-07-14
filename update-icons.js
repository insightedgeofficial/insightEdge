const fs = require('fs');
const path = require('path');

const mappings = {
  "LucideIcon": "Icon",
  "ChevronRight": "CaretRight",
  "ChevronLeft": "CaretLeft",
  "ChevronDown": "CaretDown",
  "ChevronUp": "CaretUp",
  "Menu": "List",
  "Search": "MagnifyingGlass",
  "CheckCircle2": "CheckCircle",
  "BarChart3": "ChartBar",
  "DollarSign": "CurrencyDollar",
  "Loader2": "Spinner",
  "Mail": "Envelope",
  "Building2": "Buildings",
  "Rocket": "RocketLaunch",
  "PanelLeft": "SidebarSimple",
  "BrainCircuit": "Brain",
  "PersonStanding": "Person",
  "BadgeCheck": "SealCheck",
  "TrendingUp": "TrendUp",
  "Instagram": "InstagramLogo",
  "Linkedin": "LinkedinLogo",
  "Youtube": "YoutubeLogo",
  "Facebook": "FacebookLogo",
  "ExternalLink": "ArrowSquareOut"
};

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath, callback);
    } else {
      callback(fullPath);
    }
  });
}

walk('./src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('lucide-react')) {
      content = content.replace(/['"]lucide-react['"]/g, "'@phosphor-icons/react'");
      for (const [key, value] of Object.entries(mappings)) {
        const regex = new RegExp('\\b' + key + '\\b', 'g');
        content = content.replace(regex, value);
      }
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
