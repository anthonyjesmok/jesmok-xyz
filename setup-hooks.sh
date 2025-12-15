#!/bin/bash
# Unset any custom hooks path (e.g., from Husky)
git config --unset core.hooksPath 2>/dev/null || true
cat > .git/hooks/pre-push << 'EOF'
#!/bin/sh
echo "Starting pre-push hook: building the app..."
npm run build
if [ $? -ne 0 ]; then
    echo "Build failed, aborting push"
    exit 1
fi
echo "Build successful, copying to out/..."
mkdir -p out
rm -rf out/*
cp -r build/client/* out/
git add out/
if git diff --cached --quiet out/; then
    echo "No changes in out/, skipping commit"
else
    echo "Committing changes to out/"
    git commit -m "Automated static build for GitHub Pages"
fi
echo "Pre-push hook completed."
EOF
chmod +x .git/hooks/pre-push
echo "Pre-push hook installed. It will build the app and commit static files to out/ on each push."