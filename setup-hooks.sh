#!/bin/bash
cat > .git/hooks/pre-push << 'EOF'
#!/bin/sh
npm run build
if [ $? -ne 0 ]; then
    echo "Build failed, aborting push"
    exit 1
fi
mkdir -p docs
rm -rf docs/*
cp -r build/client/* docs/
git add docs/
if git diff --cached --quiet docs/; then
    echo "No changes in docs/, skipping commit"
else
    git commit -m "Automated static build for GitHub Pages"
fi
EOF
chmod +x .git/hooks/pre-push
echo "Pre-push hook installed. It will build the app and commit static files to docs/ on each push."