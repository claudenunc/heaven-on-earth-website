# Build Notes

## Known Issues

### Production Build Issue (Windows + Tailwind CSS v4)

There is currently a known issue with `npm run build` on Windows due to lightningcss native bindings with Tailwind CSS v4.

**Symptoms:**
```
Error: Cannot find module '../lightningcss.win32-x64-msvc.node'
```

**Workaround Options:**

1. **Development**: Use `npm run dev` - works perfectly
2. **Deploy to Vercel**: Vercel's build environment handles this correctly
3. **Temporary Fix**: Downgrade to Tailwind CSS v3 (not recommended, loses v4 features)

**Long-term Solution:**
This issue is being tracked in the Tailwind CSS GitHub repository. It should be resolved in an upcoming patch.

## Development Workflow

For now, develop locally with:
```bash
npm run dev
```

And deploy to Vercel for production builds, which handles the native bindings correctly.

## Alternative: Docker Build

If you need local production builds, consider using Docker with a Linux container:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

---

**Last Updated**: November 24, 2025
