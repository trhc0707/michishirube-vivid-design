#!/bin/bash
cd /home/ubuntu/vivid-design/client/src

# Update .png and .jpg references to .webp
find . -type f -name "*.tsx" -exec sed -i \
  -e 's/hero-bg\.png/hero-bg.webp/g' \
  -e 's/logo\.png/logo.webp/g' \
  -e 's/problem1\.jpg/problem1.webp/g' \
  -e 's/problem2\.png/problem2.webp/g' \
  -e 's/problem3\.jpg/problem3.webp/g' \
  -e 's/feature1\.png/feature1.webp/g' \
  -e 's/feature2\.png/feature2.webp/g' \
  -e 's/feature3\.jpg/feature3.webp/g' \
  -e 's/feature4\.jpg/feature4.webp/g' \
  -e 's/resources-canada-seminar\.jpg/resources-canada-seminar.webp/g' \
  -e 's/resources-ai-guide-pdf\.jpg/resources-ai-guide-pdf.webp/g' \
  -e 's/resources-georgia-seminar\.jpg/resources-georgia-seminar.webp/g' \
  -e 's/resources-mexico-school\.jpg/resources-mexico-school.webp/g' \
  -e 's/resources-ai-implementation\.jpg/resources-ai-implementation.webp/g' \
  {} \;

echo "✓ Updated all image references to WebP format"
