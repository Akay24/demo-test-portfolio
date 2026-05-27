<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->



<!-- BEGIN:portfolio-website-agent-rules -->
# Rules for Building the Portfolio Website

**Please read all rules before starting any task.**

## Project Structure

The project consists of three main parts:

1.  **`server`** - Python FastAPI backend
2.  **`client`** - React/Vite frontend
3.  **`testdemo`** - Root directory for both

### File Locations

**Backend (Python):**
- Main entry point: `server/main.py`
- API endpoints: `server/routers/*.py`
- MCP servers: `server/routers/mcp/*.py`
- Context7 client: `server/utils/context7_client.py`
- Skills: `server/mcp/skills/` directory

**Frontend (React):**
- Main entry point: `client/src/main.jsx`
- App component: `client/src/App.jsx`
- Routes: `client/src/routes/`
- Pages: `client/src/pages/`
- API client: `client/src/api/`
- Tools: `client/src/tools/`
- Components: `client/src/components/`
- Assets: `client/src/assets/`

**Configuration Files:**
- Python dependencies: `server/requirements.txt`
- Node dependencies: `client/package.json`
- `.env.local`: environment variables (create if missing)
- `config.json`: project configuration

## Development Workflow

### Backend Development

**Running the Server:**
```bash
cd server
uvicorn main:app --reload
```

**API Endpoints:**
- Base URL: `http://localhost:8000`
- Admin API: `http://localhost:8000/admin/`
- MCP API: `http://localhost:8000/mcp/`

**Dependencies:**
```bash
pip install -r server/requirements.txt
```

### Frontend Development

**Running the Client:**
```bash
cd client
npm install
npm run dev
```

**Access URLs:**
- Development: `http://localhost:5173` (may vary)
- Proxy: `http://localhost:5174` (if port 5173 is in use)

**API Proxying:**
- Set `VITE_API_URL=http://localhost:8000/admin/` in `.env.local`
- All API requests go through the proxy

### Configuration

Create `.env.local` in the `testdemo` directory with the following:
```env
# Backend configuration
PORT=8000

# MongoDB configuration (optional)
MONGODB_URI=mongodb://localhost:27017
MONGODB_DB=portfolio

# Email configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SENDER_EMAIL=your-email@gmail.com
```

The `config.json` file in the root contains project-wide settings.

## Coding Standards

### Backend Standards

**File Organization:**
- One API endpoint per file in `server/routers/`
- MCP servers in `server/routers/mcp/`
- Skills in `server/mcp/skills/`

**Naming Conventions:**
- Routers: `api_{feature}.py`
- Skills: `*.py` (no prefix)
- MCP servers: `*.py` (no prefix)

**Security:**
- Admin API uses HTTP Basic Auth
- Use environment variables for secrets
- Validate all input data
- Implement proper error handling

### Frontend Standards

**Component Structure:**
- Keep components small and focused
- Use functional components with hooks
- Separate concerns into different files
- Use TypeScript if types are available

**API Integration:**
```javascript
import api from '../api/axios';

// Fetch data
const response = await api.get('/items');

// Handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);
```

**State Management:**
- Use React Context for global state
- Use `useState` for local state
- Use `useReducer` for complex state logic

**Styling:**
- Use CSS Modules for component-specific styles
- Keep styles organized and maintainable
- Use CSS variables for theming

## Testing

### Backend Testing
```bash
cd server
python -m pytest
```

### Frontend Testing
```bash
cd client
npm test
```

## Documentation

### API Documentation

**Swagger UI:**
- Admin API: `http://localhost:8000/docs`
- MCP API: `http://localhost:8000/docs`

**ReDoc:**
- Admin API: `http://localhost:8000/redoc`
- MCP API: `http://localhost:8000/redoc`

### System Documentation

**Project Overview:**
- `.env.local` - Environment variables
- `config.json` - Project configuration

**Backend Documentation:**
- `AGENTS.md` - MCP server documentation
- `README.md` - Server-level documentation
- API router files - Endpoint-specific documentation

**Frontend Documentation:**
- `README.md` - Client-level documentation
- Route files - Page-specific documentation
- Component files - Component documentation
- API client - API integration documentation

### Example MCP Skill File
```python
# server/mcp/skills/example_skill.py

"""
Example Skill Module

This module demonstrates how to create an MCP skill.
"""

from fastapi import APIRouter
from typing import Dict, Any

# Create a router for this skill
router = APIRouter()

# Define MCP capabilities for this skill
mcp_capabilities = {
    "name": "example_skill",
    "description": "Demonstrates MCP skill functionality",
    "version": "1.0.0",
    "commands": [
        {
            "name": "run_example",
            "description": "Executes the example skill",
            "arguments": {
                "type": "object",
                "properties": {
                    "message": {
                        "type": "string",
                        "description": "A message to process"
                    }
                },
                "required": ["message"]
            }
        }
    ]
}

@router.post("/mcp/skills/example_skill/execute", response_model=Dict[str, Any])
async def execute_example_skill(command: Dict[str, Any]) -> Dict[str, Any]:
    """
    Execute the example skill
    
    Args:
        command: MCP command object
        
    Returns:
        Response with the result of the skill execution
    """
    try:
        # Get command name and parameters
        command_name = command.get("name")
        params = command.get("parameters", {})
        
        # Handle different commands
        if command_name == "run_example":
            message = params.get("message", "")
            
            # Process the message
            result = {
                "status": "success",
                "message": f"Processed: {message.upper()}",
                "timestamp": "2026-05-
