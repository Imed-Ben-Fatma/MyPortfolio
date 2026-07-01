# Generative Engine Optimization (GEO) Guide

This guide explains the **Generative Engine Optimization (GEO)** structure of this website (`https://www.imed-ben-fatma.site`). Use this document when instructing an AI Agent (like Antigravity IDE) to update, modify, or extend the website so that it remains fully optimized for AI search engines (like Google Gemini, ChatGPT Search, Perplexity, and Copilot).

---

## 1. What is GEO?
Generative Engine Optimization ensures that AI-based search tools can easily discover, crawl, parse, and synthesize facts about your professional profile. Instead of matching simple keywords, LLMs look for **entity-relationship graphs**, **factual density**, and **structured schema definitions**.

---

## 2. Core GEO Structures in the Codebase

### A. The JSON-LD Entity Graph (Critical)
Located in [src/app/[lang]/layout.tsx](file:///c:/Users/imadb/Desktop/New%20folder%20(10)/src/app/[lang]/layout.tsx), inside the `jsonLd` object. It maps your profile semantic tree:
* **`Person` entity**: Declares your identity, contact info, job title, same-as links (LinkedIn, GitHub), location, and core competencies (`knowsAbout`).
* **`Service` entities**: Represents your major freelance services (Web Development, Mobile Apps, QA Automation).
* **`SoftwareApplication` entities**: Declares your flagship projects (`B-CAR` and `novoPharma`) and defines you (`#person`) as the creator.
* **`FAQPage` entity**: Hosts direct, semantic question-and-answer pairs matching the visible FAQs.

### B. The Visible FAQ Section
Located in [src/app/[lang]/page.tsx](file:///c:/Users/imadb/Desktop/New%20folder%20(10)/src/app/[lang]/page.tsx), utilizing semantic `<details>` and `<summary>` HTML markup.
* Translations are located in [src/dictionaries/en.json](file:///c:/Users/imadb/Desktop/New%20folder%20(10)/src/dictionaries/en.json) and [src/dictionaries/fr.json](file:///c:/Users/imadb/Desktop/New%20folder%20(10)/src/dictionaries/fr.json) under `"faq"`.

### C. Bot Accessibility
Configured in [src/app/robots.ts](file:///c:/Users/imadb/Desktop/New%20folder%20(10)/src/app/robots.ts) which allows all AI scrapers (e.g. `GPTBot`, `OAI-SearchBot`, `Google-Extended`) to crawl the website.

---

## 3. Instructions for the AI Agent: How to Update GEO

When updating the site (e.g., adding a new tool, a new project, or changing contract availability), follow these rules:

### Rule 1: Keep the JSON-LD Sync'd
If you add a new project or change your services, you **must** update the JSON-LD in [layout.tsx](file:///c:/Users/imadb/Desktop/New%20folder%20(10)/src/app/[lang]/layout.tsx):
* **Example (Adding a new project application)**:
  ```json
  {
    "@type": "SoftwareApplication",
    "@id": "${baseUrl}/#newproject",
    "name": "New Project Name",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Factual 1-sentence description.",
    "creator": { "@id": "${baseUrl}/#person" }
  }
  ```
* **Example (Adding new skills)**: Append the tool name directly to the `knowsAbout` array of the `Person` entity.

### Rule 2: Update both the Visible FAQ and the FAQ Schema
If you change your professional status or want to target new AI queries:
1. Add the question/answer keys to `en.json` and `fr.json`.
2. Render the new `<details>` card on the homepage in [page.tsx](file:///c:/Users/imadb/Desktop/New%20folder%20(10)/src/app/[lang]/page.tsx).
3. Add the matching structured question to the `FAQPage` schema in [layout.tsx](file:///c:/Users/imadb/Desktop/New%20folder%20(10)/src/app/[lang]/layout.tsx):
   ```typescript
   {
     '@type': 'Question',
     'name': 'The question string?',
     'acceptedAnswer': {
       '@type': 'Answer',
       'text': 'The precise answer string.'
     }
   }
   ```

### Rule 3: Use Factual, Dense, and Metric-Rich Copy
When writing descriptions or answers for AI crawlers, avoid vague buzzwords. Use:
* Concrete technology terms (e.g., *Spring Boot 3, Next.js, JUnit 5*).
* Quantifiable outcomes (e.g., *reduced response times by 20%, automated 100+ E2E tests*).
* Specific roles and target markets.
