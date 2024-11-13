import express from 'express';
import dotenv from 'dotenv';
import puppeteer from 'puppeteer';

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/search', async (req, res) => {
  res.json({
    error: 'Please note: Direct scraping of LinkedIn data is against their Terms of Service. Consider these alternatives:',
    alternatives: [
      {
        name: 'LinkedIn Sales Navigator',
        description: 'Official LinkedIn tool for advanced searching',
        features: [
          'Advanced search filters',
          'Save leads and accounts',
          'InMail credits',
          'Profile viewing without restrictions'
        ],
        pricing: 'Starts at $99/month'
      },
      {
        name: 'LinkedIn Recruiter',
        description: 'Professional recruiting platform',
        features: [
          'Advanced search',
          'Bulk outreach',
          'Candidate tracking',
          'Team collaboration'
        ],
        pricing: 'Contact LinkedIn for pricing'
      },
      {
        name: 'LinkedIn API Partners',
        description: 'Official LinkedIn partners with API access',
        url: 'https://business.linkedin.com/marketing-solutions/marketing-partners'
      }
    ]
  });
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});