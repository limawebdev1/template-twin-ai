import axios from 'axios';
import fs from 'fs';

// Fetch HTML from a list of URLs
async function fetchWebsiteData(url: string): Promise<string> {
    const { data } = await axios.get(url);
    return data;
}

export async function collectData(urls: string[]): Promise<void> {
    const websiteData: string[] = [];
    for (const url of urls) {
        try {
            const html = await fetchWebsiteData(url);
            websiteData.push(html);
        } catch (error: any) {
            console.error(`Failed to fetch ${url}: ${error.message}`);
        }
    }
    fs.writeFileSync('./model-training/website-data/websiteData.json', JSON.stringify(websiteData, null, 2));
}

const urls: string[] = [
    'https://www.leagueoflegends.com/en-us/',
    'https://playruneterra.com/en-us/'
];

collectData(urls);