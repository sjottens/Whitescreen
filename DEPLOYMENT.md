# Deployment Guide - TestaScreen

## 🚀 Quick Start Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the official Next.js hosting platform. It provides:
- Automatic deployments from Git
- Edge Functions support
- Built-in Analytics
- DDoS protection
- 99.95% SLA

#### Setup

1. **Create Vercel Account**
   ```bash
   npm i -g vercel
   vercel login
   ```

2. **Deploy**
   ```bash
   # First deployment
   vercel
   
   # Production deployment
   vercel --prod
   ```

3. **Configure Environment**
   - Go to Vercel dashboard
   - Settings → Environment Variables
   - Add `NEXT_PUBLIC_SITE_URL`
   - Add `NEXT_PUBLIC_GA_ID` if using analytics

4. **Custom Domain**
   - Settings → Domains
   - Add your domain (e.g., TestaScreen.eu)
   - Configure DNS (CNAME or A record)

#### Performance Optimization on Vercel

- **Automatic Image Optimization**: Enabled by default
- **Edge Caching**: Configured in next.config.js
- **ISR (Incremental Static Regeneration)**: 60s for blog posts
- **Edge Functions**: For dynamic OG images

#### Monitoring

- **Vercel Analytics**: Real user metrics
- **Speed Insights**: Core Web Vitals
- **Error Tracking**: Built-in error logging

---

### Option 2: Docker + Self-Hosting

#### Dockerfile

```dockerfile
# Dockerfile - Build for production

# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source
COPY . .

# Build Next.js
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Install dependencies only
COPY package.json package-lock.json ./
RUN npm ci --production

# Copy built application
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start application
CMD ["npm", "start"]
```

#### Docker Compose

```yaml
# docker-compose.yml

version: '3.8'

services:
  app:
    build: .
    container_name: whitescreen-app
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_SITE_URL=https://TestaScreen.eu
    restart: always
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

  nginx:
    image: nginx:alpine
    container_name: whitescreen-nginx
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./ssl:/etc/nginx/ssl:ro
    depends_on:
      - app
    restart: always
```

#### Build and Run

```bash
# Build image
docker build -t whitescreen:latest .

# Run container
docker run -p 3000:3000 -e NEXT_PUBLIC_SITE_URL=https://TestaScreen.eu TestaScreen:latest

# Using Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f app
```

---

### Option 3: Cloud Platforms

#### AWS (EC2 + CloudFront)

```bash
# SSH into EC2 instance
ssh -i key.pem ubuntu@your-instance-ip

# Install Node.js
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone repository
git clone https://github.com/yourusername/whitescreen.git
cd whitescreen

# Install and build
npm install
npm run build

# Start with PM2
npm install -g pm2
pm2 start npm --name "whitescreen" -- start
pm2 save
pm2 startup
```

#### Google Cloud Platform (Cloud Run)

```bash
# Authenticate
gcloud auth login

# Set project
gcloud config set project YOUR_PROJECT_ID

# Build and deploy
gcloud run deploy whitescreen \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

#### Railway.app

```bash
# Connect GitHub account
# Select repository
# Railway automatically detects Next.js
# Configure environment variables
# Deploy with git push
```

---

## 🔧 Environment Configuration

### Production Environment Variables

```env
# Site Configuration
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://TestaScreen.eu

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Performance
NEXT_PUBLIC_ENABLE_DEBUG=false

# Security
ALLOWED_DOMAINS=TestaScreen.eu,www.TestaScreen.eu
```

### Performance Optimization

1. **Enable Compression**
   ```bash
   gzip on;
   gzip_types text/css text/javascript text/plain application/json;
   gzip_min_length 1024;
   ```

2. **Enable Caching**
   ```
   Cache-Control: public, max-age=31536000, immutable (for /images, /fonts)
   Cache-Control: public, max-age=3600 (for HTML pages)
   ```

3. **CDN Configuration**
   - Use CloudFront (AWS) or Cloudflare
   - Enable HTTP/2
   - Enable Brotli compression

---

## 📊 Monitoring & Logging

### Health Checks

```bash
# Check service health
curl https://TestaScreen.eu/health

# Monitor performance
curl https://TestaScreen.eu/api/health
```

### Logging Strategy

1. **Application Logs**
   - Use structured logging (Winston, Pino)
   - Send to centralized logging (ELK, Datadog)

2. **Error Tracking**
   - Sentry for error reporting
   - Alert on critical errors

3. **Performance Monitoring**
   - Vercel Analytics (recommended)
   - NewRelic or Datadog
   - Google Analytics 4

### Example Logging

```typescript
// lib/logger.ts
import pino from 'pino';

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});

export default logger;
```

---

## 🔐 Security Configuration

### SSL/TLS Certificate

```bash
# Using Let's Encrypt with Certbot
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --standalone -d TestaScreen.eu -d www.TestaScreen.eu

# Auto-renewal
sudo certbot renew --dry-run
```

### Security Headers (nginx)

```nginx
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
```

### Rate Limiting

```nginx
limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
limit_req_zone $binary_remote_addr zone=general:10m rate=100r/s;

server {
    location /api/ {
        limit_req zone=api burst=20 nodelay;
    }
    
    location / {
        limit_req zone=general burst=200 nodelay;
    }
}
```

---

## 📈 Scaling Strategy

### Horizontal Scaling

```yaml
# Load Balancing with nginx
upstream backend {
    server app1:3000;
    server app2:3000;
    server app3:3000;
}

server {
    location / {
        proxy_pass http://backend;
    }
}
```

### Database & Caching

- **Redis**: For session storage, caching
- **PostgreSQL**: For user data (if needed)
- **Elasticsearch**: For advanced search

---

## 🚨 Rollback Strategy

### Vercel

```bash
# View deployments
vercel ls

# Promote previous deployment
vercel promote <deployment-url>
```

### Docker

```bash
# Tag specific version
docker tag whitescreen:latest whitescreen:v1.0.0
docker push whitescreen:v1.0.0

# Rollback to previous version
docker run -p 3000:3000 whitescreen:v1.0.0
```

---

## ✅ Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] HTTPS/SSL enabled
- [ ] Security headers configured
- [ ] Database backups enabled
- [ ] Monitoring set up
- [ ] Error tracking configured
- [ ] Analytics installed
- [ ] robots.txt updated with correct domain
- [ ] sitemap.xml verified
- [ ] Lighthouse score 98+
- [ ] Core Web Vitals perfect
- [ ] DNS records configured
- [ ] Email alerts enabled
- [ ] CDN configured
- [ ] Rate limiting enabled
- [ ] WAF (Web Application Firewall) enabled

---

## 🆘 Troubleshooting

### High CPU Usage

```bash
# Check processes
top

# Monitor Node.js
node --prof app.js
node --prof-process isolate-*.log > profile.txt
```

### Memory Leaks

```bash
# Heap snapshot
node --inspect app.js
# Visit chrome://inspect
```

### Slow Performance

1. Check Core Web Vitals
2. Analyze bundle size
3. Review database queries
4. Check CDN performance
5. Monitor server resources

---

## 📞 Support

- **Documentation**: https://docs.TestaScreen.eu
- **Issues**: Create GitHub issue
- **Email**: deployment@TestaScreen.eu

---

**Last updated: May 2026**

