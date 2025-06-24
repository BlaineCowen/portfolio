# Blaine Cowen's Portfolio

My personal portfolio website showcasing my projects and skills. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Project showcase with live demos
- Skills and technologies section
- Education and certifications
- Contact information

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel Blob Storage

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```bash
BLOB_READ_WRITE_TOKEN=your_token_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

The following environment variables are required:

- `BLOB_READ_WRITE_TOKEN`: Vercel Blob storage token for image uploads

## Deployment

This site is deployed on Vercel. To deploy your own version:

1. Fork this repository
2. Create a new project on Vercel
3. Connect your forked repository
4. Add the required environment variables in the Vercel dashboard
5. Deploy!
